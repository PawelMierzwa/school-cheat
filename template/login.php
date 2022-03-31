<html>

<head>
    <title>
        Zaloguj się
    </title>
</head>

<body>
    <?php
        if(!empty($_SESSION['id'])){
            header('Location: /cabinet');
        }
        if(!empty($_SESSION['error'])){
            echo $_SESSION['error'];
        }
        $_SESSION['error'] = null;
    ?>
    <form method="post" action="cabinet/login.php" class="content">
        Login: <input type="text" id="login"><br> Hasło: <input type="password" id="password"><br>
        <input type="submit" value="Zaloguj się"><a href="/register">Zarejestruj się</a> <a href="/recover">Zapomniałem hasło</a>
    </form>
</body>

</html>