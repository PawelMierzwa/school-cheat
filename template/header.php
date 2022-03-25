<html>
<head>
    <link rel="stylesheet" href="template/css/menu.css" type="text/css">
</head>
<body>

    <?php
        $file = $_SERVER['REQUEST_URI'];

        switch($file){
            case 'foliage'
                echo '
                    <div class="menu">
                    <a href="/">Home</a>
                    <a class="active" href="/foliage">Foliarz</a>
                    <a href="/matma">Matma</a>
                    <a href="/about">About</a>
                    </div>
                    ';
                break;
            case 'matma'
                echo '
                    <div class="menu">
                    <a href="/">Home</a>
                    <a href="/foliage">Foliarz</a>
                    <a class="active" href="/matma">Matma</a>
                    <a href="/about">About</a>
                    </div>
                    ';
                break;
            case 'about'
                echo '
                    <div class="menu">
                    <a href="/">Home</a>
                    <a href="/foliage">Foliarz</a>
                    <a href="/matma">Matma</a>
                    <a class="active" href="/about">About</a>
                    </div>
                    ';
                break;
            default ''
                echo '
                    <div class="menu">
                    <a class="active" href="/">Home</a>
                    <a href="/foliage">Foliarz</a>
                    <a href="/matma">Matma</a>
                    <a href="/about">About</a>
                    </div>
                    ';
                break;
        }
    ?>
<!--<img onclick="" > -->
<input class="dark" onclick="DarkTheme()" value="&#9789"></button>
<script src="template/js/menu.js"></script>
</body>
</html>



