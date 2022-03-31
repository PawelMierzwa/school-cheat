<?php
    session_start();
    if(empty($_SESSION['id'])){
        header('Location: /');
    }
    else{
        $_SESSION['id'] = null;
        session_abort();
    }
?>