<?
	$login = $_POST['login'];
	$link = mysqli_connect("localhost","u722919_admin","ae3802aa","u722919_project");
	$result = mysqli_query ($link, "SELECT * FROM users WHERE username = '$login'");
	$row = mysqli_fetch_array($result);
	$mail = $row['email'];

	if(!empty($mail)){
		$time = time();
		$token = md5(md5($login).$mail.md5($time));
		$array = mysqli_query($link, "SELECT * FROM users WHERE username='$login'");
		$row = mysqli_fetch_array($array);
		$result = mysqli_query($link, "INSERT INTO tokens (token,user,type,old,new,status) VALUES('$token','$login','recover','$mail','-','clear')");
		$message = '
		<html>
		<head>
		  <title>Восстановление пароля</title>
		</head>
		<body>
		  <p>Восстановление пароля</p>
		  От аккаунта ' . $login. ' поступила просьба восстановить пароль к аккаунту. <br>Если вы отправили этот запрос и хотите пароль к аккаунту то нажмите кнопку ниже. <br>
			<form action="https://endergame.ru/functions/token" method="post">
				<p>
					<input name="user" type="hidden" value="'.$login.'">
					<input name="token" type="hidden" value="'.$token.'">
					<input name="type" type="hidden" value="recover">
				</p>
				<p>
					<input type="submit" value="Восстановить" style="border-radius: 20px;">
			</form><br>Если вы его не отправляли то просто проигнорируйте это письмо.
		</body>
		</html>
		';
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		mail($mail, "Смена пароля", $message, $headers);
		$_SESSION['error'] = "На почту было отправлено письмо с подтверждением о смене пароля";
		header('Location: /recover');
	}
	else{
		$_SESSION['error'] = "К аккаунту не подключена почта, восстановить пароль невозможно";
		header('Location: /recover');
	}
?>