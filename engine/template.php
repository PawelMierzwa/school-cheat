<?php

    $dir = 'template/';

    $file = $_SERVER['REQUEST_URI'];
    $ext = pathinfo($file, PATHINFO_EXTENSION);
    $file = pathinfo($file, PATHINFO_FILENAME);
    
    if($file==""){
        include $dir.'index.html';
    }
    if($file=="cabinet"){
        include 'cabinet/cabinet.php';
    }
    if (file_exists($dir.$file.'.html')) {
        include $dir.$file.'.html';
    }
    if(file_exists($dir.$file.'.php')){
        include $dir.$file.'.php';
    }
    else{
        $file1 = substr($file,0,8);
        $search = substr($file,19,strlen($file));
        if($file1=="pojecia?"){
            header('Location: pojecia#'.$search);
        }
        else{
            include 'error.php';
        }
    }

?>