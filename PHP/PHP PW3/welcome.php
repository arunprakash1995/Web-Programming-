<html>
<head></head>
<body>
<?php
session_start();
   if((!isset($_SESSION['WUserName']))) {
    header('Location: login.html');
   exit();
}
else
{    
	echo " UserName:",$_SESSION['WUserName']."<br>";
    	echo " FullName:",$_SESSION['WFullName']."<br>";
    	echo '<img src="PW8/img/'.$_SESSION['Wavatar'].'"/>'; 	
	}
?>
</body>
</html>