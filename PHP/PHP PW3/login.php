<?php
session_start();
$username= "";
$password= "";
$fullname="";
$avatar="";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$valid = false;
	
    if (empty($_POST["UserName"])|| empty($_POST["Password"])) {
		 $valid=true;
    }
    else {
	 
        $username = $_POST["UserName"];
		$password = $_POST["Password"];

	$conn = new mysqli("localhost","root","root","PW8");
	
	if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
	} 
	
	$sql = "SELECT * FROM Users where username= '".$username."'and password='".$password."'";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
    	while($row = $result->fetch_assoc()) {
		$username=$row["username"];
		$fullname=$row["fullname"];
		$avatar=$row["avatar"];
    	}
   	} 
	else{
		header('Location: login.html');
		exit();
	}
  }
    if($valid){
   header('Location: login.html');
   exit();
  }
    $_SESSION["WUserName"] =$username;
    $_SESSION["WFullName"] =$fullname;
	$_SESSION["Wavatar"] =$avatar;
    header('Location: welcome.php');
    exit();
 }
?>