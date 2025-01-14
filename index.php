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
    <title>UNIQUE CRAZE</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
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
                <div class="logo" style="margin-left: 20px;">
                    <img src="company.png" alt="Logo" style="width: 60px; height: 50px;">
                    
                </div>
                <h1 style="margin-left: 10px;">
                    <span style="font-size: 1.4rem;">U</span>
                    <span>nique</span>
                    <span>Craze</span>
                </h1>
                
                
                
                <div class="nav-links" style="margin-left: 20px; font-size: 1rem;">
                    <ul>
                        <li><a href="#" style="font-size: 1rem;">Home</a></li>
                        <li><a href="#" style="font-size: 1rem;">Services</a></li>
                        <li><a href="#" style="font-size: 1rem;">About Us</a></li>
                        <li><a href="#" style="font-size: 1rem;">Contact</a></li>
                        <li><pre>       </pre></li>
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
                        <h1 style="font-size: 2.8rem; font-weight: 700; line-height: 1.5;">We Shape the Perfect Solutions</h1>
                        <p style="font-size: 1.2rem; font-weight: 500; line-height: 1.5;">We are dedicated to delivering exceptional service that <br>exceeds our customers' expectations. Our commitment goes beyond service; we create experiences that build trust and lasting relationships.</p><br><br>
                        <div class="share-buttons">
                            <!-- Each button has a data-platform attribute to identify the social platform -->
                            <button class="share-btn" data-platform="twitter"></button>
                            <button class="share-btn" data-platform="linkedin"></button>
                            <button class="share-btn" data-platform="facebook"></button>
                        </div>
                    </div>
                    <div class="hero">
                        <video autoplay loop muted playsinline class="hero-video">
                            <source src="videoplayback.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div class="bottom_setting">
                    <article>
                        <i class="fas fa-laptop-code"></i>
                        <a href="#" class="button">Website Development</a>
                    </article>
                    <article>
                        <i class="fas fa-building"></i>
                        <a href="#" class="button">Brand Building</a>
                    </article>
                    <article>
                        <i class="fas fa-bullhorn"></i>
                        <a href="#" class="button">Digital Marketing</a>
                    </article>
                    <article>
                        <i class="fas fa-search"></i>
                        <a href="#" class="button">SEO & Content Writing</a>
                    </article>
                    <article>
                        <i class="fas fa-mobile-alt"></i>
                        <a href="#" class="button">App Development</a>
                    </article>
                    <article>
                        <i class="fas fa-paint-brush"></i>
                        <a href="#" class="button">UI/UX Designing</a>
                    </article>
                    <article>
                        <i class="fas fa-desktop"></i>
                        <a href="#" class="button">Embrace Responsive Design</a>
                    </article>
                    <article>
                        <i class="fas fa-tablet-alt"></i>
                        <a href="#" class="button">Mobile Optimization</a>
                    </article>
                    <article>
                        <i class="fas fa-users"></i>
                        <a href="#" class="button">Identify your Audience</a>
                    </article>
                </div>
            </div>
            <div class="side_container">
                <h2>Advertisements</h2>
                <div class="boxes">
                    <div class="box" style="background-image: url('https://cdn.prod.website-files.com/627a5f477d5ec9079c88f0e2/63964cc739abd575d50b68ed_google-not-against-ai.jpg');"></div>
                    <div class="box" style="background-image: url('https://cdn.prod.website-files.com/627a5f477d5ec9079c88f0e2/63964cc739abd575d50b68ed_google-not-against-ai.jpg');"></div>
                    <div class="box" style="background-image: url('https://cdn.prod.website-files.com/627a5f477d5ec9079c88f0e2/63964cc739abd575d50b68ed_google-not-against-ai.jpg');"></div>
                    <div class="box" style="background-image: url('https://cdn.prod.website-files.com/627a5f477d5ec9079c88f0e2/63964cc739abd575d50b68ed_google-not-against-ai.jpg');"></div>
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
                <!-- <a href="#" class="social-icon"><img src="twitter (1).png" alt="twitter" style="width: 20px; height: 20px;"></a> -->
                <a href="#" class="social-icon"><img src="facebook (1).png" alt="facebook" style="width: 20px; height: 20px;"></a>
            </div>
            <p>&copy; 2025 UNIQUE CRAZE. All rights reserved.</p>
        </div>
    </footer>
    <button id="backToTop" title="Back to Top">↑</button>
    <script src="script.js"></script>
</body>

</html>