// Blog posts data
const blogPosts = {
    'nvidia-robotics-day-2026': {
        title: 'NVIDIA Robotics Day 2026 — Embodied Intelligence at Imperial College London',
        date: 'February 11, 2026',
        body: `
            <p style="font-size:16px; color:#333; line-height:1.9;">
            On 11 February 2026, Imperial College London hosted <strong>NVIDIA Robotics Day 2026</strong> — a full-day
            symposium organised by the School of Convergence Science, Human and Artificial Intelligence. The event
            convened leading researchers from Imperial alongside engineers and scientists from NVIDIA to chart the
            frontiers of <strong>embodied intelligence</strong>: the convergence of perception, learning, simulation,
            and physical action that is redefining what robots can do in the real world.</p>

            <div class="blog-event-details">
                <span>📅 Wednesday 11 February 2026</span>
                <span>🕚 11:00 – 16:30 GMT</span>
                <span>📍 G16 Lecture Theatre, Sir Alexander Fleming Building</span>
                <span>🎟 Free admission</span>
            </div>

            <p>👉 <a href="https://www.imperial.ac.uk/events/204543/nvidia-robotics-day-2026/" target="_blank">
            Official Event Page</a></p>

            <!-- ═══════════════════════════════════════════════════════════ -->
            <!--  MORNING SESSION — Prof. Stephen James & Collaborators    -->
            <!-- ═══════════════════════════════════════════════════════════ -->

            <!-- ─── SECTION 1 — IMG_7684 (idx 0) ─── -->
            <h3 class="blog-section-title">1. Genima — Turning Robot Control into Image Generation</h3>
            <p>The symposium opened with a striking reframing of robot manipulation: what if a robot
            controller could simply <em>draw</em> the answer? <strong>Genima</strong>
            (Shridhar, Lo &amp; James, CoRL 2024) does exactly that — given the current camera
            observation, a diffusion model generates a <em>target image</em> depicting where objects
            should end up, and a low-level controller drives the robot to reach those targets.
            By casting control as image generation, Genima sidesteps the need for explicit
            action-space engineering.</p>

            <div class="blog-inline-images">
                <img src="conf_nvidia/jpg/IMG_7684.jpg" alt="Genima — Robotics Into an Image Generation Problem"
                     onclick="openLightbox('nvidia-robotics-day-2026', 0)" loading="lazy">
            </div>
            <p class="blog-caption">Opening slide: Framing robotic manipulation as an image generation problem (Shridhar, Lo &amp; James, CoRL 2024).</p>

            <div class="mermaid-container">
                <pre class="mermaid">
flowchart LR
    OBS["🤖 Current<br/>Observation"] --> DM["SD-Turbo<br/>+ ControlNet"]
    DM -->|draws| TGT["🎯 Target<br/>Image"]
    TGT --> CTRL["Low-Level<br/>Controller"]
    CTRL -->|executes| ACT["Robot<br/>Action"]
    ACT -.->|next frame| OBS
    style DM fill:#76b900,stroke:#333,color:#fff
    style CTRL fill:#0066cc,stroke:#333,color:#fff
                </pre>
            </div>

            <!-- ─── SECTION 2 — IMG_7685 (idx 1) ─── -->
            <h3 class="blog-section-title">2. An LLM-Powered Architecture for Perception &amp; Action</h3>
            <p>Next came an overview of a full-stack architecture for <strong>LLM-driven robotic control</strong>.
            The system fuses RGBD motion tracking, human state estimation (posture, gaze, actions),
            and SLAM-based scene understanding into a unified pipeline. Three LLM-powered assistants
            collaborate in sequence: an <em>Object Affordances Assistant</em> identifies what actions
            objects support, an <em>Action Generator</em> proposes the next action given the human's
            state and gaze, and an <em>Action Verification Assistant</em> validates the proposal
            before it reaches the motion planner.</p>

            <div class="blog-inline-images">
                <img src="conf_nvidia/jpg/IMG_7685.jpg" alt="LLM-based robotic control architecture"
                     onclick="openLightbox('nvidia-robotics-day-2026', 1)" loading="lazy">
            </div>
            <p class="blog-caption">A multi-assistant LLM architecture: RGBD perception → affordance reasoning → action generation → verification → motion planning.</p>

            <div class="mermaid-container">
                <pre class="mermaid">
flowchart TD
    W["🌐 World"] --> RGBD["RGBD Motion<br/>Tracking"]
    W --> RP["Robot's<br/>Perception (SLAM)"]
    RGBD --> H["Human State<br/>+ Gaze"]
    RP -->|detected objects| OA["Object Affordances<br/>Assistant (LLM)"]
    H --> AG["Action Generator<br/>Assistant (LLM)"]
    OA -->|affordances| AG
    AG -->|state, gaze,<br/>proposed action| AV["Action Verification<br/>Assistant (LLM)"]
    OA -->|affordances| AV
    AV -->|yes/no| MP["Motion<br/>Planner"]
    AG -->|actions| MP
    MP -->|trajectory| W
    style AG fill:#4285f4,stroke:#333,color:#fff
    style OA fill:#4285f4,stroke:#333,color:#fff
    style AV fill:#4285f4,stroke:#333,color:#fff
    style MP fill:#76b900,stroke:#333,color:#fff
                </pre>
            </div>

            <!-- ─── SECTION 3 — IMG_7686 (idx 2) ─── -->
            <h3 class="blog-section-title">3. Coarse-to-Fine Reinforcement Learning (CQN)</h3>
            <p>Prof. Stephen James then presented <strong>Coarse-to-Fine Reinforcement Learning</strong>
            (Seo, Uruc &amp; James, CoRL 2024), introducing <strong>CQN</strong> — a hierarchical method
            for continuous robot control. The key insight: rather than predicting a single continuous
            action value, CQN recursively subdivides the action space into discrete bins across
            multiple levels. At each level it selects the highest-Q bin and zooms in, achieving
            fine-grained precision without the sample inefficiency of purely continuous methods.</p>

            <div class="blog-inline-images">
                <img src="conf_nvidia/jpg/IMG_7686.jpg" alt="Coarse-to-Fine RL — Hierarchical Binning"
                     onclick="openLightbox('nvidia-robotics-day-2026', 2)" loading="lazy">
            </div>
            <p class="blog-caption">CQN: hierarchical action-space binning at 3 levels — progressively finer discretisation of the continuous action space.</p>

            <div class="mermaid-container">
                <pre class="mermaid">
flowchart TD
    L1["Level 1: 5 Coarse Bins<br/>[-1, 1]"] -->|"Q=0.78 → select [-0.2, 0.2]"| L2["Level 2: 5 Finer Bins<br/>[-0.2, 0.2]"]
    L2 -->|"Q=0.95 → select [-0.04, 0.04]"| L3["Level 3: 5 Finest Bins<br/>[-0.04, 0.04]"]
    L3 -->|"Q=0.99 → select"| ACT["Final Action: -0.016"]
    style L1 fill:#4285f4,stroke:#333,color:#fff
    style L2 fill:#34a853,stroke:#333,color:#fff
    style L3 fill:#f4a832,stroke:#333,color:#fff
    style ACT fill:#76b900,stroke:#333,color:#fff
                </pre>
            </div>

            <!-- ─── SECTION 4 — IMG_7687 (idx 3) + IMG_7688 (idx 4) ─── -->
            <h3 class="blog-section-title">4. In-Context Learning &amp; Robust Locomotion with FLAIR</h3>
            <p>The talk continued with <strong>in-context learning</strong> for robotics — a paradigm
            where a pretrained model receives a handful of demonstration trajectories as context and
            immediately generalises to new scenarios without fine-tuning. The model attends over a
            sequence of demonstration states to predict actions for the current state, enabling
            rapid deployment from just a few examples.</p>

            <p>Following this, the <strong>FLAIR</strong> framework demonstrated automatic compensation
            for external perturbations during robot locomotion. A mobile robot navigated while
            subjected to simulated wind; without FLAIR the robot drifted off course, while with
            FLAIR it maintained its planned trajectory — a critical capability for outdoor and
            industrial deployments.</p>

            <div class="blog-inline-images two-col">
                <img src="conf_nvidia/jpg/IMG_7687.jpg" alt="In-Context Learning for Robotics"
                     onclick="openLightbox('nvidia-robotics-day-2026', 3)" loading="lazy">
                <img src="conf_nvidia/jpg/IMG_7688.jpg" alt="FLAIR — Automatic Wind Perturbation Compensation"
                     onclick="openLightbox('nvidia-robotics-day-2026', 4)" loading="lazy">
            </div>
            <p class="blog-caption">Left: In-context learning from demo sequences — generalisation without fine-tuning. Right: FLAIR vs No FLAIR under simulated wind.</p>

            <div class="mermaid-container">
                <pre class="mermaid">
flowchart LR
    subgraph Context["📋 Demonstration Context"]
        D1["Demo 1<br/>States 1..L"]
        DN["Demo N<br/>States 1..L"]
    end
    CS["Current<br/>State"] --> TF["Transformer<br/>Policy"]
    Context --> TF
    TF --> P1["Action 1"]
    TF --> PT["Action T"]
    style TF fill:#76b900,stroke:#333,color:#fff
    style Context fill:#f0f8ff,stroke:#0066cc
                </pre>
            </div>

            <!-- ─── SECTION 5 — IMG_7689 (idx 5) + IMG_7690 (idx 6) ─── -->
            <h3 class="blog-section-title">5. Instant Policy &amp; the Full Genima Pipeline</h3>
            <p><strong>Instant Policy</strong> (Vosylius &amp; Johns, ICLR 2025) demonstrated
            real-time human-to-robot imitation: a person performs a task and the policy instantly
            replicates it on a Sawyer robot, with no explicit programming or re-training. This
            one-shot transfer from human demonstration to robot execution showcases how far
            few-shot imitation learning has come.</p>

            <p>The session then circled back to the full <strong>Genima pipeline</strong>, showing how
            SD-Turbo paired with ControlNet generates goal images that a low-level controller executes.
            The beauty of the approach lies in its modularity: the generative model handles high-level
            planning (what the scene should look like), while classical control handles low-level
            execution (how to get there).</p>

            <div class="blog-inline-images two-col">
                <img src="conf_nvidia/jpg/IMG_7689.jpg" alt="Instant Policy — Vosylius and Johns, ICLR 2025"
                     onclick="openLightbox('nvidia-robotics-day-2026', 5)" loading="lazy">
                <img src="conf_nvidia/jpg/IMG_7690.jpg" alt="Genima Pipeline — SD-Turbo + ControlNet"
                     onclick="openLightbox('nvidia-robotics-day-2026', 6)" loading="lazy">
            </div>
            <p class="blog-caption">Left: Instant Policy — real-time human-to-robot transfer on a Sawyer arm. Right: The complete Genima pipeline using SD-Turbo + ControlNet.</p>

            <!-- ─── SECTION 6 — IMG_7691 (idx 7) ─── -->
            <h3 class="blog-section-title">6. Real-World Validation: CQN in Action</h3>
            <p>Closing the morning session, Prof. James returned to <strong>CQN</strong> with
            compelling real-world results. Side-by-side comparisons on a drawer-opening task showed
            CQN significantly outperforming the <strong>DrQ-v2+</strong> baseline — achieving more
            consistent grasps, smoother trajectories, and higher success rates. The results validated
            that hierarchical coarse-to-fine discretisation translates from simulation to the real
            world with minimal performance degradation.</p>

            <div class="blog-inline-images">
                <img src="conf_nvidia/jpg/IMG_7691.jpg" alt="CQN vs DrQ-v2+ — Real-World Comparison"
                     onclick="openLightbox('nvidia-robotics-day-2026', 7)" loading="lazy">
            </div>
            <p class="blog-caption">CQN (left) vs DrQ-v2+ (right) on real-world drawer opening — CQN delivers more reliable grasps and smoother execution.</p>

            <!-- ═══════════════════════════════════════════════════════════ -->
            <!--  MIDDAY SESSION — NVIDIA                                  -->
            <!-- ═══════════════════════════════════════════════════════════ -->

            <!-- ─── SECTION 7 — IMG_7692 (idx 8) + IMG_7693 (idx 9) ─── -->
            <h3 class="blog-section-title">7. NVIDIA: Contact Physics &amp; Scaling Laws for Embodied AI</h3>
            <p>The midday NVIDIA session opened with their approach to <strong>contact simulation</strong> —
            the bedrock of physics-based robot training. Their key design principle: the physics solver
            should <em>not</em> need to know about geometry. A contact detection module finds overlapping
            pairs, identifies reaction points (position, normal direction, overlap depth, body references),
            and passes them to the solver as a flat list. Speculative contacts are created <em>before</em>
            actual overlap occurs, improving stability.</p>

            <p>This was immediately followed by a discussion of <strong>scaling laws</strong>: the observation
            that larger compute budgets, richer datasets, and bigger models reliably yield better
            performance. Long validated for LLMs and vision transformers, these laws are now being
            applied to robotics — suggesting that the same data-hungry, compute-intensive recipe
            can power the next generation of robot brains.</p>

            <div class="blog-inline-images two-col">
                <img src="conf_nvidia/jpg/IMG_7692.jpg" alt="NVIDIA — What is a Contact?"
                     onclick="openLightbox('nvidia-robotics-day-2026', 8)" loading="lazy">
                <img src="conf_nvidia/jpg/IMG_7693.jpg" alt="Scaling Laws for LLMs and Vision Transformers"
                     onclick="openLightbox('nvidia-robotics-day-2026', 9)" loading="lazy">
            </div>
            <p class="blog-caption">Left: NVIDIA's geometry-agnostic contact simulation. Right: Scaling laws — the foundation for embodied foundation models.</p>

            <div class="mermaid-container">
                <pre class="mermaid">
flowchart TD
    GEO["Geometry<br/>Representation"] --> CD["Contact<br/>Detection"]
    CD -->|"position, normal,<br/>overlap depth,<br/>body references"| CL["Contact<br/>Point List"]
    CL --> PS["Physics Solver<br/>(geometry-agnostic)"]
    PS --> DYN["Dynamics<br/>Update"]
    SC["Speculative<br/>Contacts"] -.->|"pre-overlap<br/>creation"| CL
    style CD fill:#76b900,stroke:#333,color:#fff
    style PS fill:#333,stroke:#76b900,color:#fff
                </pre>
            </div>

            <div class="mermaid-container">
                <pre class="mermaid">
graph LR
    A["Compute ↑"] --> D["Better Robot<br/>Performance"]
    B["Dataset Size ↑"] --> D
    C["Model Parameters ↑"] --> D
    D --> E["Foundation Models<br/>for Robotics"]
    E --> F["Sim-to-Real<br/>Transfer"]
    E --> G["Zero-Shot<br/>Generalisation"]
    E --> H["Multi-Task<br/>Learning"]
    style D fill:#76b900,stroke:#333,color:#fff
    style E fill:#333,stroke:#76b900,color:#fff
                </pre>
            </div>

            <!-- ─── SECTION 8 — IMG_7694 (idx 10) ─── -->
            <h3 class="blog-section-title">8. NVIDIA Research Ecosystem: Cosmos Policy, SONIC, DreamZero &amp; DreamGen</h3>
            <p>NVIDIA then mapped their broader research landscape for embodied AI,
            connecting four major threads of ongoing work:</p>
            <ul style="margin: 8px 0 16px 24px; color: #444; line-height: 1.8;">
                <li><strong>Cosmos Policy</strong> — world-model guided robot planning (arxiv 2601.16163)</li>
                <li><strong>SONIC</strong> — scalable open-domain navigation (arxiv 2511.07820)</li>
                <li><strong>DreamZero</strong> — dream-based robot policy learning without real data</li>
                <li><strong>DreamGen</strong> — generative world models for synthetic training data</li>
            </ul>

            <div class="blog-inline-images">
                <img src="conf_nvidia/jpg/IMG_7694.jpg" alt="NVIDIA Related Research — Cosmos, SONIC, DreamZero, DreamGen"
                     onclick="openLightbox('nvidia-robotics-day-2026', 10)" loading="lazy">
            </div>

            <div class="mermaid-container">
                <pre class="mermaid">
graph TB
    NV["NVIDIA Embodied AI<br/>Research Ecosystem"] --> CP["Cosmos Policy<br/>World-model guided<br/>robot planning"]
    NV --> SO["SONIC<br/>Scalable open-domain<br/>navigation"]
    NV --> DZ["DreamZero<br/>Dream-based robot<br/>policy learning"]
    NV --> DG["DreamGen<br/>Generative world<br/>models for training"]
    CP -->|"arxiv 2601.16163"| APP["Real-World<br/>Deployment"]
    SO -->|"arxiv 2511.07820"| APP
    DZ --> APP
    DG --> APP
    style NV fill:#76b900,stroke:#333,color:#fff
    style APP fill:#333,stroke:#76b900,color:#fff
                </pre>
            </div>

            <!-- ─── SECTION 9 — IMG_7695 (idx 11) + IMG_7696 (idx 12) + IMG_7697 (idx 13) + IMG_7698 (idx 14) ─── -->
            <h3 class="blog-section-title">9. NVIDIA Isaac for Healthcare — Surgical Robotics &amp; Simulation</h3>
            <p>A highlight of the NVIDIA session was <strong>Isaac for Healthcare</strong>, showcasing
            how the full NVIDIA stack — Omniverse, Isaac Sim, Cosmos, MONAI, and Holoscan — is being
            applied to train surgical robots. The pipeline combines digital twins with teleoperation,
            synthetic data generation, and both imitation and reinforcement learning to produce
            deployable AI policy models.</p>

            <div class="blog-inline-images two-col">
                <img src="conf_nvidia/jpg/IMG_7695.jpg" alt="Isaac for Healthcare architecture"
                     onclick="openLightbox('nvidia-robotics-day-2026', 11)" loading="lazy">
                <img src="conf_nvidia/jpg/IMG_7696.jpg" alt="Deformable Gaussian Splats with G-SHARP"
                     onclick="openLightbox('nvidia-robotics-day-2026', 12)" loading="lazy">
            </div>
            <p class="blog-caption">Left: NVIDIA Isaac for Healthcare — from digital twin to deployed surgical robot. Right: G-SHARP Gaussian splatting for surgical scene reconstruction.</p>

            <div class="mermaid-container">
                <pre class="mermaid">
flowchart LR
    subgraph Inputs["Inputs"]
        R["🤖 Robot"]
        S["📡 Sensor"]
        AN["🫀 Anatomy"]
    end
    Inputs --> DT["Digital Twin &<br/>Teleoperation<br/>(Omniverse)"]
    DT --> HD["Human<br/>Demonstration"]
    DT --> SDG["Synthetic Data<br/>Generation"]
    HD --> IL["Imitation<br/>Learning<br/>(Isaac)"]
    SDG --> RL["Reinforcement<br/>Learning<br/>(Cosmos)"]
    IL --> PM["AI Policy<br/>Model"]
    RL --> PM
    PM --> DEP["Deployed<br/>Surgical Robot<br/>(Holoscan)"]
    style DT fill:#76b900,stroke:#333,color:#fff
    style PM fill:#333,stroke:#76b900,color:#fff
    style DEP fill:#0066cc,stroke:#333,color:#fff
                </pre>
            </div>

            <p>Two breakthrough results followed in rapid succession:</p>
            <ul style="margin: 8px 0 16px 24px; color: #444; line-height: 1.8;">
                <li><strong>Deformable Gaussian Splats with G-SHARP</strong> — real-world surgical scenes
                reconstructed in under 2 minutes using a commercially usable Gaussian splatting engine,
                with inference at 30 fps. This enables real-to-sim transfer where Gaussians model tissue dynamics.</li>
                <li><strong>SDG: Data Augmentation via Controllable World Generation</strong> — using Cosmos-transfer1
                to generate diverse synthetic training data from simulator outputs.</li>
                <li><strong>Cosmos Transfer 2.5</strong> — integration with surgical simulators to achieve
                photorealistic simulation, producing 720p surgical videos at ~2 fps by training on real
                surgical datasets and extracting depth/instance segmentations.</li>
            </ul>

            <div class="blog-inline-images two-col">
                <img src="conf_nvidia/jpg/IMG_7697.jpg" alt="SDG: Data Augmentation via World Generation"
                     onclick="openLightbox('nvidia-robotics-day-2026', 13)" loading="lazy">
                <img src="conf_nvidia/jpg/IMG_7698.jpg" alt="Cosmos Transfer 2.5 with Surgical Simulators"
                     onclick="openLightbox('nvidia-robotics-day-2026', 14)" loading="lazy">
            </div>
            <p class="blog-caption">Left: Synthetic data generation with Cosmos-transfer1. Right: Cosmos Transfer 2.5 — photorealistic surgical simulation at 720p.</p>

            <!-- ═══════════════════════════════════════════════════════════ -->
            <!--  AFTERNOON SESSION — Brain & Behaviour Lab                -->
            <!-- ═══════════════════════════════════════════════════════════ -->

            <!-- ─── SECTION 10 — IMG_7699 (idx 15) + IMG_7700 (idx 16) + IMG_7701 (idx 17) ─── -->
            <h3 class="blog-section-title">10. Action Grammars, LLM Affordances &amp; the Scaling Challenge</h3>
            <p>The afternoon shifted to the <strong>Brain &amp; Behaviour Lab</strong> (Imperial), which
            presented work on bridging LLMs with physical robot control. Their framework decomposes
            natural human behaviour into formal <strong>action-grammars</strong> — structured rules
            of action sequences (Pick, Pour, Mix, Place) — and uses LLM-powered assistants for
            object affordance detection, action generation, and action verification before passing
            commands to a motion planner.</p>

            <div class="blog-inline-images">
                <img src="conf_nvidia/jpg/IMG_7699.jpg" alt="Natural human behavior has action-grammars"
                     onclick="openLightbox('nvidia-robotics-day-2026', 15)" loading="lazy">
            </div>
            <p class="blog-caption">Action grammars: decomposing natural human behaviour into structured, composable action sequences.</p>

            <p>The detailed architecture showed how LLM-based affordance reasoning connects perception
            to action: RGBD motion tracking feeds human state and gaze information to an Action Generator,
            while Robot Perception (SLAM) feeds detected objects to an Object Affordances assistant.
            An Action Verification step validates proposals before execution.</p>

            <div class="blog-inline-images two-col">
                <img src="conf_nvidia/jpg/IMG_7700.jpg" alt="LLM Affordances Architecture"
                     onclick="openLightbox('nvidia-robotics-day-2026', 16)" loading="lazy">
                <img src="conf_nvidia/jpg/IMG_7701.jpg" alt="LLMs work well in lab but scaling is a challenge"
                     onclick="openLightbox('nvidia-robotics-day-2026', 17)" loading="lazy">
            </div>
            <p class="blog-caption">Left: Full LLM affordance pipeline with GPT-4o. Right: The scaling challenge — LLMs work well in the lab, but robust scaling to diverse real-world environments remains an open problem.</p>

            <p>The key finding was candid and important: <em>LLMs work well in lab settings but scaling
            remains a fundamental challenge</em>. The system demonstrated real-time pick-and-pour tasks
            using GPT-4o for affordance reasoning, but transitioning to unstructured, diverse environments
            exposed the limits of current approaches.</p>

            <!-- ─── SECTION 11 — IMG_7702 (idx 18) + IMG_7705 (idx 21) ─── -->
            <h3 class="blog-section-title">11. Ongoing Frontiers: Egocentric Understanding &amp; Learning 1,000 Tasks</h3>
            <p>The closing talks highlighted <strong>ongoing work</strong> on action prediction and
            egocentric video understanding, using the <strong>HD-Epic dataset</strong> with a
            <strong>DAM (Describe Anything Model)</strong> visual backbone. Preliminary results
            showed promising action classification from 20-second memory windows of egocentric video,
            demonstrating the potential for robots to understand and predict human intent from
            first-person perspectives.</p>

            <div class="blog-inline-images">
                <img src="conf_nvidia/jpg/IMG_7702.jpg" alt="Ongoing work — HD-Epic dataset results"
                     onclick="openLightbox('nvidia-robotics-day-2026', 18)" loading="lazy">
            </div>
            <p class="blog-caption">Preliminary results: action prediction using DAM backbone on the HD-Epic egocentric video dataset.</p>

            <p>Perhaps the most ambitious result of the day came from the concluding presentation:
            <strong>"Learning a Thousand Tasks in a Day"</strong>
            (Dreczkowski, Vitiello, Vosylius &amp; Johns, <em>Science Robotics</em> 2025). Using just
            <strong>17 hours of data collection</strong>, a single robot learned <strong>1,000 different tasks</strong>
            across 402 real-world objects and 31 different skills — with only 1 demonstration per task.
            This unprecedented efficiency points toward a future where robots can be deployed and
            retrained in hours, not months.</p>

            <div class="blog-inline-images">
                <img src="conf_nvidia/jpg/IMG_7705.jpg" alt="Science Robotics — Learning 1000 Tasks in a Day"
                     onclick="openLightbox('nvidia-robotics-day-2026', 21)" loading="lazy">
            </div>
            <p class="blog-caption">Featured on the cover of Science Robotics — 1,000 tasks, 402 objects, 17 hours of data collection.</p>

            <!-- ─── SECTION 12: OVERALL ARCHITECTURE ─── -->
            <h3 class="blog-section-title">12. The Emerging Architecture of Embodied Intelligence</h3>
            <p>Stepping back, the talks collectively painted a coherent architectural picture of where
            embodied AI is heading. The following diagram synthesises the key themes from the symposium
            into a unified view of the modern embodied intelligence stack:</p>

            <div class="mermaid-container">
                <pre class="mermaid">
flowchart TB
    subgraph Foundation["🧠 Foundation Layer"]
        SL["Scaling Laws"]
        FM["Foundation Models<br/>(LLMs, VLMs, Diffusion)"]
        SL --> FM
    end
    subgraph Simulation["🖥️ Simulation Layer (NVIDIA)"]
        OV["Omniverse /<br/>Isaac Sim"]
        CS["Cosmos World<br/>Models"]
        PH["PhysX Contact<br/>Simulation"]
    end
    subgraph Learning["📚 Learning Layer"]
        IL["Imitation<br/>Learning"]
        RL["Reinforcement<br/>Learning (CQN)"]
        ICL["In-Context<br/>Learning"]
        GEN["Generative Control<br/>(Genima)"]
    end
    subgraph Deployment["🤖 Deployment Layer"]
        MAN["Manipulation<br/>(1000 tasks/day)"]
        SUR["Surgical<br/>Robotics"]
        LOC["Robust<br/>Locomotion (FLAIR)"]
        HRI["Human-Robot<br/>Interaction"]
    end
    Foundation --> Learning
    Simulation --> Learning
    Learning --> Deployment
    style Foundation fill:#f0f8ff,stroke:#0066cc
    style Simulation fill:#1a1a2e,stroke:#76b900,color:#fff
    style Learning fill:#f5f5f5,stroke:#333
    style Deployment fill:#e8f5e9,stroke:#34a853
                </pre>
            </div>

            <!-- ─── CLOSING ─── -->
            <h3 class="blog-section-title">Closing Remarks</h3>
            <p>NVIDIA Robotics Day 2026 reinforced a clear thesis: the tools for building truly
            intelligent robots — foundation models, high-fidelity simulation, and scalable learning
            algorithms — are converging. The gap between simulated and real-world performance is
            narrowing, the number of tasks a single robot can learn is exploding, and the
            infrastructure (Omniverse, Isaac, Cosmos) is maturing into a production-grade platform.
            For researchers at Imperial and beyond, the message was unmistakable: <em>the era of
            embodied intelligence is no longer approaching — it has arrived</em>.</p>

            <p style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e0e0e0; color: #888; font-size: 13px;">
            <em>Written by Dr. Dipankar Bhattacharya. Photos taken during the symposium at Imperial College London.</em></p>
        `,
        photos: [
            'conf_nvidia/jpg/IMG_7684.jpg',
            'conf_nvidia/jpg/IMG_7685.jpg',
            'conf_nvidia/jpg/IMG_7686.jpg',
            'conf_nvidia/jpg/IMG_7687.jpg',
            'conf_nvidia/jpg/IMG_7688.jpg',
            'conf_nvidia/jpg/IMG_7689.jpg',
            'conf_nvidia/jpg/IMG_7690.jpg',
            'conf_nvidia/jpg/IMG_7691.jpg',
            'conf_nvidia/jpg/IMG_7692.jpg',
            'conf_nvidia/jpg/IMG_7693.jpg',
            'conf_nvidia/jpg/IMG_7694.jpg',
            'conf_nvidia/jpg/IMG_7695.jpg',
            'conf_nvidia/jpg/IMG_7696.jpg',
            'conf_nvidia/jpg/IMG_7697.jpg',
            'conf_nvidia/jpg/IMG_7698.jpg',
            'conf_nvidia/jpg/IMG_7699.jpg',
            'conf_nvidia/jpg/IMG_7700.jpg',
            'conf_nvidia/jpg/IMG_7701.jpg',
            'conf_nvidia/jpg/IMG_7702.jpg',
            'conf_nvidia/jpg/IMG_7703.jpg',
            'conf_nvidia/jpg/IMG_7704.jpg',
            'conf_nvidia/jpg/IMG_7705.jpg',
            'conf_nvidia/jpg/IMG_7707.jpg',
            'conf_nvidia/jpg/IMG_7708.jpg',
            'conf_nvidia/jpg/IMG_7709.jpg',
            'conf_nvidia/jpg/IMG_7710.jpg',
            'conf_nvidia/jpg/IMG_7711.jpg',
            'conf_nvidia/jpg/IMG_7712.jpg',
            'conf_nvidia/jpg/IMG_7713.jpg',
            'conf_nvidia/jpg/IMG_7714.jpg',
            'conf_nvidia/jpg/IMG_7715.jpg',
            'conf_nvidia/jpg/IMG_7716.jpg',
            'conf_nvidia/jpg/IMG_7717.jpg',
            'conf_nvidia/jpg/IMG_7718.jpg',
            'conf_nvidia/jpg/IMG_7719.jpg',
            'conf_nvidia/jpg/IMG_7720.jpg',
            'conf_nvidia/jpg/IMG_7721.jpg'
        ]
    },
    'eta-london-2026': {
        title: 'European Talent Academy 2026 — London Session, Imperial College London',
        date: 'March 18–20, 2026',
        body: `
            <p style="font-size:16px; color:#333; line-height:1.9;">
            Excited to be a part of the highly competitive <strong>European Talent Academy (ETA) 2026</strong>,
            London session (March 18–20, 2026) at <strong>Imperial College London</strong>.
            Over three inspiring days, we had the chance to connect with fellow early-career researchers
            from across Europe, exchange ideas, and explore how interdisciplinary collaboration can help
            address major societal challenges.</p>

            <div class="blog-event-details">
                <span>📅 March 18–20, 2026</span>
                <span>📍 Imperial College London (South Kensington &amp; White City)</span>
                <span>🤝 ETA Cohort — Imperial, TUM &amp; PoliMi</span>
            </div>

            <p>👉 <a href="https://www.imperial.ac.uk/admin-services/international-relations/european-talent-academy/" target="_blank">
            Official ETA Programme Page</a></p>

            <h3 class="blog-section-title">Day 1 — Guided Tour of South Kensington</h3>
            <p>The session began with a guided tour of South Kensington, offering a great introduction to
            Imperial's historic surroundings and a chance to get to know the cohort in a more informal setting.
            Walking past the Royal Albert Hall and the Albert Memorial provided a memorable backdrop
            for the start of what would be an intensive and rewarding three days.</p>

            <div class="blog-inline-images two-col">
                <img src="ETA/London/1774608437336.jpeg" alt="Royal Albert Hall, South Kensington"
                     onclick="openLightbox('eta-london-2026', 1)" loading="lazy">
                <img src="ETA/London/1774608450894.jpeg" alt="Albert Memorial, South Kensington"
                     onclick="openLightbox('eta-london-2026', 3)" loading="lazy">
            </div>
            <p class="blog-caption">South Kensington neighbourhood: Royal Albert Hall and the Albert Memorial — landmarks that frame Imperial College London.</p>

            <h3 class="blog-section-title">Day 2 — Sessions at White City Campus</h3>
            <p>Day 2 was packed with engaging sessions at White City Campus — from programme introductions
            and alumni insights to research pitches, collaboration meetings, and group discussions.
            It was especially valuable to hear the breadth of research interests in the room and begin
            identifying common themes and opportunities for future collaboration.</p>

            <div class="blog-inline-images">
                <img src="ETA/London/1774608437192.jpeg" alt="Collaboration sessions at White City Campus"
                     onclick="openLightbox('eta-london-2026', 0)" loading="lazy">
            </div>
            <p class="blog-caption">Round 1 collaboration meetings at White City Campus — early-career researchers pitching and connecting across disciplines.</p>

            <h3 class="blog-section-title">Day 3 — Teamwork, Self-Awareness &amp; DiSC</h3>
            <p>Day 3 focused on teamwork and self-awareness, including a session on <strong>DiSC personality analysis</strong>.
            DiSC is a framework that helps individuals better understand their working and communication styles
            across four broad tendencies — <strong>D</strong>ominance, <strong>I</strong>nfluence,
            <strong>S</strong>teadiness, and <strong>C</strong>onscientiousness.
            It was a useful reminder that strong collaboration is not only about expertise, but also about
            understanding how people interact, contribute, and work best together.</p>

            <div class="blog-inline-images">
                <img src="ETA/London/1774608440016.jpeg" alt="ETA 2026 London cohort group photo"
                     onclick="openLightbox('eta-london-2026', 2)" loading="lazy">
            </div>
            <p class="blog-caption">The ETA 2026 London cohort — early-career researchers from Imperial, TUM, and PoliMi gathered at White City Campus.</p>

            <h3 class="blog-section-title">Looking Ahead — Munich &amp; Milan</h3>
            <p>Grateful to be part of a programme that brings together young researchers to build connections,
            strengthen professional skills, and lay the groundwork for future interdisciplinary projects.
            The Munich session followed in June 2026 — see the
            <a href="#" onclick="openBlogOverlay('eta-munich-2026'); return false;">Munich session blog post</a>.
            Looking forward to the final retreat in <strong>Milan (PoliMi)</strong>.</p>

            <p style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e0e0e0; color: #888; font-size: 13px;">
            <em>Written by Dr. Dipankar Bhattacharya. Photos taken during the ETA 2026 London session.</em></p>
        `,
        photos: [
            'ETA/London/1774608437192.jpeg',
            'ETA/London/1774608437336.jpeg',
            'ETA/London/1774608440016.jpeg',
            'ETA/London/1774608450894.jpeg'
        ]
    },
    'eta-munich-2026': {
        title: 'European Talent Academy 2026 — Munich Session, Technical University of Munich',
        date: 'June 16–18, 2026',
        body: `
            <p style="font-size:16px; color:#333; line-height:1.9;">
            Three days in Munich for the second in-person session of the
            <strong>European Talent Academy (ETA) 2026</strong> (June 16–18, 2026) at the
            <strong>Technical University of Munich (TUM)</strong>.
            The cohort from Imperial College London, Politecnico di Milano, and TUM came together around the theme
            <em>Smarter and healthier cities on a changing planet</em> — building cross-European collaborations
            among early-career researchers through workshops, grant training, and team-based proposal development.</p>

            <div class="blog-event-details">
                <span>📅 June 16–18, 2026</span>
                <span>📍 TUM — Vorhoelzer Forum &amp; Faculty Club, Munich</span>
                <span>🤝 ETA Cohort — Imperial, TUM &amp; PoliMi</span>
            </div>

            <p>👉 <a href="https://www.imperial.ac.uk/admin-services/international-relations/european-talent-academy/" target="_blank">
            Official ETA Programme Page</a></p>

            <h3 class="blog-section-title">Day 1 — Welcome, Old Town &amp; Bavarian Networking</h3>
            <p>Day 1 opened with welcome and introductions at the <strong>Vorhoelzer Forum</strong> and
            <strong>Faculty Club, TUM</strong>, followed by a walking tour of Munich's old town starting at
            <strong>Odeonsplatz</strong>. The evening brought Bavarian Kegeln at
            <strong>Wirtshaus Hohenwart</strong> and dinner at <strong>Park Café</strong> — a great way to
            reconnect with the cohort and meet colleagues from across Imperial, TUM, and PoliMi in a more
            informal setting.</p>

            <div class="blog-inline-images">
                <img src="ETA/London/Munich/a763582c-c550-4262-9a66-c53b734940de.jpg" alt="ETA 2026 Munich cohort at TUM"
                     onclick="openLightbox('eta-munich-2026', 0)" loading="lazy">
            </div>
            <p class="blog-caption">The ETA 2026 Munich cohort at the Technical University of Munich (TUM).</p>

            <div class="blog-inline-images two-col">
                <img src="ETA/London/Munich/IMG_8902.jpeg" alt="Munich old town walking tour"
                     onclick="openLightbox('eta-munich-2026', 1)" loading="lazy">
                <img src="ETA/London/Munich/IMG_8903.jpeg" alt="Frauenkirche towers, Munich"
                     onclick="openLightbox('eta-munich-2026', 2)" loading="lazy">
            </div>
            <p class="blog-caption">Walking tour of Munich's old town — Frauenkirche towers in the distance.</p>

            <div class="blog-inline-images two-col">
                <img src="ETA/London/Munich/2a6f5fc1-933c-4e7a-92a4-0947d0b8339e.jpg" alt="ETA cohort networking dinner, Munich"
                     onclick="openLightbox('eta-munich-2026', 3)" loading="lazy">
                <img src="ETA/London/Munich/IMG_8877.jpeg" alt="Park Café dinner, Munich"
                     onclick="openLightbox('eta-munich-2026', 4)" loading="lazy">
            </div>
            <p class="blog-caption">Networking dinner at Park Café and an outdoor beer-garden gathering with the ETA cohort.</p>

            <div class="blog-inline-images three-col">
                <img src="ETA/London/Munich/IMG_8875.jpeg" alt="Bavarian appetizers, Munich"
                     onclick="openLightbox('eta-munich-2026', 5)" loading="lazy">
                <img src="ETA/London/Munich/IMG_8878.jpeg" alt="Pretzel and beer, Munich"
                     onclick="openLightbox('eta-munich-2026', 6)" loading="lazy">
                <img src="ETA/London/Munich/IMG_8879.jpeg" alt="Schnitzel at Hofbräuhaus, Munich"
                     onclick="openLightbox('eta-munich-2026', 7)" loading="lazy">
            </div>

            <h3 class="blog-section-title">Day 2 — Grant-Writing Workshop &amp; Team Proposals</h3>
            <p>Day 2 was led by <strong>Judy Mielke</strong> (scientifyRESEARCH) in a hands-on
            <strong>Grant-Writing Workshop</strong>. We worked through developing a research vision
            (what, why, how, who, and why now), adopting a funder's perspective, turning strategy into text,
            and drafting abstracts. The practical highlight was delivering <strong>3-minute pitches</strong>
            with peer feedback and developing <strong>joint proposals</strong> within our cohort teams.</p>

            <div class="blog-inline-images">
                <img src="ETA/London/Munich/3bae267c-1829-4e63-bab2-d4bac1dc6fbf.jpg" alt="Grant-writing workshop at ETA Munich 2026"
                     onclick="openLightbox('eta-munich-2026', 8)" loading="lazy">
            </div>
            <p class="blog-caption">Grant-writing workshop led by Judy Mielke (scientifyRESEARCH) — developing research vision and funder-ready abstracts.</p>

            <div class="blog-inline-images">
                <img src="ETA/London/Munich/806f6585-bbf6-450e-8030-db65b37512e8.jpg" alt="ETA team proposal development session"
                     onclick="openLightbox('eta-munich-2026', 9)" loading="lazy">
            </div>
            <p class="blog-caption">Team-based joint proposal development — my cohort team included Angela Casarella, Simone Mentasti, Nicolò Botteghi, Sandra Rojas, and Simone Perottoni.</p>

            <h3 class="blog-section-title">Day 3 — Future Vision, Leadership &amp; Academic Careers</h3>
            <p>Day 3 focused on career development and visibility. <strong>Inês P. Perpétuo, PhD</strong> (Imperial)
            led a session on future leadership, professional narrative, and researcher findability.
            <strong>Dr. Thomas Alcock</strong> (TUM) discussed navigating academia, mobility, and competitive funding,
            and <strong>Prof. Anna Dowbaj</strong> (TUM) shared insights on the career path from PhD to Principal Investigator.</p>

            <div class="blog-inline-images">
                <img src="ETA/London/Munich/IMG_8911.jpeg" alt="Dr Thomas Alcock on academic careers, ETA Munich 2026"
                     onclick="openLightbox('eta-munich-2026', 10)" loading="lazy">
            </div>
            <p class="blog-caption">Dr. Thomas Alcock (TUM) — "Why did I choose an academic career?" session on Day 3.</p>

            <div class="blog-inline-images">
                <img src="ETA/London/Munich/IMG_8904.jpeg" alt="Munich street view, ETA 2026"
                     onclick="openLightbox('eta-munich-2026', 11)" loading="lazy">
            </div>

            <h3 class="blog-section-title">Looking Ahead — Milan &amp; Beyond</h3>
            <p>Grateful to the organising team — Bettina Burger, Iris Figliolia, Inês P. Perpétuo, Judy Mielke,
            and Jennifer Borzomì — and to my cohort teammates for three intensive and rewarding days in Munich.
            Next up: developing our research proposals, mentor meetings, partner visits across Europe, and the
            final retreat in <strong>Milan (PoliMi)</strong>.</p>

            <p style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e0e0e0; color: #888; font-size: 13px;">
            <em>Written by Dr. Dipankar Bhattacharya. Photos taken during the ETA 2026 Munich session.</em></p>
        `,
        photos: [
            'ETA/London/Munich/a763582c-c550-4262-9a66-c53b734940de.jpg',
            'ETA/London/Munich/IMG_8902.jpeg',
            'ETA/London/Munich/IMG_8903.jpeg',
            'ETA/London/Munich/2a6f5fc1-933c-4e7a-92a4-0947d0b8339e.jpg',
            'ETA/London/Munich/IMG_8877.jpeg',
            'ETA/London/Munich/IMG_8875.jpeg',
            'ETA/London/Munich/IMG_8878.jpeg',
            'ETA/London/Munich/IMG_8879.jpeg',
            'ETA/London/Munich/3bae267c-1829-4e63-bab2-d4bac1dc6fbf.jpg',
            'ETA/London/Munich/806f6585-bbf6-450e-8030-db65b37512e8.jpg',
            'ETA/London/Munich/IMG_8911.jpeg',
            'ETA/London/Munich/IMG_8904.jpeg'
        ]
    }
};

