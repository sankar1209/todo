<?php
	
$host = "localhost";
$username = "root";
$password = 'nyros@123*';
$database_name = 'test';

$mysqli = new mysqli($host,$username,$password,$database_name);
if ($mysqli->connect_errno) {
	echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}


?>
