<?php
	function checkSession(){
		if (empty($_SESSION['login'])) {
			header('Location: /login');
		}
	}
	function getName(){
		$login = $_SESSION['login'];
		return $login;
	}
	function getMail(){
		$login = getName();
		$link = mysqli_connect("localhost","u722919_admin","ae3802aa","u722919_project");
		$result = mysqli_query($link, "SELECT email FROM users WHERE username='$login'");
		$myrow = mysqli_fetch_array($result);
		$mail = $myrow['email'];
		if(empty($mail)){
			$mail = "Brak E-Mail";
		}
		return $mail;
	}
?>
