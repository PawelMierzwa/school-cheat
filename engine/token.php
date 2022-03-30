<?php
	$token = $_POST['token'];
	if(!empty($token)){
		$link = mysqli_connect("localhost","u722919_admin","ae3802aa","u722919_project");
		$result = mysqli_query ($link, "SELECT * FROM tokens WHERE token = '$token'");
	
		if ($result) {
			$row = mysqli_fetch_array($result);
			$login = $row['user'];
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
                 
    			$pass = "";
    			for($i = 0; $i < 8; $i++)
    			{
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
					  <title>Odzyskiwanie hasła</title>
					</head>
					<body>
				        <p>Odzyskiwanie hasła</p>
					    Hasło do konta ' . $login. ' to zostało zmienione. <br>
                        Nowe hasło: '.$pass.' <br>
                        Zalecamy natychmiastową zmianę hasła.
					</body>
					</html>
					';
					
					$headers  = 'MIME-Version: 1.0' . "\r\n";
					$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
					mail($mail, "Odzyskiwanie hasła", $message, $headers);

				}
			}
		}
	}
	header('Location: /');
?>