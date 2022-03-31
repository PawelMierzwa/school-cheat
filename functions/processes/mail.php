<?php	
	session_start();
	if(!empty($_POST['submit'])){
		if(!empty($_POST['email'])){
			$mail = $_POST['email'];
			$login = $_SESSION['login'];
			$type = $_POST['type'];
			$time = time();
			$token = md5(md5($login).$mail.md5($time));
			$link = mysqli_connect("localhost","u722919_admin","ae3802aa","u722919_project");

			switch($type){				
				case "change":
					$old = NULL;
					$array = mysqli_query($link, "SELECT * FROM users WHERE username='$login'");
					$row = mysqli_fetch_array($array);
					$old = $row['email'];
					$result = mysqli_query($link, "INSERT INTO tokens (token,user,type,old,new,status) VALUES('$token','$login','change_mail','$old','$mail','clear')");
					$message = '
					<html>
					<head>
					  <title>Подтверждение почты</title>
					</head>
					<body>
					  <p>Подтверждение почты</p>
					  От аккаунта ' . $login. ' поступила просьба подключать эту почту к аккаунту в целях безопасности. <br>Если вы отправили этот запрос и хотите подключить почту к аккаунту то нажмите кнопку ниже. <br>
						<form action="https://endergame.ru/functions/token" method="post">
							<p>
								<input name="user" type="hidden" value="'.$login.'">
								<input name="token" type="hidden" value="'.$token.'">
								<input name="type" type="hidden" value="'.$type.'">
							</p>
							<p>
								<input type="submit" value="Подключить" style="border-radius: 20px;">
						</form><br>Если вы его не отправляли то просто проигнорируйте это письмо.
					</body>
					</html>
					';
					$headers  = 'MIME-Version: 1.0' . "\r\n";
					$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
					mail($mail, "Смена почты", $message, $headers);
					header('Location: /cabinet');
					break;
				case "add":
					$result = mysqli_query($link, "INSERT INTO tokens (token,user,type,old,new,status) VALUES('$token','$login','add_mail','','$mail','clear')");
					$message = '
					<html>
					<head>
					  <title>Подтверждение почты</title>
					</head>
					<body>
					  <p>Подтверждение почты</p>
					  От аккаунта ' . $login. ' поступила просьба подключать эту почту к аккаунту в целях безопасности. <br>Если вы отправили этот запрос и хотите подключить почту к аккаунту то нажмите кнопку ниже. <br>
						<form action="https://endergame.ru/functions/token" method="post">
							<p>
								<input name="user" type="hidden" value="'.$login.'">
								<input name="token" type="hidden" value="'.$token.'">
								<input name="type" type="hidden" value="'.$type.'">
							</p>
							<p>
								<input type="submit" value="Подключить" style="border-radius: 20px;">
						</form><br>Если вы его не отправляли то просто проигнорируйте это письмо.
					</body>
					</html>
					';
					$headers  = 'MIME-Version: 1.0' . "\r\n";
					$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
					mail($mail, "Смена почты", $message, $headers);
					header('Location: /cabinet');
					break;
				default: header('Location: /cabinet'); break;
			}
			header('Location: /cabinet');
		}
		else{
			$_SESSION['result'] = "Не введена почта";
			header('Location: /cabinet');
		}
	}
	else{
		header('Location: /cabinet');
	}
?>
