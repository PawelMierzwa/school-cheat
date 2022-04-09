<?php
	include 'userinfo.php';
	// include '../pay/config.php';
	checkSession();
?>

<!DOCTYPE html>
<html>
<head>
	<title>Kabinet</title>
	<link rel="stylesheet" href="lc.css" type="text/css">
</head>
<body>
	<h1> <?php echo $_SESSION['result']; ?> </h1>
	<span class="name-rog">
		<div class="hr-line"></div> <h1>Kabinet</h1>
	</span>
<div class="block" style=" height: 20%; padding: 3%">
	Login: <?php echo getName(); ?> <br>
	E-Mail: <?php echo getMail(); ?> <br>
</div>

<div class="block" style="margin-left: 10%; height: 20%; text-align: center;">
	<!--
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
	-->
</div>
<div style="margin-top: 7%;">
<div class="hr-line"></div><h2>Bezpieczeństwo</h2>
</div>
<div class="pass">
	<h3>Zmiana hasła</h3>
	<form action="changepass.php" method="post">
		<p>
		<input name="old_password" type="password" size="16" maxlength="16" placeholder="Stare hasło">
		</p>
		<p>
		<input name="new_password" type="password" size="16" maxlength="16" placeholder="Nowe hasło">
		</p>
		<p>
		<input type="submit" name="submit" value="Zmienić hasło">
		</p>
	</form>
</div>
<div class="pass">
	<h3>Zmiana E-Mail</h3>
	<form action="../processes/mail.php" method="post">
		<p>
		<input name="email" type="text" size="15" maxlength="32" placeholder="Nowy E-Mail">
		</p>
		<p>
			<?php
				$login = getName();
				$link = mysqli_connect("localhost","u722919_admin","ae3802aa","u722919_project");
				$result = mysqli_query($link, "SELECT email FROM users WHERE username='$login'");
				if($result == NULL){
					echo '	<input type="hidden" name="type" value="add">
						<input type="submit" name="submit" value="Dodać E-Mail">';
				}
				else{
					echo '	<input type="hidden" name="type" value="change">
						<input type="submit" name="submit" value="Zmienić E-Mail">';
				}
			?>
		</p>
	</form>
</div>
<?php $_SESSION['result'] = null; ?>
</body>
</html>


