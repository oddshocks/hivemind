<?php

$user = "marcbrig";
$passwd = "katana08";
$hostname = "localhost";
$db = "marcbrig_hivemind";
$notes = $_POST['note'];
$title = $_POST['title'];

echo $notes;
$mysqli = new mysqli($hostname, $user, $passwd, $db)
		or die("Unable to connect to MySQL"); //Connect 
		
if(mysqli_connect_errno()) {
printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
$query = "INSERT INTO notes (content,title) VALUES ($notes,$title)";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
	
if($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			echo stripslashes($row['content']);	
		}
	}
	else {
		echo 'NO RESULTS';	
	}
mysqli_close($mysqli);
?>

