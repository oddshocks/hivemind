<?php
$action=$_REQUEST['takeNotes'];
$action1=$_REQUEST['notesTitle'];

// open DB connection
$con = mysql_connect("localhost","marcbrig","katana08");
if (!$con)
{ die('Could not connect: ' . mysql_error()); }

mysql_select_db("marcbrig_hivemind", $con);
mysql_query("INSERT INTO notes (title, content VALUES ('$takeNotes', '$notesTitle')");
print mysql_error();
mysql_close($con);
?>
