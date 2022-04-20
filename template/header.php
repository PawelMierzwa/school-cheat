<html>

<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
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
                <a class="navbar-brand" href="/">Sigma Tools</a>
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
                                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="/calc">Matma<span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="/calc">Kalkulator</a></li>
                                            <li><a href="/wzory">Wzory</a></li>
                                            <li><a href="/wykres">Wykresy</a></li>
                                        </ul>
                                    </li>
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
                                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="/calc">Matma<span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="/calc">Kalkulator</a></li>
                                            <li><a href="/wzory">Wzory</a></li>
                                            <li><a href="/wykres">Wykresy</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/about">About</a></li>
                                </ul>
                            ';
                        break;
                    case '/calc':
                        echo '
                                <ul class="nav navbar-nav">
                                    <li><a href="/">Home</a></li>
                                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="/foliage">Sieci<span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="/foliage">Kalkulator IP</a></li>
                                            <li><a href="/pojecia">Pojęcia</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown active"><a class="dropdown-toggle" data-toggle="dropdown" href="/calc">Matma<span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li class="active"><a href="/calc">Kalkulator</a></li>
                                            <li><a href="/wzory">Wzory</a></li>
                                            <li><a href="/wykres">Wykresy</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/about">About</a></li>
                                </ul>
                            ';
                        break;
                    case '/wzory':
                            echo '
                                    <ul class="nav navbar-nav">
                                        <li><a href="/">Home</a></li>
                                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="/foliage">Sieci<span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/foliage">Kalkulator IP</a></li>
                                                <li><a href="/pojecia">Pojęcia</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown active"><a class="dropdown-toggle" data-toggle="dropdown" href="/calc">Matma<span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/calc">Kalkulator</a></li>
                                                <li class="active"><a href="/wzory">Wzory</a></li>
                                                <li><a href="/wykres">Wykresy</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/about">About</a></li>
                                    </ul>
                                ';
                            break;
                        case '/wykres':
                                echo '
                                        <ul class="nav navbar-nav">
                                            <li><a href="/">Home</a></li>
                                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="/foliage">Sieci<span class="caret"></span></a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="/foliage">Kalkulator IP</a></li>
                                                    <li><a href="/pojecia">Pojęcia</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="/wzory">Matma<span class="caret"></span></a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="/calc">Kalkulator</a></li>
                                                    <li><a href="/wzory">Wzory</a></li>
                                                    <li class="active"><a href="/wykres">Wykresy</a></li>
                                                </ul>
                                            </li>
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
                                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="/calc">Matma<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="/calc">Kalkulator</a></li>
                                        <li><a href="/wzory">Wzory</a></li>
                                        <li><a href="/wykres">Wykresy</a></li>
                                    </ul>
                                    </li>
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
                                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="/calc">Matma<span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="/calc">Kalkulator</a></li>
                                            <li><a href="/wzory">Wzory</a></li>
                                            <li><a href="/wykres">Wykresy</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/about">About</a></li>
                                </ul>
                            ';
                        break;
                }
                ?>
                <ul class="nav navbar-nav navbar-right">
                    <?php
                        if(empty($_SESSION['id'])){
                            echo '
                            <li><a href="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                            ';
                        }
                        else{
                            echo '
                            <li><a href="/cabinet/logout"><span class="glyphicon glyphicon-user"></span> Logout</a></li>
                            ';
                        }
                    ?>
                </ul>
            </div>
        </div>
    </nav>

    <script src="template/js/jquery.js"></script>
    <script src="template/js/bootstrap.min.js"></script>
    <script src="template/js/darkmode-js.min.js"></script>
    <script>
        const options = {
            bottom: '64px', // default: '32px'
            right: 'unset', // default: '32px'
            left: '64px', // default: 'unset'
            time: '0.5s', // default: '0.3s'
            mixColor: '#e0e0e0', // default: '#fff'
            backgroundColor: '#e0e0e0',  // default: '#fff'
            // backgroundColorDark: '#1f1f1f',
            buttonColorDark: '#100f2c',  // default: '#100f2c'
            buttonColorLight: '#fff', // default: '#fff'
            saveInCookies: true, // default: true,
            label: '🌓', // default: ''
            autoMatchOsTheme: true // default: true
        }

        function addDarkmodeWidget() {
            new Darkmode(options).showWidget();
        }
        window.addEventListener('load', addDarkmodeWidget);
    </script>
</body>

</html>
