<!DOCTYPE html>
<html lang="pl">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Błąd</title>
</head>
<body>
	<div class="content">
        <?php
			echo "Plik ".$file; if(!empty($ext)){echo ".".$ext;} echo " nie znaleziono";
		?>
	</div>
</body>
</html>