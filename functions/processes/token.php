<?php
	$token = $_POST['token'];
	if(!empty($token)){
		$link = mysqli_connect("localhost","u722919_admin","ae3802aa","u722919_project");
		$result = mysqli_query ($link, "SELECT * FROM tokens WHERE token = '$token'");
	
		if ($result) {
			$row = mysqli_fetch_array($result);
			$login = $row['user'];
			if($row['type'] == "add_mail" && $row['status'] == "clear"){
				$mail = $row['new'];
				$change = mysqli_query($link, "UPDATE users SET email='$mail' WHERE username = '$login'");						
				if($change){
					$change2 = mysqli_query($link, "UPDATE tokens SET status='used' WHERE user = '$login'");
					$message = '
					<html>
					<head>
					  <title>Смена почты</title>
					</head>
					<body>
					  <p>Смена почты</p>
					  Почта к аккаунту ' . $login. ' была изменена на вашу. <br>
					</body>
					</html>
					';
					
					$headers  = 'MIME-Version: 1.0' . "\r\n";
					$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
					mail($mail, "Смена почты", $message, $headers);

				}
			}
			if($row['type'] == "change_mail" && $row['status'] == "clear"){
				$mail = $row['new'];
				$old = $row['old'];
				$change = mysqli_query($link, "UPDATE users SET email='$mail' WHERE username='$login'");						
				if($change){
					$change2 = mysqli_query($link, "UPDATE tokens SET status='used' WHERE user='$login'");
					$message = '
					<html>
					<head>
					  <title>Смена почты</title>
					</head>
					<body>
					  <p>Смена почты</p>
					  Почта к аккаунту ' . $login. ' была изменена на вашу. <br>
					</body>
					</html>
					';
					
					$headers  = 'MIME-Version: 1.0' . "\r\n";
					$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
					mail($mail, "Смена почты", $message, $headers);

					$message = '
					<html>
					<head>
					  <title>Смена почты</title>
					</head>
					<body>
					  <p>Смена почты</p>
					  Почта к аккаунту ' . $login. ' была изменена на новую: '.$mail.'. <br>
					  Если вы не изменяли почту к аккаунту то нажмите кнопку ниже. <br>
					  <form action="https://endergame.ru/functions/token" method="post">
						<p>
							<input name="id" type="hidden" value="'.$id.'">
							<input name="user" type="hidden" value="'.$login.'">
							<input name="token" type="hidden" value="'.$token.'">
							<input name="type" type="hidden" value="back">
						</p>
						<p>
							<input type="submit" value="Подключить" style="border-radius: 20px;">
					</form>
					</body>
					</html>
					';
					
					$headers  = 'MIME-Version: 1.0' . "\r\n";
					$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
					mail($old, "Смена почты", $message, $headers);

				}
			}
			if($row['type'] == "back" && $row['status'] == "used"){
				$mail = $row['old'];
				$change = mysqli_query($link, "UPDATE users SET email='$mail' WHERE username='$login'");						
				if($change){
					$change2 = mysqli_query($link, "UPDATE tokens SET status='back' WHERE user='$login'");
					$message = '
					<html>
					<head>
					  <title>Смена почты</title>
					</head>
					<body>
					  <p>Смена почты</p>
					  Почта к аккаунту ' . $login. ' была изменена на вашу. <br>
					</body>
					</html>
					';
					
					$headers  = 'MIME-Version: 1.0' . "\r\n";
					$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
					mail($mail, "Смена почты", $message, $headers);

				}
			}
			if($row['type'] == "recover" && $row['status'] == "clear"){
				$mail = $row['old'];

				$arr = array('a','b','c','d','e','f',
                 'g','h','i','j','k','l',
                 'm','n','o','p','r','s',
                 't','u','v','x','y','z',
                 'A','B','C','D','E','F',
                 'G','H','I','J','K','L',
                 'M','N','O','P','R','S',
                 'T','U','V','X','Y','Z',
                 '1','2','3','4','5','6',
                 '7','8','9','0','.',',',
                 '(',')','[',']','!','?',
                 '&','^','%','@','*','$',
                 '<','>','/','|','+','-',
                 '{','}','`','~');
    			// Генерируем пароль
    			$pass = "";
    			for($i = 0; $i < 8; $i++)
    			{
    			  // Вычисляем случайный индекс массива
    			  $index = rand(0, count($arr) - 1);
    			  $pass .= $arr[$index];
    			}

    			$result5 = mysqli_query ($link, "SELECT * FROM users WHERE username = '$login'");
    			$part = mysqli_fetch_array($result5);
    			$salt = $part['salt'];
    			$password = md5(md5($pass).$salt);

				$change = mysqli_query($link, "UPDATE users SET password='$password' WHERE username='$login'");						
				if($change){
					$change2 = mysqli_query($link, "UPDATE tokens SET status='used' WHERE user='$login'");
					$message = '
					<html>
					<head>
					  <title>Восстановление пароля</title>
					</head>
					<body>
					  <p>Восстановление пароля</p>
					  Пароль к аккаунту ' . $login. ' был изменён. <br>
					  Новый пароль: '.$pass.' <br>
					  Советуем сразу изменить пароль.
					</body>
					</html>
					';
					
					$headers  = 'MIME-Version: 1.0' . "\r\n";
					$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
					mail($mail, "Смена почты", $message, $headers);

				}
			}
		}
	}
	header('Location: /');
?>
