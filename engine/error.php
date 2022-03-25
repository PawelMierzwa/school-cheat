<!DOCTYPE html>
<html lang="pl">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Błąd</title>
</head>
<body>
    <div class="menu">
        <a class="active" href="./">Home</a>
        <a href="./sieci/">Foliarz</a>
        <a href="./matma/">Matma</a>
        <a href="./about/">About</a>
    </div>
	<div class="content">
        <?php
			echo "Plik ".$file; if(!empty($ext)){echo ".".$ext;} echo " nie znaleziono";
		?>
	</div>
</body>
</html>