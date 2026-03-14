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

            <!-- ─── SECTION 1 ─── -->
            <h3 class="blog-section-title">1. The Big Picture: From Scaling Laws to Embodied Foundation Models</h3>
            <p>The symposium opened with a grounding observation: <strong>scaling laws</strong>, long validated for 
            large language models and vision transformers, are now being applied to robotics. Larger 
            compute budgets, richer datasets, and bigger models reliably yield better performance — 
            suggesting that the same data-hungry, compute-intensive recipe that powered GPT and ViT 
            can power the next generation of robot brains.</p>

            <div class="blog-inline-images">
                <img src="conf_nvidia/jpg/IMG_7710.jpg" alt="Scaling Laws for LLMs and Vision Transformers" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 25)" loading="lazy">
            </div>
            <p class="blog-caption">Scaling laws for compute, dataset size, and model parameters — the foundation for embodied AI at scale.</p>

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

            <!-- ─── SECTION 2 ─── -->
            <h3 class="blog-section-title">2. Generative Models as Robot Controllers — Genima</h3>
            <p>A highlight of the day was the presentation of <strong>Genima</strong> 
            (Shridhar, Lo &amp; James, CoRL 2024), which reframes robotic manipulation as an 
            <em>image generation problem</em>. The idea is strikingly simple: given the current 
            camera observation, a diffusion model (SD-Turbo with ControlNet) generates a 
            <em>target image</em> depicting where objects should end up, and a low-level 
            controller then drives the robot to reach those targets.</p>

            <div class="blog-inline-images two-col">
                <img src="conf_nvidia/jpg/IMG_7684.jpg" alt="Robotics Into an Image Generation Problem" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 0)" loading="lazy">
                <img src="conf_nvidia/jpg/IMG_7689.jpg" alt="Genima Pipeline — SD-Turbo + Controller" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 5)" loading="lazy">
            </div>
            <p class="blog-caption">Left: Framing robotics as image generation. Right: The Genima pipeline — SD-Turbo draws targets, then a controller executes.</p>

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

            <!-- ─── SECTION 3 ─── -->
            <h3 class="blog-section-title">3. Coarse-to-Fine Reinforcement Learning</h3>
            <p>Prof. Stephen James (Imperial) presented <strong>Coarse-to-Fine Reinforcement Learning</strong> 
            (Seo, Uruc &amp; James, CoRL 2024), introducing <strong>CQN</strong> — a hierarchical method 
            for continuous robot control. The key insight: rather than predicting a single continuous 
            action value, CQN recursively subdivides the action space into discrete bins across 
            multiple levels. At each level it selects the highest-Q bin and zooms in, achieving 
            fine-grained precision without the sample inefficiency of purely continuous methods.</p>

            <div class="blog-inline-images two-col">
                <img src="conf_nvidia/jpg/IMG_7686.jpg" alt="Coarse-to-Fine RL — Hierarchical Binning" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 2)" loading="lazy">
                <img src="conf_nvidia/jpg/IMG_7690.jpg" alt="CQN vs DrQ-v2+ comparison" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 6)" loading="lazy">
            </div>
            <p class="blog-caption">Left: Hierarchical action binning across 3 levels. Right: CQN (ours) vs. DrQ-v2+ baseline — real-world drawer opening.</p>

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

            <!-- ─── SECTION 4 ─── -->
            <h3 class="blog-section-title">4. In-Context Robot Learning &amp; Instant Policy</h3>
            <p>The symposium showcased <strong>in-context learning</strong> for robotics — a paradigm 
            where a pretrained model receives a handful of demonstration trajectories as context and 
            immediately generalises to new scenarios without fine-tuning. The model attends over a 
            sequence of demonstration states to predict actions for the current state.</p>

            <p><strong>Instant Policy</strong> (Vosylius &amp; Johns, ICLR 2025) demonstrated 
            real-time human-to-robot imitation: a person performs a task and the policy instantly 
            replicates it on a Sawyer robot, with no explicit programming or re-training.</p>

            <div class="blog-inline-images two-col">
                <img src="conf_nvidia/jpg/IMG_7687.jpg" alt="In-Context Learning for Robotics" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 3)" loading="lazy">
                <img src="conf_nvidia/jpg/IMG_7688.jpg" alt="Instant Policy — Vosylius and Johns, ICLR 2025" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 4)" loading="lazy">
            </div>
            <p class="blog-caption">Left: In-context learning from demo sequences. Right: Instant Policy — real-time human-to-robot transfer.</p>

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

            <!-- ─── SECTION 5 ─── -->
            <h3 class="blog-section-title">5. Learning a Thousand Tasks in a Day</h3>
            <p>Perhaps the most ambitious result of the day: <strong>"Learning a Thousand Tasks in a Day"</strong> 
            (Dreczkowski, Vitiello, Vosylius &amp; Johns, <em>Science Robotics</em> 2025). Using just 
            <strong>17 hours of data collection</strong>, a single robot learned <strong>1,000 different tasks</strong> 
            across 402 real-world objects and 31 different skills — with only 1 demonstration per task. 
            This unprecedented efficiency points toward a future where robots can be deployed and 
            retrained in hours, not months.</p>

            <div class="blog-inline-images">
                <img src="conf_nvidia/jpg/IMG_7705.jpg" alt="Science Robotics — Learning 1000 Tasks in a Day" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 21)" loading="lazy">
            </div>
            <p class="blog-caption">Featured on the cover of Science Robotics — 1,000 tasks, 402 objects, 17 hours of data.</p>

            <!-- ─── SECTION 6 ─── -->
            <h3 class="blog-section-title">6. LLMs Meet Robotics: Action Grammars &amp; Affordances</h3>
            <p>The <strong>Brain &amp; Behaviour Lab</strong> (Imperial) presented work on bridging LLMs with 
            physical robot control. Their framework decomposes natural human behaviour into formal 
            <strong>action-grammars</strong> — structured rules of action sequences (Pick, Pour, Mix, Place) — 
            and uses LLM-powered assistants for object affordance detection, action generation, 
            and action verification before passing commands to a motion planner.</p>

            <p>The key finding: <em>LLMs work well in lab settings but scaling remains a fundamental challenge</em>. 
            The system demonstrated real-time pick-and-pour tasks using GPT-4o for affordance reasoning.</p>

            <div class="blog-inline-images two-col">
                <img src="conf_nvidia/jpg/IMG_7700.jpg" alt="Action Grammars — rules of action sequences" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 16)" loading="lazy">
                <img src="conf_nvidia/jpg/IMG_7685.jpg" alt="LLM-based robotic control architecture" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 1)" loading="lazy">
            </div>
            <p class="blog-caption">Left: Formal action-grammars for human behaviour. Right: LLM-powered perception-action pipeline with GPT-4o.</p>

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

            <!-- ─── SECTION 7 ─── -->
            <h3 class="blog-section-title">7. Robust Locomotion: FLAIR for External Perturbation Compensation</h3>
            <p>The <strong>FLAIR</strong> framework demonstrated automatic compensation for external 
            perturbations during robot locomotion. In the demonstrated scenario, a mobile robot 
            navigated while subjected to simulated wind from the corner of the room. 
            Without FLAIR, the robot drifted off course; with FLAIR enabled, the robot 
            maintained its planned trajectory despite disturbances — a critical capability 
            for outdoor and industrial deployments.</p>

            <div class="blog-inline-images">
                <img src="conf_nvidia/jpg/IMG_7691.jpg" alt="FLAIR — Wind perturbation compensation" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 7)" loading="lazy">
            </div>
            <p class="blog-caption">FLAIR (left) vs No FLAIR (right) — robustness to simulated wind perturbations.</p>

            <!-- ─── SECTION 8 ─── -->
            <h3 class="blog-section-title">8. NVIDIA Isaac for Healthcare — Surgical Robotics &amp; Simulation</h3>
            <p>A major portion of the afternoon focused on <strong>NVIDIA's Isaac platform for Healthcare</strong>, 
            showcasing how the full NVIDIA stack — Omniverse, Isaac Sim, Cosmos, MONAI, and Holoscan — 
            is being applied to train surgical robots. The pipeline combines digital twins with 
            teleoperation, synthetic data generation, and both imitation and reinforcement learning 
            to produce deployable AI policy models.</p>

            <div class="blog-inline-images two-col">
                <img src="conf_nvidia/jpg/IMG_7695.jpg" alt="Isaac for Healthcare architecture" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 11)" loading="lazy">
                <img src="conf_nvidia/jpg/IMG_7697.jpg" alt="SDG: Data Augmentation via World Generation" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 13)" loading="lazy">
            </div>
            <p class="blog-caption">Left: NVIDIA Isaac for Healthcare pipeline. Right: Synthetic data augmentation with Cosmos-transfer1.</p>

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

            <p>Two breakthrough results stood out:</p>
            <ul style="margin: 8px 0 16px 24px; color: #444; line-height: 1.8;">
                <li><strong>Deformable Gaussian Splats with G-SHARP</strong> — real-world surgical scenes 
                reconstructed in under 2 minutes using a commercially usable Gaussian splatting engine, 
                with inference at 30 fps. This enables real-to-sim transfer where Gaussians model tissue dynamics.</li>
                <li><strong>Cosmos Transfer 2.5</strong> — integration of Cosmos Transfer with surgical 
                simulators to achieve photorealistic simulation. By training on surgical datasets and 
                extracting depth/instance segmentations, the system produces 720p surgical videos at ~2 fps.</li>
            </ul>

            <div class="blog-inline-images two-col">
                <img src="conf_nvidia/jpg/IMG_7696.jpg" alt="G-SHARP Gaussian Splats for Surgery" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 12)" loading="lazy">
                <img src="conf_nvidia/jpg/IMG_7698.jpg" alt="Cosmos Transfer 2.5 with Surgical Simulators" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 14)" loading="lazy">
            </div>
            <p class="blog-caption">Left: G-SHARP surgical scene reconstruction. Right: Cosmos Transfer 2.5 — photorealistic surgical simulation.</p>

            <!-- ─── SECTION 9 ─── -->
            <h3 class="blog-section-title">9. NVIDIA Physics Simulation: Contact Modelling</h3>
            <p>NVIDIA engineers explained their approach to <strong>contact simulation</strong> — 
            the bedrock of any physics-based robot training. Their key design principle: 
            the physics solver should <em>not</em> need to know about geometry. Instead, 
            a contact detection module finds overlapping pairs, identifies reaction points 
            (position, normal direction, overlap depth, body references), and passes them to 
            the solver as a flat list of contact points. Speculative contacts are created 
            <em>before</em> actual overlap occurs, improving stability.</p>

            <div class="blog-inline-images">
                <img src="conf_nvidia/jpg/IMG_7693.jpg" alt="NVIDIA Contact Physics" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 9)" loading="lazy">
            </div>
            <p class="blog-caption">NVIDIA's contact simulation architecture — geometry-agnostic physics solving.</p>

            <div class="mermaid-container">
                <pre class="mermaid">
