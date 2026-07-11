# RoSE vs. Kilroy et al. (Nature Communications, 2026) — Private Evidence Review

**Prepared:** March 2026  
**Purpose:** Evidence base for CV and public-profile updates. **Not for publication on website.**

**Sources reviewed:**
- Bhattacharya et al., *Soft Robotics* (2021), DOI [10.1089/soro.2019.0205](https://doi.org/10.1089/soro.2019.0205) — `pubs-own/03-SAGE-SoRO_RoSE_Stent.pdf`
- Kilroy et al., *Nature Communications* 17, 4854 (2026), DOI [10.1038/s41467-026-70260-2](https://doi.org/10.1038/s41467-026-70260-2) — `pubs-own/papers-cited-me/2026_Nature_Comm_Kilroy_Soft_Robotic_.pdf`
- CV/website files: `CV_latex_source/`, `index.html`, `narrative-cv.html`
- Employment and education entries in repository

**Sources not supplied in repository (limits noted):**
- Separate supplementary PDFs for either paper (only in-text references to Supplementary Figs/Notes/Movies)
- Thesis PDF/chapters, patents, raw code repos, or contribution-statement documents beyond what appears in papers and CV

---

## 1. Does the Nature Communications paper cite RoSE?

**Yes.** RoSE is **Reference 23**:

> Bhattacharya, D., Ali, S. J. V., Cheng, L. K. & Xu, W. RoSE: a robotic soft esophagus for endoprosthetic stent testing. *Soft Robot.* **8**, 397–415 (2021).

---

## 2. Every location where RoSE is cited, discussed, compared, adapted, or distinguished

| Location | What is said | Relationship |
|----------|--------------|--------------|
| **Introduction** (prior-art survey of benchtop GI models) | Soft models use “chambers **23,24**” for radial contractile movement via pneumatic artificial muscles; “these models… only simulate circumferential muscles” and neglect longitudinal muscles. Ref. 23 = RoSE; ref. 24 = SoGut. | **Explicitly cited as prior art**; positioned as circumferential-only predecessor |
| **Results — stent migration** (Fig. 4i discussion, ~p. 5–6) | Under isolated circumferential actuation, displacement patterns are “similar to **Bhattacharya et al.’s circumferential model 23**” with comparable stents (Stent A / Stent I) and wave velocities (**4.12 vs 4 cm/s**). | **Explicit experimental comparison** to RoSE-class behaviour |
| **Discussion** (~p. 8) | “Unlike other platforms that use **liquids to mimic esophageal friction 23,26**, we incorporate porcine esophageal tissue lining (RoboGullet+).” | **Explicit distinction** from RoSE friction/modelling approach |
| **Methods — Model geometry** (~p. 9) | “The **circumferential pneumatics were based on that proposed by Bhattacharya et al. 23**, and other foundational work by the Xu group **80,81**.” Longitudinal chambers use separate bellows design (ref. 35). | **Explicit design acknowledgment** (“based on”); not “adapted” or “extended” |
| **References** | Full bibliographic entry (ref. 23). | **Citation** |

**Not found in supplied PDF:** language that RoSE was “adapted,” “extended,” “derived from,” or “built on” as a whole platform. The strongest dependence language is **circumferential pneumatics “based on” Bhattacharya et al.**

---

## 3. “First,” “novel,” or precedence claims in the 2026 paper

| Claim (verbatim scope) | Location | Scope |
|------------------------|----------|-------|
| “enabling, **for the first time**, simulation of both normal and **diseased** esophageal motility” | Abstract | Independent **longitudinal + circumferential** muscle actuation enabling normal **and diseased** motility |
| “opens, **for the first time**, the possibility to simulate motility diseases, such as achalasia” | Discussion | **Longitudinal muscle tunability** for motility disorders |
| “no GI motility model has yet integrated [axial PAMs] with radial PAMs” | Introduction | **Dual-layer independent actuation** in GI motility models |
| “RoboGullet+ as a powerful translational tool” | Abstract | Platform-level translational claim (not a universal “first soft esophagus” claim) |

**Important:** The 2026 paper does **not** claim to be the first soft-robotic esophagus or first stent-testing benchtop. It cites RoSE/SoGut among prior chamber-based circumferential models and claims novelty around **independent dual-muscle-layer control**, **biohybrid tissue**, and **diseased motility simulation** (achalasia I–III, HRM-linked bolus studies).

---

## 4. Publication and dissemination chronology

| Date / period | Event | Evidence |
|---------------|-------|----------|
| 2014–2015 | Xu-group peristaltic actuator / swallowing-robot groundwork (Dirven, Chen, Xu) | Cited in RoSE (refs 34, 37, 38) and Nature Comm. (refs 80, 81, 42) |
| 2017 | M2VIP — actuation planning and modelling of soft swallowing robot (Bhattacharya first author) | `own-bib.bib`, CV employment |
| 2018 | BvW Holding industry contract (NZD 39,000) for RoSE stent testing | `grants.tex`, CV |
| 2018 | M2VIP — flared stent migration in esophageal swallowing robot | `own-bib.bib` |
| 2019 (submitted) | RoSE manuscript (DOI prefix `soro.2019.0205`) | Bibliographic DOI |
| 2020–2021 | Related RoSE control / modelling papers (*IEEE TIE*) | Publications list |
| **2021** | **RoSE published**, *Soft Robotics* **8**, 397–415 | RoSE PDF, bib |
| 20 Jun 2025 | Nature Comm. manuscript received | Kilroy PDF header |
| 17 Feb 2026 | Nature Comm. accepted | Kilroy PDF header |
| **12 Mar 2026** | Nature Comm. published online | Kilroy PDF header, article number 4854 |

---

## 5. Technical comparison

| Dimension | RoSE (2021) | RoboGullet / RoboGullet+ (2026) |
|-----------|-------------|----------------------------------|
| **Clinical / research application** | Endoprosthetic **stent testing** (RF, migration, IBPS, swallow efficacy); dysphagia/stent design | Stent migration **plus** achalasia diagnosis/diet, bolus transport, motility disorder simulation |
| **Anatomy / geometry** | Cylindrical conduit, 20 mm ID, 210 mm length; 12 axial layers | Hexagonal lumen (mucosal folds); ~20 mm ID, ~32 cm; segmented rings |
| **Soft materials / fabrication** | EcoFlex 00-30; ABS molds; **multi-cast silicone** | EcoFlex 00-30 (circumferential) + **DragonSkin 20** (longitudinal); **lost-wax casting** |
| **Muscle-layer representation** | **Circumferential (circular) only** — pneumatic chambers mimic circular muscle | **Independent circumferential + longitudinal** concentric layers |
| **Actuation** | **Pneumatic** chambers; overlapping sequential peristalsis; open-loop proportional valves + Raspberry Pi | **Pneumatic** hexagonal rings + bellows longitudinal PAMs; Arduino valve control |
| **Peristaltic wave** | Programmable wave speed (20–40 mm/s), wavefront length, symmetric or peristaltic protocols | Passive / pre-bolus / post-bolus stages; PID/PWM waves; achalasia wave parameterisation |
| **Lumen / occlusion / shortening** | Radial occlusion via chamber inflation; **no independent axial shortening** | Radial + **axial** displacement; explicit pre/post-bolus mechanics |
| **Pressure / force measurement** | Stent RF (FSP), chamber pressure, **endoscopic manometry / IBPS** | **High-resolution manometry** (ManoScan); computational HRM comparison |
| **Bolus / motility** | Synthetic boluses (3 concentrations); manometry + videofluoroscopy comparisons | Water, glycerol, thickeners, **Greek yoghurt**; achalasia typing via Chicago Classification metrics |
| **Stent testing** | **Core focus** — two stent designs (A/B), RF, migration, dysfunction | Five commercial stents; 30 swallow cycles; tissue effects on PC vs FC migration |
| **Sensing / control** | Python firmware; CSV pressure profiles; later work MPC/SINDYc (*IEEE TIE*) | FEA-informed material split; supplementary control notes; HRM-validated waves |
| **Physiological validation** | Manometry IBPS compared to human swallow literature | HRM topography vs computational model; achalasia diagnostic thresholds |
| **Modularity / repeatability** | Repeatable RF/migration protocols; industry test reports (CV) | Modular segments; regression statistics; n=5 repeats |
| **Hardware / software / data** | Custom Pi + SMC valves; supplementary movies in RoSE | Arduino pneumatics; supplementary figs/notes referenced; source data declared |

---

## 6. Substantive advances in 2026 **absent from RoSE** (documented)

1. **Independent longitudinal + circumferential pneumatic actuation** in one esophageal model  
2. **Biohybrid RoboGullet+** with porcine mucosa/submucosa for friction/compliance  
3. **Hexagonal lumen** shaped to mimic mucosal folding (FEA + Dice/Sørensen vs porcine data)  
4. **Achalasia types I–III simulation** with HRM validation and Chicago Classification metrics  
5. **Bolus viscosity / non-Newtonian diet studies** (glycerol, thickeners, stirred vs unstirred yoghurt)  
6. **Quantified effect of longitudinal muscle** on stent migration (e.g. ~5× change vs circumferential-only)  
7. **Dual-material stiffness engineering** (EcoFlex vs DragonSkin) for actuation decoupling  

---

## 7. Dipankar Bhattacharya’s documented contributions to RoSE

| Evidence source | Documented role |
|-----------------|-----------------|
| RoSE paper author list | **First author** (Bhattacharya, D.) |
| RoSE Methods | Platform **design** (12-layer pneumatic actuator, EcoFlex casting, ABS molds); **firmware** (Python 3.7 on Raspberry Pi); **symmetric and peristaltic actuation protocols**; stent RF, migration, and manometry experimental protocols |
| CV `employment.tex` (2018–2019 RA) | Measured **stent migration** across designs; developed **actuation protocols** and industry **test reports** (BvW) |
| CV `education.tex` / thesis title | PhD on **design, modelling, and control** for stent testing and food-swallow investigation |
| M2VIP 2017 (first author) | **Actuation planning and modelling** of soft swallowing robot |
| M2VIP 2018 (first author) | **Migration displacement** analysis for flared stent in swallowing robot |
| RoSE Discussion / future work | Embedded sensing and closed-loop control noted as underway (separate *IEEE TIE* outputs) |

**Not supported by supplied evidence:** sole invention of the entire Auckland esophageal-robotics line (RoSE cites Xu-group actuator papers 34, 38); exclusive clinical translation without co-authors (Jesna, Cheng, Xu).

---

## 8. Evidence table for proposed public claims

| Proposed claim | RoSE evidence | Nature Comm. evidence | Citation / page | Relationship type | Confidence | Public wording |
|----------------|---------------|----------------------|-----------------|-------------------|------------|----------------|
| RoSE is an early soft-robotic esophagus for stent testing | Title, abstract, stent RF/migration/manometry experiments | Ref. 23; intro lists chambers 23,24 as prior circumferential models | RoSE throughout; Nat. Comm. intro, ref. 23 | explicitly cited as prior art | **High** | “early soft-robotic platform for controlled endoprosthetic stent testing” |
| RoSE enabled migration, RF, and manometry studies | Methods, Results, Table 1, Figs 3–5 | Compares circumferential-only results to “Bhattacharya et al.’s circumferential model” | RoSE Methods/Results; Nat. Comm. Fig. 4i discussion | explicitly cited; experimental comparison | **High** | “in vitro measurement of stent radial force, migration, and intrabolus pressure” |
| Industry translation via BvW contract | CV grants/employment; RoSE stent testing focus | Stent migration study design (commercial stents) | CV; RoSE | independent RoSE evidence | **High** (for contract); **Medium** (for direct BvW link in Nature paper) | “industry-funded stent testing (BvW Holding)” |
| First author / lead experimental role | Author order; firmware and protocol detail in Methods | — | RoSE | unsupported for “sole creator” | **High** (first author); **Low** (sole credit) | “first-author RoSE paper”; “co-developed… programmed… experimentally validated” |
| Circumferential pneumatic design influenced later work | Pneumatic chamber layers, EcoFlex, peristaltic sequencing | “circumferential pneumatics were **based on** that proposed by Bhattacharya et al.” | Nat. Comm. Methods; RoSE Fig. 2, Methods | adapted or reused with explicit acknowledgment (partial — **circumferential pneumatics only**) | **High** for acknowledgment; **Medium** for “influence” framing | “circumferential pneumatic approach later referenced in biomimetic motility research” — **not** “RoSE was extended” |
| Whole platform adapted/extended | — | No “adapted/extended RoSE” wording; adds longitudinal layer + biohybrid tissue | Nat. Comm. throughout | unsupported for whole-platform dependence | **High** (that Level 4 is **not** supported) | Do **not** use “built on RoSE” for entire RoboGullet platform |
| Field continues to attract high-impact work | 2021 *Soft Robotics* publication | 2026 *Nature Communications* cites RoSE | Chronology + ref. 23 | technically similar; continuing research direction | **High** | “continuing relevance reflected in subsequent biomimetic esophageal motility research” |
| RoSE simulated longitudinal muscles | RoSE describes **circular** muscle activation only | Intro states 23,24 lack longitudinal muscle | RoSE Methods; Nat. Comm. intro | distinction, not RoSE capability | **High** | Do **not** claim RoSE had independent longitudinal actuation |
| RoboGullet is first dual-muscle GI motility model | — | Abstract/intro “first time” claims scoped to dual independent actuation + diseased motility | Nat. Comm. abstract, intro | independent development in same research direction | **High** (their claim, not ours) | May note “subsequent work advanced independent longitudinal–circumferential control” without disputing priority |

---

## 9. Supported relationship classification (summary)

**Overall:** Between **Level 3** and a **narrow Level 3+**:

- **Level 3 (supported):** RoSE is **cited** as relevant prior work; continuing relevance in 2026 *Nature Communications* biomimetic esophageal motility research.  
- **Level 4 (not supported for whole platform):** Paper does **not** state RoboGullet “adapted” or “extended” RoSE.  
- **Partial acknowledgment (supported, precise wording only):** Circumferential pneumatics were “**based on**” Bhattacharya et al. (2021).

**Do not infer** that the 2026 team copied RoSE or failed to cite it — they cite and discuss it in multiple places.

---

## 10. Strongest defensible public claim (recommended)

> **My doctoral research produced RoSE, an early soft-robotic platform for controlled endoprosthetic stent testing (radial force, migration, and manometry), published in *Soft Robotics* (2021) following industry-funded validation work. Its continuing relevance is reflected in subsequent biomimetic esophageal motility research, including a 2026 *Nature Communications* study that cites RoSE and references its circumferential pneumatic design.**

Optional second sentence (if space):

> That later work advances independent longitudinal–circumferential actuation and biohybrid tissue—capabilities beyond RoSE’s circumferential-focused scope.

---

## 11. Claims rejected as unsupported

| Rejected claim | Reason |
|----------------|--------|
| “RoSE was the foundation for RoboGullet” / “built on RoSE” (whole platform) | Only circumferential pneumatics “based on”; separate longitudinal/biohybrid/achalasia advances |
| “I invented the first soft-robotic esophagus” | Prior Xu-group swallowing robots; Nature intro surveys earlier chamber/cable/piston models |
| “2026 paper incrementally extended my work” | User instruction; also not precise — substantial new subsystems documented |
| “RoboGullet failed to cite RoSE” | False — ref. 23 + multiple in-text mentions |
| “RoSE included longitudinal muscle actuation” | RoSE Methods describe circular-muscle-mimicking radial chambers only |
| “I solely created RoSE” | Co-authors; builds on Auckland Xu-group actuator literature |
| Plagiarism / misconduct / inadequate citation allegations | Out of scope; citation present |

---

## 12. Questions requiring user confirmation

1. **Thesis contribution statement:** No thesis PDF in repo — confirm PhD examiner/supervisor wording for “conceived vs co-developed” if stronger authorship language is needed.  
2. **BvW / commercial confidentiality:** OK to keep naming BvW and NZD 39,000 on public profiles? (Already on CV/website.)  
3. **Nature Comm. highlight on website:** Add a restrained “subsequent related work” news item, or only enrich the existing RoSE post?  
4. **Annotated bibliography:** `publications.tex` uses numeric biblatex without notes — prefer significance line in `research.tex` vs. adding `note={...}` to `own-bib.bib`?  
5. **Sync copies:** Update `CV_fellowship/` and `_CV__Dipankar/` mirrors when applying edits?  
6. **Separate supplementary PDFs:** If you have RoSE/Nature SI files, they could refine friction-model and wave-parameter comparisons.

---

## 13. Proposed files for public modification (pending approval)

| File | Change |
|------|--------|
| `CV_latex_source/research.tex` | Level 3 RoSE wording + 25–45 word standard line |
| `CV_latex_source/education.tex` | One-sentence RoSE significance under PhD |
| `CV_latex_source/narrative-cv.tex` | New ~100–150 word RoSE narrative subsection |
| `CV_latex_source/achievements-highlights.tex` | Optional bullet on cited follow-on work |
| `index.html` | Restrained RoSE research highlight + Nature link as “subsequent related work” |
| `CV_fellowship/research.tex`, `education.tex` | Mirror if synced |
| `_CV__Dipankar/education.tex` | Mirror if synced |

**Compile after approval:** `cv-simple.tex`, `cv-llt.tex`, `narrative-cv.tex`, `achievements-highlights.tex`

**Private only:** `rose_nature_comparison.md` (this file) — **not** linked from website.
