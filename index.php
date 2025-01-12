<?php
// Database connection
$db = new PDO("mysql:host=localhost;dbname=blog_db", "username", "password");

function getArticles($category, $page = 1) {
    global $db;
    $limit = 10;
    $offset = ($page - 1) * $limit;
    
    $stmt = $db->prepare("
        SELECT * FROM articles 
        WHERE category = :category 
        ORDER BY date DESC 
        LIMIT :limit OFFSET :offset
    ");
    
    $stmt->bindParam(':category', $category);
    $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();
    
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Handle API request
$category = $_GET['category'] ?? 'most_popular';
$page = $_GET['page'] ?? 1;

$articles = getArticles($category, $page);
header('Content-Type: application/json');
echo json_encode($articles);
?>