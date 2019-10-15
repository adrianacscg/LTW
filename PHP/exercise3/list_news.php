<?php 
    //opens a connection to the databse
    $db = new PDO('sqlite:news.db');
    //the $db variable now represents the connection to the database


    //query returning all news in the database
    $stmt = $db->prepare('SELECT * FROM news');
    $stmt->execute();
    $articles = $stmt->fetchAll();
    //the variable $articles in now an associative array containing all the news in the database


    //iterate over the associative array $articles
    foreach( $articles as $article) {
        echo '<h1>' . $article['title'] . '</h1>';
        echo '<p>' . $article['introduction'] . '</p>';
    }


?>