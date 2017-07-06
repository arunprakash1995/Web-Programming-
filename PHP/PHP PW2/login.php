<?php
session_start();

$name = $_GET['name'];
$username = $_GET['username'];
$password = $_GET['password'];

if ($_SERVER["REQUEST_METHOD"] == "GET") {
	if(empty($name) || empty($username) || empty($password))
		{
	  		header('Location: login.html');
	  		exit();		}
	else{	
		$_SESSION['sess_username'] = $username;
		$_SESSION['sess_name'] = $name;
		header('Location: welcome.php');
	}
}
?>
	