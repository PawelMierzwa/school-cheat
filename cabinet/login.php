<?php
session_start();

if (isset($_POST['login'])) {
    $login = $_POST['login'];
    if ($login == '') {
        unset($login);
    } 
}

if (isset($_POST['password'])) {
    $password=$_POST['password'];
    if ($password =='') {
        unset($password);
    }
}

if (empty($login) or empty($password)){
    $error = "Nie wprowadzono wszystkiego!";
    $_SESSION['error'] = $error;
    header('Location: /login');
}

$login = stripslashes($login);
$login = htmlspecialchars($login);
$password = stripslashes($password);
$password = htmlspecialchars($password);

$login = trim($login);
$password = trim($password);

include ("bd.php");

$result = mysqli_query($db, "SELECT * FROM users WHERE username='$login'");

$myrow = mysqli_fetch_array($result);
if (empty($myrow['password'])){
    $error = "Wprowadzono zły login lub hasło.";
    $_SESSION['error'] = $error;
    header('Location: /login');
}
else {
	$salt = $myrow['salt'];
	$salted2md5 = md5(md5($password).$salt);
    if ($myrow['password']==$salted2md5) {
        $_SESSION['login']=$myrow['username'];
        $_SESSION['id']=$myrow['id'];
        header('Location: /cabinet');
    }
    else {
        $error = "Wprowadzono zły login lub hasło.";
        $_SESSION['error'] = $error;
        header('Location: /login');
    }
}
?>