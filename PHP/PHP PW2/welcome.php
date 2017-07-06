<?php
session_start();

if(!isset($_SESSION['sess_username']) || !isset($_SESSION['sess_name']) || (trim($_SESSION['sess_username'])=="") || (trim($_SESSION['sess_name'])=="")){

	header('Location: login.html');
	exit();
}
?>
<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Welcome Page</title>
</head>
<body>
	<h1>Welcome</h1>
	<p>
	<h4> Name : <?php echo $_SESSION['sess_name'] ?><h4>
	</p>
	<p>
	<h4> Username : <?php echo $_SESSION['sess_username'] ?></h4>
	</p>
</body>
</html>