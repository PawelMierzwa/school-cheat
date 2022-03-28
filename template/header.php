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
                    <li><a href="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
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
            left: '32px', // default: 'unset'
            time: '0.4s', // default: '0.3s'
            mixColor: '#fff', // default: '#fff'
            backgroundColor: '#e0e0e0',  // default: '#fff'
            buttonColorDark: '#100f2c',  // default: '#100f2c'
            buttonColorLight: '#fff', // default: '#fff'
            saveInCookies: true, // default: true,
            label: '🌓', // default: ''
            autoMatchOsTheme: true // default: true
        }

        function addDarkmodeWidget() {
            new Darkmode().showWidget();
        }
        window.addEventListener('load', addDarkmodeWidget);
    </script>
</body>

</html>