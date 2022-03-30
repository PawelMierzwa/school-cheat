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
		  <title>Przypomnienie hasła</title>
		</head>
		<body>
		  <p>Przypomnienie hasła</p>
		  Z konta ' . $login. 'otrzymał prośbę o zresetowanie hasła do konta. <br>Jeśli wysłałeś tę prośbę i chcesz mieć hasło do swojego konta, kliknij przycisk poniżej. <br>
			<form action="https://
                
                
                
                /engine/token" method="post">
				<p>
					<input name="user" type="hidden" value="'.$login.'">
					<input name="token" type="hidden" value="'.$token.'">
					<input name="type" type="hidden" value="recover">
				</p>
				<p>
					<input type="submit" value="Przypomnij hasło" style="border-radius: 20px;">
			</form><br>Jeśli go nie wysłałeś, po prostu zignoruj ​​ten e-mail..
		</body>
		</html>
		';
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		mail($mail, "Przypomnienie hasła", $message, $headers);
		$_SESSION['error'] = "Wysłano do Ciebie wiadomość e-mail potwierdzającą zmianę hasła.";
		header('Location: /recover');
	}
	else{
		$_SESSION['error'] = "Poczta nie jest połączona z kontem, nie można odzyskać hasła";
		header('Location: /recover');
	}
?>