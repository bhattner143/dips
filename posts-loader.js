// Load posts from separate HTML files
async function loadPosts() {
    const postsContainer = document.querySelector('.news-posts');
    
    // List of post files to load
    const postFiles = [
        'posts/work.html',
        'posts/publications.html',
        'posts/grants.html'
    ];
    
    try {
        // Load all post files
        for (const file of postFiles) {
            const response = await fetch(file);
            if (response.ok) {
                const html = await response.text();
                postsContainer.innerHTML += html;
            } else {
                console.error(`Failed to load ${file}`);
            }
        }
        
        // After loading all posts, ensure filter functionality works
        console.log('All posts loaded successfully');
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

// Load posts when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPosts);
} else {
    loadPosts();
}
