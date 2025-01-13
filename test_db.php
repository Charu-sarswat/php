<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

try {
    $pdo = new PDO("mysql:host=localhost", "root", "");
    echo "Basic connection successful<br>";
    
    $pdo->exec("CREATE DATABASE IF NOT EXISTS user_management");
    echo "Database created/verified<br>";
    
    $pdo->exec("USE user_management");
    echo "Database selected<br>";
    
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ");
    echo "Table created/verified<br>";
    
    echo "All database operations successful!";
    
} catch(PDOException $e) {
    die("Error: " . $e->getMessage());
}
?> 