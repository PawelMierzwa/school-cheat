<html>
<head>
    <link rel="stylesheet" href="template/css/main.css" type="text/css">
</head>
<body>

    <div class="menu">
    <?php
        $file = $_SERVER['REQUEST_URI'];

        switch($file){
            case '/foliage':
                echo '
                    <a href="/">Home</a>
                    <a class="active" href="/foliage">Foliarz</a>
                    <a href="/matma">Matma</a>
                    <a href="/about">About</a>
                    ';
                break;
            case '/matma':
                echo '
                    <a href="/">Home</a>
                    <a href="/foliage">Foliarz</a>
                    <a class="active" href="/matma">Matma</a>
                    <a href="/about">About</a>
                    ';
                break;
            case '/about':
                echo '
                    <a href="/">Home</a>
                    <a href="/foliage">Foliarz</a>
                    <a href="/matma">Matma</a>
                    <a class="active" href="/about">About</a>
                    ';
                break;
            default:
                echo '
                    <a class="active" href="/">Home</a>
                    <a href="/foliage">Foliarz</a>
                    <a href="/matma">Matma</a>
                    <a href="/about">About</a>
                    ';
                break;
        }
    ?>
    </div>
<!--<img onclick="" > -->
<input class="dark" onclick="DarkTheme()" value="&#9789"></button>
<script src="template/js/menu.js"></script>
</body>
</html>



