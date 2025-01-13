<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

try {
    require_once 'config.php';
    echo "Database connection successful!\n";
    
    // Test query
    $stmt = $pdo->query("SELECT 1");
    echo "Query execution successful!";
    
} catch(Exception $e) {
    echo "Error: " . $e->getMessage();
}