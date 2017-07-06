<html>
<body>

	<p>
		User Name : <?php echo $_GET["username"]; ?> <br />
	</p>
	<p>
		Email : <?php echo $_GET["email"]; ?> <br />
	</p>
	<p>
		Website : <?php echo $_GET["website"]; ?> <br />
	</p>
	<p>
		Comments : <?php echo $_GET["comments"]; ?> <br />
	</p>
	
	<p>
		Gender : 
		<?php
			if($_GET["gender"] == 1){
				echo " Female " ;
			}
			else{
				echo " Male ";
			}
		?>
	</p>
</body>
</html>