flowchart TD
    GEO["Geometry<br/>Representation"] --> CD["Contact<br/>Detection"]
    CD -->|"position, normal,<br/>overlap depth,<br/>body references"| CL["Contact<br/>Point List"]
    CL --> PS["Physics Solver<br/>(geometry-agnostic)"]
    PS --> DYN["Dynamics<br/>Update"]
    SC["Speculative<br/>Contacts"] -.->|"pre-overlap<br/>creation"| CL
    PS -.->|"mass, inertia"| DYN
    style CD fill:#76b900,stroke:#333,color:#fff
    style PS fill:#333,stroke:#76b900,color:#fff
                </pre>
            </div>

            <!-- ─── SECTION 10 ─── -->
            <h3 class="blog-section-title">10. NVIDIA Research Ecosystem: Cosmos Policy, SONIC, DreamZero &amp; DreamGen</h3>
            <p>The final session mapped NVIDIA's broader research landscape for embodied AI, 
            connecting four major threads of ongoing work:</p>

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

            <!-- ─── SECTION 11 ─── -->
            <h3 class="blog-section-title">11. Ongoing Frontiers: Action Prediction &amp; Egocentric Understanding</h3>
            <p>The closing talks highlighted <strong>ongoing work</strong> on action prediction and 
            egocentric video understanding, using the <strong>HD-Epic dataset</strong> with a 
            <strong>DAM (Describe Anything Model)</strong> visual backbone. Preliminary results 
            showed promising action classification from 20-second memory windows of egocentric video, 
            demonstrating the potential for robots to understand and predict human intent from 
            first-person perspectives.</p>

            <div class="blog-inline-images two-col">
                <img src="conf_nvidia/jpg/IMG_7701.jpg" alt="LLMs work well in lab but scaling is a challenge" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 17)" loading="lazy">
                <img src="conf_nvidia/jpg/IMG_7702.jpg" alt="Ongoing work — HD-Epic dataset results" 
                     onclick="openLightbox('nvidia-robotics-day-2026', 18)" loading="lazy">
            </div>
            <p class="blog-caption">Left: LLM-powered robot demo using GPT-4o. Right: Action prediction with DAM backbone on HD-Epic dataset.</p>

            <!-- ─── OVERALL ARCHITECTURE ─── -->
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
