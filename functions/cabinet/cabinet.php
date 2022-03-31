<?php
	include 'userinfo.php';
	include '../pay/config.php';
	checkSession();
?>

<!DOCTYPE html>
<html>
<head>
	<title>Личный кабинет</title>
	<link rel="stylesheet" href="functions/lc.css" type="text/css">
</head>
<body>
	<h1> <?php echo $_SESSION['result']; ?> </h1>
	<span class="name-rog">
		<div class="hr-line"></div> <h1>Личный кабинет</h1>
	</span>
<div class="block" style=" height: 20%; padding: 3%">
	Ник: <?php echo getName(); ?> <br>
	Баланс: <?php echo getBill(); ?> <br>
	Йордов: <?php echo getJords();  if(getJords() > 0) {echo '<a href="/obmen" style="margin-left: 5%;">Обменять</a>';}?> <br>
	Привилегия: <?php echo getPerm(); ?> <br>
	E-Mail: <?php echo getMail(); ?> <br>
</div>
<div class="block" style="margin-left: 10%; height: 20%; text-align: center;">
	<span style="font-size: 20px;">Пополнение счёта</span><br>
	<span style="font-size: 16px;">10 йордов - 1руб</span>
	<form method="post" action="https://sci.interkassa.com/" accept-charset="UTF-8">
  		<input type="hidden" name="ik_co_id" value="<?=$id_kassa?>">
  		<input type="hidden" name="ik_pm_no" value="<?=time()?>">
  		<input type="number" name="ik_am" value="" placeholder="0">руб.
  		<input type="hidden" name="ik_cur" value="rub">
  		<input type="hidden" name="ik_x_login" value="<?=getName()?>">
  		<input type="hidden" name="ik_x_type" value="йорд">
 		<input type="hidden" name="ik_desc" value="Покупка внутриигровой валюты для <?=getName()?>"/>
  		<input type="submit" value="Купить" style="width: 58%;">
	</form>
</div>
<div style="margin-top: 30%;">
<div class="hr-line"></div><h2>Покупка доната</h2>
<span><font style="color: red">Внимение!</font> Если вы купите привилегию ниже вашей то вы потеряете текущую</span>
</div>
<div class="donate">
	<form method="post" action="functions/pay/donate.php">
		<p>
			<select name="donate">
				<option value="Вип">Вип - 19руб.</option>
				<option value="Премиум">Премиум - 39руб.</option>
				<option value="Креатив">Креатив - 59руб.</option>
				<option value="Админ">Админ - 79руб.</option>
				<option value="Основатель">Основатель - 159руб.</option>
				<option value="Владелец">Владелец - 199руб.</option>
			</select>
		</p>
		<input type="submit" value="Купить">
	</form>
</div>
<div style="margin-top: 7%;">
<div class="hr-line"></div><h2>Безопасность</h2>
</div>
<div class="pass">
	<h3>Смена пароля</h3>
	<form action="functions/cabinet/changepass.php" method="post">
		<p>
		<input name="old_password" type="password" size="16" maxlength="16" placeholder="Старый пароль">
		</p>
		<p>
		<input name="new_password" type="password" size="16" maxlength="16" placeholder="Новый пароль">
		</p>
		<p>
		<input type="submit" name="submit" value="Сменить пароль">
		</p>
	</form>
</div>
<div class="pass">
	<h3>Смена почты</h3>
	<form action="functions/processes/mail.php" method="post">
		<p>
		<input name="email" type="text" size="15" maxlength="32" placeholder="Новая почта">
		</p>
		<p>
			<?php
				$login = getName();
				$link = mysqli_connect("localhost","u722919_admin","ae3802aa","u722919_project");
				$result = mysqli_query($link, "SELECT email FROM users WHERE username='$login'");
				if($result == NULL){
					echo '	<input type="hidden" name="type" value="add">
						<input type="submit" name="submit" value="Добавить почту">';
				}
				else{
					echo '	<input type="hidden" name="type" value="change">
						<input type="submit" name="submit" value="Изменить почту">';
				}
			?>
		</p>
	</form>
</div>
<?php $_SESSION['result'] = null; ?>
</body>
</html>


