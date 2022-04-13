<?php

$dir = 'template/';
$user = 'functions/user/';
$cabinet = 'functions/cabinet/';

$file = $_SERVER['REQUEST_URI'];
$file = pathinfo($file, PATHINFO_FILENAME);

switch($file){
	case 'register':
		include $user.'reg.php';
		break;
	case 'recover':
		include $user.'recover.php';
		break;
	case 'login':
		include $user.'index.php';
		break;
    case '':
        include $dir.'index.html';
        break;
    case 'cabinet':
        include $cabinet.'cabinet.php';
        break;
    default:
        if (file_exists($dir.$file.'.html')) {
            include $dir.$file.'.html';
        }
        else {
            if(file_exists($dir.$file.'.php')){
                include $dir.$file.'.php';
            }
            else{
                $file1 = substr($file,0,8);
                $search = substr($file,19,strlen($file));
                if($file1=="pojecia?"){
                    header('Location: pojecia#'.$search);
                }
                else{
                    include 'error.php';
                }
            }
        }
        break;
}
?>