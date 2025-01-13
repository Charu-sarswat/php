<?php
session_start();
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SF BEN</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="reading-progress-container">
        <div class="reading-progress">
            <span class="progress-percentage">0%</span>
        </div>
    </div>
    <header>
        <nav>
            <div class="h_container">
                <div class="logo">
                    <img src="company.png" alt="SF BEN Logo" style="width: 60px; height: 50px;">
                </div>
                
                <button id="darkModeToggle" class="dark-mode-toggle" aria-label="Toggle Dark Mode">
                    <span class="sun">☀️</span>
                    <span class="moon">🌙</span>
                </button>
                
                <div class="nav-links">
                    <ul>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">AppAssessor</a></li>
                        <li><a href="#">Salesforce News</a></li>
                        <li id="auth-section">
                            <?php
                            if (isset($_SESSION['user_name'])) {
                                echo '<span>Welcome, ' . htmlspecialchars($_SESSION['user_name']) . '</span>';
                                echo '<a href="logout.php">Logout</a>';
                            } else {
                                echo '<a href="login.html">Sign-in / Sign-up</a>';
                            }
                            ?>
                        </li>
                    </ul>
                </div>
                <div class="search">
                    <input type="text" id="searchInput" placeholder="Search...">
                    <button id="searchButton" style="background-color: transparent; border: none;">
                        <img src="search.png" alt="search_button" style="width: 20px; height: 20px; border-radius: 50%;">
                    </button>
                    <div class="search-results" id="searchResults"></div>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <div class="main">
            <div class="main_container">
                <div class="top_setting">
                    <div class="heading_content">
                        <h1>Are Salesforce Certifications Still Relevant? Top Voices Join the Great Cert Debate</h1>
                        <p>By Henry Martin | January 10, 2025</p>
                        <div class="share-buttons">
                            <!-- Each button has a data-platform attribute to identify the social platform -->
                            <button class="share-btn" data-platform="twitter"></button>
                            <button class="share-btn" data-platform="linkedin"></button>
                            <button class="share-btn" data-platform="facebook"></button>
                        </div>
                        <a href="#">Read More</a>
                    </div>
                    <div class="hero-image">
                        <img src="https://usercontent.one/wp/magazine.artland.com/wp-content/uploads/2023/01/ai-future-creativity.jpg?media=1690186145" alt="hero_image" height="400px" width="400px">
                    </div>
                </div>
                <div class="bottom_setting">
                    <article>
                        <h3>Understanding Salesforce Ecosystem</h3>
                        <p>Explore the various components of the Salesforce ecosystem and how they interact. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti odit cumque quo culpa, numquam fugiat id ducimus? Dignissimos, eveniet.</p>
                        <a href="#" class="button">Read More</a>
                    </article>
                    <article>
                        <h3>Top 10 Salesforce Tips for Beginners</h3>
                        <p>Get started with Salesforce with these essential tips for new users.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti odit cumque quo culpa, numquam fugiat id ducimus? Dignissimos, eveniet</p>
                        <a href="#" class="button">Read More</a>
                    </article>
                    <article>
                        <h3>Salesforce Best Practices</h3>
                        <p>Learn the best practices to optimize your Salesforce experience.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti odit cumque quo culpa, numquam fugiat id ducimus? Dignissimos, eveniet</p>
                        <a href="#" class="button">Read More</a>
                    </article>
                    <article>
                        <h3>Understanding Salesforce Ecosystem</h3>
                        <p>Explore the various components of the Salesforce ecosystem and how they interact. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti odit cumque quo culpa, numquam fugiat id ducimus? Dignissimos, eveniet.</p>
                        <a href="#" class="button">Read More</a>
                    </article>
                    <article>
                        <h3>Top 10 Salesforce Tips for Beginners</h3>
                        <p>Get started with Salesforce with these essential tips for new users.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti odit cumque quo culpa, numquam fugiat id ducimus? Dignissimos, eveniet</p>
                        <a href="#" class="button">Read More</a>
                    </article>
                    <article>
                        <h3>Salesforce Best Practices</h3>
                        <p>Learn the best practices to optimize your Salesforce experience.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti odit cumque quo culpa, numquam fugiat id ducimus? Dignissimos, eveniet</p>
                        <a href="#" class="button">Read More</a>
                    </article>
                    <article>
                        <h3>Understanding Salesforce Ecosystem</h3>
                        <p>Explore the various components of the Salesforce ecosystem and how they interact. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti odit cumque quo culpa, numquam fugiat id ducimus? Dignissimos, eveniet.</p>
                        <a href="#" class="button">Read More</a>
                    </article>
                    <article>
                        <h3>Top 10 Salesforce Tips for Beginners</h3>
                        <p>Get started with Salesforce with these essential tips for new users.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti odit cumque quo culpa, numquam fugiat id ducimus? Dignissimos, eveniet</p>
                        <a href="#" class="button">Read More</a>
                    </article>
                    <article>
                        <h3>Salesforce Best Practices</h3>
                        <p>Learn the best practices to optimize your Salesforce experience.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti odit cumque quo culpa, numquam fugiat id ducimus? Dignissimos, eveniet</p>
                        <a href="#" class="button">Read More</a>
                    </article>
                    <article>
                        <h3>Understanding Salesforce Ecosystem</h3>
                        <p>Explore the various components of the Salesforce ecosystem and how they interact. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti odit cumque quo culpa, numquam fugiat id ducimus? Dignissimos, eveniet.</p>
                        <a href="#" class="button">Read More</a>
                    </article>
                    <article>
                        <h3>Top 10 Salesforce Tips for Beginners</h3>
                        <p>Get started with Salesforce with these essential tips for new users.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti odit cumque quo culpa, numquam fugiat id ducimus? Dignissimos, eveniet</p>
                        <a href="#" class="button">Read More</a>
                    </article>
                    <article>
                        <h3>Salesforce Best Practices</h3>
                        <p>Learn the best practices to optimize your Salesforce experience.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti odit cumque quo culpa, numquam fugiat id ducimus? Dignissimos, eveniet</p>
                        <a href="#" class="button">Read More</a>
                    </article>
                </div>
            </div>
            <div class="side_container">
                <h2>Advertisements</h2>
                <div class="boxes">
                    <div class="box" id="box1"></div>
                    <div class="box" id="box2"></div>
                    <div class="box" id="box3"></div>
                    <div class="box" id="box4"></div>
                </div>
            </div>
        </div>
        
        <div class="comments-section">
            <h3>Comments</h3>
            <form class="comment-form">
                <textarea placeholder="Leave a comment..." required></textarea>
                <button type="submit" class="button">Post Comment</button>
            </form>
            <div class="comments-list">
                <!-- Comments will be added here -->
            </div>
        </div>
    </main>

    <footer>
        <div class="footer_container">
            <div class="social-links">
                <a href="#" class="social-icon"><img src="linkedin (1).png" alt="linkedin" style="width: 20px; height: 20px;"></a>
                <a href="#" class="social-icon"><img src="twitter (1).png" alt="twitter" style="width: 20px; height: 20px;"></a>
                <a href="#" class="social-icon"><img src="facebook (1).png" alt="facebook" style="width: 20px; height: 20px;"></a>
            </div>
            <p>&copy; 2025 SF BEN. All rights reserved.</p>
        </div>
    </footer>
    <button id="backToTop" title="Back to Top">↑</button>
    <script src="script.js"></script>
</body>

</html>