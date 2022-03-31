<?php
    if(!empty($_SESSION['id'])){
        echo '<head><meta http-equiv="refresh" content="0; URL=/cabinet" /></head>';
    }
?>
<html>
    <head>
        <title>Przypomnienie hasła</title>
    </head>
    <body>
        <? echo $_SESSION['error'];?>
        <h2>Przypomnienie hasła</h2>
        <form action="cabinet/recover.php" method="post"  class="content">
        <p>
        <label>Login:<br></label>
        <input name="login" type="text" size="15" maxlength="15">
        </p>
        <p>
        <input type="submit" name="submit" value="Przypomnij">
        <br>
        <a href="register">Zarejestruj się</a>
        <a href="login">Zaloguj się</a>
        </p></form>
        <br></div>
        ";
        <? $_SESSION['error'] = null; ?>
    </body>
</html>
