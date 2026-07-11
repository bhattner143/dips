// Filter functionality for news posts
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll(
        '.tab-btn:not(#roadmap-tab-btn):not(#supervision-tab-btn)'
    );
    const yearButtons = document.querySelectorAll('.year-btn');
    const newsPosts = document.querySelectorAll('.news-post');

    let activeCategory = 'all';
    let activeYear = 'all';

    function applyFilters() {
        newsPosts.forEach(post => {
            const postCategory = post.getAttribute('data-category');
            const postYear = post.getAttribute('data-year');

            const categoryMatch = (activeCategory === 'all' || postCategory === activeCategory);
            const yearMatch = (activeYear === 'all' || postYear === activeYear);

            post.style.display = (categoryMatch && yearMatch) ? 'block' : 'none';
            post.style.backgroundColor = '';
        });
    }

    // Expose for inline panel handlers in index.html
    window.applyNewsFilters = applyFilters;
    window.syncNewsFiltersFromUI = function() {
        const activeBtn = document.querySelector(
            '.tab-btn.active:not(#roadmap-tab-btn):not(#supervision-tab-btn)'
        );
        activeCategory = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
        const activeYearBtn = document.querySelector('.year-btn.active');
        activeYear = activeYearBtn ? activeYearBtn.getAttribute('data-year') : 'all';
        applyFilters();
    };

    // Category filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            activeCategory = this.getAttribute('data-filter');
            applyFilters();
        });
    });

    // Year filter functionality
    yearButtons.forEach(button => {
        button.addEventListener('click', function() {
            yearButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            activeYear = this.getAttribute('data-year');
            applyFilters();
        });
    });

    // Search functionality (basic implementation)
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = prompt('Enter search term:');
            if (searchTerm) {
                activeCategory = 'all';
                activeYear = 'all';
                filterButtons.forEach(btn => btn.classList.remove('active'));
                yearButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelector('.tab-btn[data-filter="all"]').classList.add('active');
                document.querySelector('.year-btn[data-year="all"]').classList.add('active');

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

    applyFilters();
});
