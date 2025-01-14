// Add this function for lazy loading images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', initLazyLoading);

// document.addEventListener('DOMContentLoaded', function() {
//     const searchButton = document.querySelector('.search button');
//     searchButton.addEventListener('click', function() {
//         const searchInput = document.querySelector('.search input').value;
//         alert('Searching for: ' + searchInput);
//     });
// });

//--------------------------------------------------------------
const backToTopButton = document.getElementById("backToTop");

// Show button when user scrolls down 200px
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
};

// Scroll to top when button is clicked
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
//----------------------------------------------------------------

// ---------------------------------------------------------------------------

//----------------------------------------------------------------------

//----------------------------------------------------------------------
// Reading progress bar
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.reading-progress');
    const percentageLabel = document.querySelector('.progress-percentage');

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / windowHeight) * 100;
        
        // Update progress bar
        progressBar.style.width = `${progress}%`;
        
        // Update percentage text
        percentageLabel.textContent = `${Math.round(progress)}%`;
    });
});
//----------------------------------------------------------------------

//----------------------------------------------------------
document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Get the platform from data-platform attribute
        const platform = this.dataset.platform;
        
        // Get current page URL and title
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        
        // Define sharing URLs for each platform
        let shareUrl;
        switch(platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
        }
        
        // Open share dialog in a popup window
        window.open(shareUrl, '_blank', 'width=600,height=400');
    });
});

//----------------------------------------------------------------------
// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    
    // Sample search data - replace with your actual data
    const searchData = [
        { title: 'Website Development', url: '#', category: 'Development' },
        { title: 'Brand Building', url: '#', category: 'Marketing' },
        { title: 'Digital Marketing', url: '#', category: 'Marketing' },
        { title: 'SEO & Content Writing', url: '#', category: 'Content' },
        { title: 'App Development', url: '#', category: 'Development' },
        { title: 'UI/UX Designing', url: '#', category: 'Design' },
        { title: 'Embrace Responsive Design', url: '#', category: 'Development' },
        { title: 'Mobile Optimization', url: '#', category: 'Development' },
        { title: 'Identify your Audience', url: '#', category: 'Marketing' }
    ];

    // Perform search
    function performSearch(query) {
        query = query.toLowerCase().trim();
        return searchData.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );
    }

    // Display results with highlighting
    function displayResults(results) {
        if (!results || results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No results found</div>';
        } else {
            const resultsHtml = results.map(item => `
                <a href="${item.url}" class="search-result-item">
                    <h4>${highlightMatch(item.title, searchInput.value)}</h4>
                    <span class="category">${item.category}</span>
                </a>
            `).join('');
            searchResults.innerHTML = resultsHtml;
        }
        searchResults.style.display = 'block';
    }

    // Highlight matching text
    function highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    // Event listeners
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length >= 2) {
            const results = performSearch(query);
            displayResults(results);
        } else {
            searchResults.style.display = 'none';
        }
    });
    
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            const results = performSearch(query);
            displayResults(results);
        }
    });

    // Handle keyboard navigation
    searchResults.addEventListener('keydown', (e) => {
        const items = searchResults.querySelectorAll('.search-result-item');
        const current = document.activeElement;
        let index = Array.from(items).indexOf(current);

        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (index < items.length - 1) items[index + 1].focus();
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (index > 0) items[index - 1].focus();
                else searchInput.focus();
                break;
            case 'Escape':
                e.preventDefault();
                searchResults.style.display = 'none';
                searchInput.focus();
                break;
        }
    });

    // Close results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchResults.contains(e.target) && 
            !searchInput.contains(e.target) && 
            !searchButton.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });

    // Handle Enter key in search input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query.length > 0) {
                const results = performSearch(query);
                displayResults(results);
            }
        }
    });
});
//----------------------------------------------------------------------

// Add error handling for video
const heroVideo = document.querySelector('.hero-video');
heroVideo.addEventListener('error', function() {
    this.style.display = 'none';
    this.parentElement.classList.add('video-error');
});
