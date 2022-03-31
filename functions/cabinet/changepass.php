<?php
	session_start();
	$login = $_SESSION['login'];
	if (isset($_POST['old_password'])) {
		$old = $_POST['old_password']; 
		if ($old == '') {
			unset($old);
		} 
	}
	if (isset($_POST['new_password'])) {
		$new = $_POST['new_password']; 
		if ($new == '') {
			unset($new);
		} 
	}
	if (empty($old) or empty($new)){
		$_SESSION['result'] = "Незаполнены все формы";
		header('Location: /cabinet');
	}

	$link = mysqli_connect("localhost","u722919_admin","ae3802aa","u722919_project");
	$result = mysqli_query($link, "SELECT * FROM users WHERE username = '$login'");
	$myrow = mysqli_fetch_array($result);

	$salt = $myrow['salt'];
	$old = md5(md5($old).$salt);
	$new = md5(md5($new).$salt);

	if ($myrow['password'] == $old) {
		$change = mysqli_query($link, "UPDATE users SET password='$new' WHERE username = '$login'");
		// Проверяем, есть ли ошибки
		if ($change=='TRUE'){
		$_SESSION['result'] = "Пароль изменён";
		header('Location: /cabinet');
		}
		else{
			$_SESSION['result'] = "Пароль не изменён";
			header('Location: /cabinet');
		}
	}
	else{
		$_SESSION['result'] = "Введён не настоящий пароль";
		header('Location: /cabinet');
	}
?>