// Current lightbox state
let currentLightboxPhotos = [];
let currentLightboxIndex = 0;

function openBlogOverlay(postId) {
    const post = blogPosts[postId];
    if (!post) return;

    const body = document.getElementById('blog-overlay-body');

    let galleryHtml = '';
    if (post.photos && post.photos.length > 0) {
        galleryHtml = '<h3 style="margin-top: 28px; margin-bottom: 12px; color: #333;">📸 Photos (' + post.photos.length + ')</h3>';
        galleryHtml += '<div class="blog-gallery">';
        post.photos.forEach(function(src, i) {
            galleryHtml += '<img src="' + src + '" alt="Photo ' + (i + 1) + '" onclick="openLightbox(\'' + postId + '\', ' + i + ')" loading="lazy">';
        });
        galleryHtml += '</div>';
    }

    body.innerHTML =
        '<h2 class="blog-post-title">' + post.title + '</h2>' +
        '<div class="blog-post-meta">📅 ' + post.date + '</div>' +
        '<div class="blog-post-body">' + post.body + '</div>' +
        galleryHtml;

    document.getElementById('blog-overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Render Mermaid diagrams in the blog overlay
    if (window.mermaid) {
        mermaid.run({ nodes: body.querySelectorAll('.mermaid') });
    }
}

function closeBlogOverlay() {
    document.getElementById('blog-overlay').style.display = 'none';
    document.body.style.overflow = '';
}

function openLightbox(postId, index) {
    const post = blogPosts[postId];
    if (!post || !post.photos) return;

    currentLightboxPhotos = post.photos;
    currentLightboxIndex = index;
    showLightbox();
}

function showLightbox() {
    // Remove existing lightbox if any
    const existing = document.querySelector('.blog-lightbox');
    if (existing) existing.remove();

    const lb = document.createElement('div');
    lb.className = 'blog-lightbox';
    lb.innerHTML =
        '<button class="blog-lightbox-close" onclick="closeLightbox()">&times;</button>' +
        '<button class="blog-lightbox-nav blog-lightbox-prev" onclick="lightboxPrev()">&#8249;</button>' +
        '<img src="' + currentLightboxPhotos[currentLightboxIndex] + '" alt="Photo">' +
        '<button class="blog-lightbox-nav blog-lightbox-next" onclick="lightboxNext()">&#8250;</button>';

    lb.addEventListener('click', function(e) {
        if (e.target === lb) closeLightbox();
    });

    document.body.appendChild(lb);
}

function closeLightbox() {
    const lb = document.querySelector('.blog-lightbox');
    if (lb) lb.remove();
}

function lightboxPrev() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxPhotos.length) % currentLightboxPhotos.length;
    showLightbox();
}

function lightboxNext() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxPhotos.length;
    showLightbox();
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
    const lb = document.querySelector('.blog-lightbox');
    if (lb) {
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowLeft') lightboxPrev();
        else if (e.key === 'ArrowRight') lightboxNext();
    } else if (document.getElementById('blog-overlay').style.display === 'block') {
        if (e.key === 'Escape') closeBlogOverlay();
    }
});

// Close blog overlay when clicking outside content
document.getElementById('blog-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeBlogOverlay();
});
