<?php
session_start();
$_SESSION['login'] = null;
$_SESSION['id'] = null;
header('Location: /');
?>