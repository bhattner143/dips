// Filter functionality for news posts
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.tab-btn');
    const yearButtons = document.querySelectorAll('.year-btn');
    const newsPosts = document.querySelectorAll('.news-post');
    
    let activeCategory = 'all';
    let activeYear = 'all';

    // Category filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            activeCategory = this.getAttribute('data-filter');
            
            // Apply filters
            applyFilters();
        });
    });

    // Year filter functionality
    yearButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all year buttons
            yearButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get year value
            activeYear = this.getAttribute('data-year');
            
            // Apply filters
            applyFilters();
        });
    });

    // Apply both category and year filters
    function applyFilters() {
        newsPosts.forEach(post => {
            const postCategory = post.getAttribute('data-category');
            const postYear = post.getAttribute('data-year');
            
            const categoryMatch = (activeCategory === 'all' || postCategory === activeCategory);
            const yearMatch = (activeYear === 'all' || postYear === activeYear);
            
            if (categoryMatch && yearMatch) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // Search functionality (basic implementation)
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = prompt('Enter search term:');
            if (searchTerm) {
                // Reset filters when searching
                activeCategory = 'all';
                activeYear = 'all';
                filterButtons.forEach(btn => btn.classList.remove('active'));
                yearButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelector('.tab-btn[data-filter="all"]').classList.add('active');
                document.querySelector('.year-btn[data-year="all"]').classList.add('active');
                
                // Simple search implementation
                newsPosts.forEach(post => {
                    const postText = post.textContent.toLowerCase();
                    if (postText.includes(searchTerm.toLowerCase())) {
                        post.style.display = 'block';
                        post.style.backgroundColor = '#fffacd';
                    } else {
                        post.style.display = 'none';
                    }
                });
            }
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
