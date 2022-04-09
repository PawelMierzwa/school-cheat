<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Menu</title>
</head>
</html>
<?php
    session_start();

	if($_SERVER['HTTP_HOST'] == "sigmatools.org"){
		header('Location: https://www.sigmatools.org');
}

    include 'template/header.php';
	include 'engine/template.php';
?>
