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
// Dark mode functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    
    // Update button aria-label for accessibility
    darkModeToggle.setAttribute('aria-label', 
        isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'
    );
}

// Check for saved user preference, if any, on load of the website
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has a saved preference
    const savedPreference = localStorage.getItem('darkMode');
    
    if (savedPreference !== null) {
        // If they do, apply their saved preference
        if (savedPreference === 'true') {
            document.body.classList.add('dark-mode');
        }
    } else {
        // If they don't, check their system preference
        if (prefersDarkScheme.matches) {
            document.body.classList.add('dark-mode');
        }
    }
});

// Add toggle event listener
darkModeToggle.addEventListener('click', toggleDarkMode);

// Listen for system dark mode changes
prefersDarkScheme.addListener((e) => {
    if (localStorage.getItem('darkMode') === null) {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
});
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
    
    // Sample search data
    const searchData = [
        { title: 'Understanding Salesforce Ecosystem', url: '#', category: 'Basics' },
        { title: 'Top 10 Salesforce Tips for Beginners', url: '#', category: 'Tips' },
        { title: 'Salesforce Best Practices', url: '#', category: 'Best Practices' },
        { title: 'Salesforce Admin Guide', url: '#', category: 'Admin' },
        { title: 'Salesforce Developer Tutorial', url: '#', category: 'Development' },
        { title: 'Salesforce Integration Patterns', url: '#', category: 'Integration' },
        { title: 'Lightning Web Components Basics', url: '#', category: 'Development' },
        { title: 'Apex Programming Guide', url: '#', category: 'Development' },
        { title: 'Salesforce Security Best Practices', url: '#', category: 'Security' }
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
