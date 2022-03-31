<html>
<head>
</head>
<body>
<?php
include 'bd.php';
// Проверяем, пусты ли переменные логина и id пользователя
if (empty($_SESSION['login']) or empty($_SESSION['id']))
{
// Если пусты, то мы не выводим ссылку
echo "<div class=\"col-lg-9 col-md-9\">
<title>Восстановление пароля</title>
".$_SESSION['error']."
<h2>Восстановление пароля</h2>
<form action=\"functions/recover.php\" method=\"post\">

<p>
<label>Ваш логин:<br></label>
<input name=\"login\" type=\"text\" size=\"15\" maxlength=\"15\">
</p>
<p>
<input type=\"submit\" name=\"submit\" value=\"Войти\">

<br>
<a href=\"register\">Зарегистрироваться</a>
<a href=\"login\">Войти</a>
</p></form>
<br></div>
";
$_SESSION['error'] = null;
}
else
{
// Если не пусты, то мы выводим ссылку
  echo '<head><meta http-equiv="refresh" content="0; URL=/cabinet" /></head>';
}
?>
</body>
</html>
