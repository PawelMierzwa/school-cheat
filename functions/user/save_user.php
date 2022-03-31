<?php
if (isset($_POST['login'])) { $login = $_POST['login']; if ($login == '') { unset($login);} }
 //заносим введенный пользователем логин в переменную $login, если он пустой, то 
//уничтожаем переменную
if (isset($_POST['password'])) { $password=$_POST['password']; if ($password =='') { unset($password);} }
//заносим введенный пользователем пароль в переменную $password, если он пустой, то
// уничтожаем переменную
if (empty($login) or empty($password))
 //если пользователь не ввел логин или пароль, то выдаем ошибку и останавливаем скрипт
{
$error = "Вы ввели не всю информацию, вернитесь назад и заполните все поля!";
$_SESSION['error'] = $error;
header('Location: /');
}
//если логин и пароль введены, то обрабатываем их, чтобы теги и скрипты не работали,
 //мало ли что люди могут ввести
$login = stripslashes($login);
$login = htmlspecialchars($login);
$password = stripslashes($password);
$password = htmlspecialchars($password);
//удаляем лишние пробелы
$login = trim($login);
$password = trim($password);
// подключаемся к базе
include ("bd.php");
// файл bd.php должен быть в той же папке, что и все остальные, если это не так, то просто
 //измените путь  проверка на существование пользователя с таким же логином
$result = mysqli_query($db, "SELECT id FROM users WHERE username='$login'");
$myrow = mysqli_fetch_array($result);
if (!empty($myrow['id'])) {
$error = "Извините, введённый вами логин уже зарегистрирован. Введите другой логин.";
$_SESSION['error'] = $error;
header('Location: /');
}
// если такого нет, то сохраняем данные
$salt = md5(rand().time().md5($login));
$salted2md5 = md5(md5($password).$salt);
$result2 = mysqli_query ($db, "INSERT INTO users (username,name,password,salt) VALUES('$login','$login','$salted2md5','$salt')");
$result3 = mysqli_query ($db, "INSERT INTO jords (username,amount) VALUES('$login','0')");
// Проверяем, есть ли ошибки
if ($result2=='TRUE' && $result3=='TRUE')
{
$error = "Вы успешно зарегистрированы! Теперь вы можете зайти на сайт. <a href='../'>Главная страница</a>";
$_SESSION['error'] = $error;
header('Location: /');
}
else {
$error = "Ошибка! Вы не зарегистрированы.";
$_SESSION['error'] = $error;
header('Location: /');
}
?>