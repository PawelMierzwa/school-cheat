<?php
    if(empty($_SESSION['id'])){
        header('Location: /login');
    }
?>
<html>
    <head>
        <title>Kabinet</title>
    </head>
    <body>
        <h1>Kabinet</h1>
    </body>
</html>