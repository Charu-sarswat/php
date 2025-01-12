document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            loadArticles(this.textContent.toLowerCase());
        });
    });

    // Dynamic article loading
    function loadArticles(category) {
        fetch(`get_articles.php?category=${category}`)
            .then(response => response.json())
            .then(articles => {
                displayArticles(articles);
            })
            .catch(error => console.error('Error:', error));
    }

    // Infinite scroll implementation
    let isLoading = false;
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
            if (!isLoading) {
                isLoading = true;
                loadMoreArticles();
            }
        }
    });
});