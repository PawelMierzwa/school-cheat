<?php
    // Ngine B)
    $dir = 'template/'

    include $dir.'header.html';

    $file = $_SERVER['REQUEST_URI'];
    $ext = pathinfo($file, PATHINFO_EXTENSION);
    $file = pathinfo($file, PATHINFO_FILENAME);

    if($file=""){
        include $dir.'index.tpl';
    }
    if (file_exists($dir.$file.'.tpl')) {
        include $dir.$file.'.tpl';
    }
    else {
        include 'error.php';
    }

    include $dir.'footer.tpl';
?>