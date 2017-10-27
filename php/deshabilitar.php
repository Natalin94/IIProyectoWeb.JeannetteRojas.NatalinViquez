<?php
//error_reporting(0);
// Las vaiables en php se designan con signo de dolar

$user="postgres";
$password= "12345";
$dbname="Fifa_world_cup";
$port= "5432";
$host= "localhost";

$strconn= "host=$host port=$port user=$user password=$password dbname=$dbname ";
        
$conn = pg_connect($strconn) or die('{"estado":0}');


$tipo= $_REQUEST["tipo"];

if($tipo=="insertar")
{
	$country= $_REQUEST["country"];
	$confederation=$_REQUEST["confederation"];
	$points= $_REQUEST["points"];
	$flag= $_REQUEST["flag"];
	$state = $_REQUEST[true];

	$query= "update teams set state = false where country='$country'";

	$results= pg_query( $conn,$query) or die('{"estado":0}');

	echo '1';
}

pg_close($conn);