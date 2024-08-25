<?php
//creo conexion a la base de datos
$host = "localhost";
$dbname = "users";
$user = "root";
$password = "";
//manejo de errores para saber si la conexion fue exitosa o no (use el PDO)
try {
  $connectBd = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
  if(!$connectBd) return new ErrorException("no se conecto la base de datos");
} catch(PDOException $err) {
  echo "Error: ". $err->getMessage(). "<br>";
  die();
}
//Solucionar problemas de CORS (este metodo no recomendable en producción)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
?>