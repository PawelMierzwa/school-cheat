<html>
    <head>
        <title>Zarejestruj się</title>
    </head>

    <body>
        <?php
            if(!empty($_SESSION['id'])){
                header('Location: /');
            }
            if(!empty($_SESSION['error'])){
                echo $_SESSION['error'];
            }
            $_SESSION['error'] = null;
        ?>

        <form action="cabinet/register.php" method="post">
            <p>
                <label>Login:<br></label>
                <input name="login" type="text" size="15" maxlength="15">
            </p>

            <p>
                <label>Hasło:<br></label>
                <input name="password" type="password" size="15" maxlength="15">
            </p>

            <p>
                <input type="submit" name="submit" value="Rejestracja">
            <br>
            <a href="/recover">Zapomniałem hasła</a>
            <a href="/login">Zaloguj się</a>
            </p>
        </form>
    </body>
</html>