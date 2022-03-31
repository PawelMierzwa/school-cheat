<?php
	function checkSession(){
		if (empty($_SESSION['login'])) {
			header('Location: /login');
		}
		$link = mysqli_connect("localhost","u722919_admin","ae3802aa","u722919_project");
		$result = mysqli_query($link, "SELECT username FROM jords WHERE username='$login'");
		$myrow = mysqli_fetch_array($result);
		if(empty($myrow['id'])){
			mysqli_query ($link, "INSERT INTO jords (username,amount) VALUES('$login','0')");
		}
	}
	function getName(){
		$login = $_SESSION['login'];
		return $login;
	}
	function getJords(){
		$login = getName();
		$link = mysqli_connect("localhost","u722919_admin","ae3802aa","u722919_project");
		$result = mysqli_query($link, "SELECT amount FROM jords WHERE username='$login'");
		$myrow = mysqli_fetch_array($result);

		$jords = $myrow['amount'];
		return $jords;
	}
	function getBill(){
		$bill;
		return $bill;
	}
	function getMail(){
		$login = getName();
		$link = mysqli_connect("localhost","u722919_admin","ae3802aa","u722919_project");
		$result = mysqli_query($link, "SELECT email FROM users WHERE username='$login'");
		$myrow = mysqli_fetch_array($result);
		$mail = $myrow['email'];
		if(empty($mail)){
			$mail = "Не подключена почта";
		}
		return $mail;
	}	
	function getPerm(){

		$string = getName();
	    $string = uuidFromString("OfflinePlayer:".$string);

		$link = mysqli_connect("localhost","u722919_admin","ae3802aa","u722919_project");
		$result = mysqli_query($link, "SELECT * FROM permissions_inheritance WHERE child='$string'");
		$row = mysqli_fetch_array($result);
		$parent = $row['parent'];
		$all = mysqli_query($link, "SELECT * FROM permissions WHERE name='$parent' && permission = 'prefix'");
		$donate = mysqli_fetch_array($all);
		$perm = $donate['value'];
		switch ($perm) {
			case '&f[&7Игрок&f]&7 ':
				$chars = ['&f[&7','&f]&7'];
				$str = str_replace($chars, '', $perm);
				break;
			case '&f[&aВип&f]&7 ':
				$chars = ['&f[&a','&f]&7'];
				$str = str_replace($chars, '', $perm);
				break;
			case '&f[&eПремиум&f]&7 ':
				$chars = ['&f[&e','&f]&7'];
				$str = str_replace($chars, '', $perm);
				break;
			case '&f[&bДелюкс&f]&7 ':
				$chars = ['&f[&b','&f]&7'];
				$str = str_replace($chars, '', $perm);
				break;
			case '&f[&dЛегенда&f]&7 ':
				$chars = ['&f[&d','&f]&7'];
				$str = str_replace($chars, '', $perm);
				break;
			case '&f[&3Лорд&f]&7 ':
				$chars = ['&f[&3','&f]&7'];
				$str = str_replace($chars, '', $perm);
				break;
			case '&f[&5Ультра&f]&7 ':
				$chars = ['&f[&5','&f]&7'];
				$str = str_replace($chars, '', $perm);
				break;
			case '&f[&2Пента&f]&7 ':
				$chars = ['&f[&2','&f]&7'];
				$str = str_replace($chars, '', $perm);
				break;
			case '&f[&6Мега&f]&7 ':
				$chars = ['&f[&6','&f]&7'];
				$str = str_replace($chars, '', $perm);
				break;
			case '&f[&c&lВладелец&f]&c ':
				$chars = ['&f[&c&l','&f]&c'];
				$str = str_replace($chars, '', $perm);
				break;
			default:
				$str = 'Ошибка';
				break;
		}
		return $str;
	}

	function uuidFromString($string) {
    $val = md5($string, true);
    $byte = array_values(unpack('C16', $val));
 
    $tLo = ($byte[0] << 24) | ($byte[1] << 16) | ($byte[2] << 8) | $byte[3];
    $tMi = ($byte[4] << 8) | $byte[5];
    $tHi = ($byte[6] << 8) | $byte[7];
    $csLo = $byte[9];
    $csHi = $byte[8] & 0x3f | (1 << 7);
 
    if (pack('L', 0x6162797A) == pack('N', 0x6162797A)) {
        $tLo = (($tLo & 0x000000ff) << 24) | (($tLo & 0x0000ff00) << 8) | (($tLo & 0x00ff0000) >> 8) | (($tLo & 0xff000000) >> 24);
        $tMi = (($tMi & 0x00ff) << 8) | (($tMi & 0xff00) >> 8);
        $tHi = (($tHi & 0x00ff) << 8) | (($tHi & 0xff00) >> 8);
    }
 
    $tHi &= 0x0fff;
    $tHi |= (3 << 12);
   
    $uuid = sprintf(
        '%08x-%04x-%04x-%02x%02x-%02x%02x%02x%02x%02x%02x',
        $tLo, $tMi, $tHi, $csHi, $csLo,
        $byte[10], $byte[11], $byte[12], $byte[13], $byte[14], $byte[15]
    );
    return $uuid;
}

?>
