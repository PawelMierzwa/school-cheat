<?php

    $dir = 'template/';

    $file = $_SERVER['REQUEST_URI'];
    $ext = pathinfo($file, PATHINFO_EXTENSION);
    $file = pathinfo($file, PATHINFO_FILENAME);
    
    if($file==""){
        include $dir.'index.html';
    }
    else{
        if (file_exists($dir.$file.'.html')) {
            include $dir.$file.'.html';
        }
        else {
            include 'error.php';
        }
    }

?>