<html>

<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="template/css/dark.css" media="(prefers-color-scheme: dark)">
    <link rel="stylesheet" href="template/css/light.css" media="(prefers-color-scheme: light)">
    <link rel="stylesheet" href="template/css/main.css" type="text/css">
</head>

<body>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#ultrasupercoolnavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">School Cheat</a>
            </div>
            <div class="collapse navbar-collapse" id="ultrasupercoolnavbar">
                <?php
                $file = $_SERVER['REQUEST_URI'];

                switch ($file) {
                    case '/foliage':
                        echo '
                                <ul class="nav navbar-nav">
                                    <li><a href="/">Home</a></li>
                                    <li class="dropdown active"><a class="dropdown-toggle" data-toggle="dropdown" href="/foliage">Sieci<span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li class="active"><a href="/foliage">Kalkulator IP</a></li>
                                            <li><a href="/pojecia">Pojęcia</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/matma">Matma</a></li>
                                    <li><a href="/about">About</a></li>
                                </ul>
                            ';
                        break;
                    case '/pojecia':
                        echo '
                                <ul class="nav navbar-nav">
                                    <li><a href="/">Home</a></li>
                                    <li class="dropdown active"><a class="dropdown-toggle" data-toggle="dropdown" href="/foliage">Sieci<span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="/foliage">Kalkulator IP</a></li>
                                            <li class="active"><a href="/pojecia">Pojęcia</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/matma">Matma</a></li>
                                    <li><a href="/about">About</a></li>
                                </ul>
                            ';
                        break;
                    case '/matma':
                        echo '
                                <ul class="nav navbar-nav">
                                    <li><a href="/">Home</a></li>
                                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="/foliage">Sieci<span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="/foliage">Kalkulator IP</a></li>
                                            <li><a href="/pojecia">Pojęcia</a></li>
                                        </ul>
                                    </li>
                                    <li class="active"><a href="/matma">Matma</a></li>
                                    <li><a href="/about">About</a></li>
                                </ul>
                            ';
                        break;
                    case '/about':
                        echo '
                                <ul class="nav navbar-nav">
                                    <li><a href="/">Home</a></li>
                                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="/foliage">Sieci<span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/foliage">Kalkulator IP</a></li>
                                                <li><a href="/pojecia">Pojęcia</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/matma">Matma</a></li>
                                    <li class="active"><a href="/about">About</a></li>
                                </ul>
                            ';
                        break;
                    default:
                        echo '                        
                                <ul class="nav navbar-nav">
                                    <li class="active"><a href="/">Home</a></li>
                                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="/foliage">Sieci<span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/foliage">Kalkulator IP</a></li>
                                                <li><a href="/pojecia">Pojęcia</a></li>
                                            </ul>
                                        </li>
                                    <li><a href="/matma">Matma</a></li>
                                    <li><a href="/about">About</a></li>
                                </ul>
                            ';
                        break;
                }
                ?>
                <ul class="nav navbar-nav navbar-right">
                    <li><img src="template/img/sun.svg" style="margin-top: 10px; margin-left:10px;" data-light-src="template/img/sun.svg" data-dark-src="template/img/moon.svg" alt="light theme" id="theme-selector" onclick="switchTheme(this)" width="30px" height="30px"></li>
                    <li><a href="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <script src="template/js/menu.js" onload="setupThemeIcon()"></script>
    <script src="template/js/jquery.js"></script>
    <script src="template/js/bootstrap.min.js"></script>
</body>

</html>