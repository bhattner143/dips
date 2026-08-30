#!/usr/bin/env python3
"""Extract still images from a talk video (default: My-part.mp4).

Uses ffmpeg (must be on PATH). Two modes:
  interval  — save a frame every N seconds (default)
  scenes    — save frames on scene/slide changes (good for talks)

Examples:
  python3 extract_frames.py
  python3 extract_frames.py --mode scenes
  python3 extract_frames.py My-part.mp4 --every 2 --outdir frames
  python3 extract_frames.py --mode scenes --threshold 0.25
"""

from __future__ import annotations

import argparse
import shutil
import subprocess
import sys
from pathlib import Path


def require_ffmpeg() -> str:
    path = shutil.which("ffmpeg")
    if not path:
        sys.exit("error: ffmpeg not found on PATH. Install it (e.g. brew install ffmpeg).")
    return path


def run(cmd: list[str]) -> None:
    print("+", " ".join(cmd))
    subprocess.run(cmd, check=True)


def extract_interval(
    ffmpeg: str,
    video: Path,
    outdir: Path,
    every: float,
    quality: int,
) -> None:
    # fps = 1/every → one frame every `every` seconds
    pattern = str(outdir / "frame_%04d.jpg")
    run(
        [
            ffmpeg,
            "-hide_banner",
            "-y",
            "-i",
            str(video),
            "-vf",
            f"fps=1/{every}",
            "-pix_fmt",
            "yuvj420p",
            "-q:v",
            str(quality),
            pattern,
        ]
    )


def extract_scenes(
    ffmpeg: str,
    video: Path,
    outdir: Path,
    threshold: float,
    quality: int,
) -> None:
    # Scene-detect filter; lower threshold → more frames.
    # Always keep the first frame so short clips still produce an image.
    pattern = str(outdir / "scene_%04d.jpg")
    run(
        [
            ffmpeg,
            "-hide_banner",
            "-y",
            "-i",
            str(video),
            "-vf",
            f"select='eq(n\\,0)+gt(scene\\,{threshold})'",
            "-fps_mode",
            "vfr",
            "-pix_fmt",
            "yuvj420p",
            "-q:v",
            str(quality),
            pattern,
        ]
    )


def main() -> None:
    here = Path(__file__).resolve().parent
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument(
        "video",
        nargs="?",
        default=str(here / "My-part.mp4"),
        help="Input video path (default: talks/My-part.mp4)",
    )
    parser.add_argument(
        "--outdir",
        default=str(here / "frames"),
        help="Output directory (default: talks/frames)",
    )
    parser.add_argument(
        "--mode",
        choices=("interval", "scenes"),
        default="interval",
        help="interval = every N seconds; scenes = on slide/scene change",
    )
    parser.add_argument(
        "--every",
        type=float,
        default=1.0,
        help="Seconds between frames in interval mode (default: 1.0)",
    )
    parser.add_argument(
        "--threshold",
        type=float,
        default=0.3,
        help="Scene-change sensitivity 0–1; lower = more images (default: 0.3)",
    )
    parser.add_argument(
        "--quality",
        type=int,
        default=2,
        help="JPEG quality for ffmpeg -q:v (2=high, 31=low; default: 2)",
    )
    args = parser.parse_args()

    video = Path(args.video).expanduser().resolve()
    if not video.is_file():
        sys.exit(f"error: video not found: {video}")

    outdir = Path(args.outdir).expanduser().resolve()
    outdir.mkdir(parents=True, exist_ok=True)

    ffmpeg = require_ffmpeg()
    if args.mode == "interval":
        if args.every <= 0:
            sys.exit("error: --every must be > 0")
        extract_interval(ffmpeg, video, outdir, args.every, args.quality)
    else:
        extract_scenes(ffmpeg, video, outdir, args.threshold, args.quality)

    images = sorted(outdir.glob("*.jpg")) + sorted(outdir.glob("*.png"))
    print(f"\nWrote {len(images)} image(s) to {outdir}")


if __name__ == "__main__":
    main()
