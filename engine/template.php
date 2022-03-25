<?php
    // Ngine B)
    $dir = 'template/';

    include $dir.'header.tpl';

    $file = $_SERVER['REQUEST_URI'];
    $ext = pathinfo($file, PATHINFO_EXTENSION);
    $file = pathinfo($file, PATHINFO_FILENAME);

    if($file==""){
        include $dir.'index.tpl';
    }
    else{
        if (file_exists($dir.$file.'.tpl')) {
            include $dir.$file.'.tpl';
        }
        else {
            include 'error.php';
        }
    }
    include $dir.'footer.tpl';
?>