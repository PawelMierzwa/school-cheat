<?php
    // Ngine B)
    include '/template/header.html';

    $dir = 'template'

    $file = $_SERVER['REQUEST_URI'];
    $ext = pathinfo($file, PATHINFO_EXTENSION);
    $file = pathinfo($file, PATHINFO_FILENAME);

    if (file_exists($dir.$file.'.html')) {
        include $dir.$file.'.html';
    }
    else {
        include 'error.php';
    }

    include '/template/footer.html';
?>