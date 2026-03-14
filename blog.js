// Blog posts data
const blogPosts = {
    'nvidia-robotics-day-2026': {
        title: 'NVIDIA Robotics Day 2026 at Imperial College London',
        date: 'February 11, 2026',
        body: `
            <p>We were delighted to attend <strong>NVIDIA Robotics Day 2026</strong>, hosted by the 
            School of Convergence Science, Human and Artificial Intelligence at Imperial College London. 
            This free, full-day symposium brought together leading researchers from Imperial and experts 
            from NVIDIA for an immersive exploration of the rapidly evolving field of <strong>embodied intelligence</strong>.</p>

            <p><strong>Event Details:</strong></p>
            <ul style="margin: 10px 0 16px 20px; color: #444;">
                <li>📅 Wednesday 11 February 2026</li>
                <li>🕚 11:00 – 16:30 GMT (Registration from 10:30)</li>
                <li>📍 G16 Lecture Theatre, Sir Alexander Fleming Building, South Kensington Campus</li>
                <li>🎟 Free to attend – advance registration required</li>
            </ul>

            <p>The symposium featured talks and demonstrations on the latest advances in robotics, 
            AI-driven control systems, and simulation environments for training embodied agents. 
            It was a fantastic opportunity to connect with researchers across disciplines and learn 
            about NVIDIA's latest tools for robotics research.</p>

            <p>👉 <a href="https://www.imperial.ac.uk/events/204543/nvidia-robotics-day-2026/" target="_blank">
            Event Page</a></p>
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
