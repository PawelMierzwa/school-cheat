<?php

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
    $error = "Wprowadzieliscie nie wszystkie dane, wróć i napisz jeszcze raz!";
    $_SESSION['error'] = $error;
    header('Location: /');
}

$login = stripslashes($login);
$login = htmlspecialchars($login);
$password = stripslashes($password);
$password = htmlspecialchars($password);

$login = trim($login);
$password = trim($password);

include ("bd.php");

$result = mysqli_query($db, "SELECT id FROM users WHERE username='$login'");
$myrow = mysqli_fetch_array($result);
if (!empty($myrow['id'])) {
    $error = "Pszepraszamy, wybrany login już jest zajęty. Wybierzcie inny.";
    $_SESSION['error'] = $error;
    header('Location: /');
}

$salt = md5(rand().time().md5($login));
$salted2md5 = md5(md5($password).$salt);
$result2 = mysqli_query ($db, "INSERT INTO users (username,name,password,salt) VALUES('$login','$login','$salted2md5','$salt')");

if ($result2=='TRUE'){
    $error = "Rejestracja udana! Teraz można się zalogować. <a href='/login'>Logowanie</a>";
    $_SESSION['error'] = $error;
    header('Location: /');
}
else {
    $error = "Błąd rejestracja nie powiodła się.";
    $_SESSION['error'] = $error;
    header('Location: /');
}

?>