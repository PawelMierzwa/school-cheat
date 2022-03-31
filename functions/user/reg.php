<?php
include 'bd.php';
// Проверяем, пусты ли переменные логина и id пользователя
if (empty($_SESSION['login']) or empty($_SESSION['id']))
{
// Если пусты, то мы не выводим ссылку
echo "<html>
<head>
<title>Регистрация</title>
</head>
<body>
	<div class=\"col-lg-9 col-md-9\">
<h2>Регистрация</h2>
<form action=\"user/save_user.php\" method=\"post\">
<!--**** save_user.php - это адрес обработчика. То есть, после нажатия на кнопку \"Зарегистрироваться\", данные из полей отправятся на страничку save_user.php методом \"post\" ***** -->
<p>
<label>Ваш логин:<br></label>
<input name=\"login\" type=\"text\" size=\"15\" maxlength=\"15\">
</p>
<!--**** В текстовое поле (name=\"login\" type=\"text\") пользователь вводит свой логин ***** -->
<p>
<label>Ваш пароль:<br></label>
<input name=\"password\" type=\"password\" size=\"15\" maxlength=\"15\">
</p>
<!--**** В поле для паролей (name=\"password\" type=\"password\") пользователь вводит свой пароль ***** -->
<p>
<input type=\"submit\" name=\"submit\" value=\"Зарегистрироваться\">

<br>
<a href=\"recover\">Восстановить пароль</a>
<a href=\"login\">Войти</a>
<!--**** Кнопочка (type=\"submit\") отправляет данные на страничку save_user.php ***** -->
</p></form></div>
</body>
</html>";
$_SESSION['error'] = null;
}
else
{
// Если не пусты, то мы выводим ссылку
  echo '<head><meta http-equiv="refresh" content="0; URL=/cabinet" /></head>';
}
?>