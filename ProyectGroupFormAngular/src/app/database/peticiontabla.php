<?php
//conectar a la bd
include("conexion.php");
//configuracion de envio de la base de datos
header("Access-Control-Allow-Origin: *");
header("Content-type: aplication/json");
//variable que contendra la respuesta
$dataUser = array();
//peticion bd
$codePeticion = "SELECT * FROM users";
$peticion = $conexion -> query($codePeticion);
//verificar que haya mas de una tabla (significa que hay datos)
if($peticion -> num_rows >= 1) {
  //cada registro de la tabla se almacenara
  while($data = $peticion -> fetch_assoc()) {
    $dataUser[] = $data;
  }
} else {
  //caso contrario devolvera un null
  $dataUser[] = null;
}
//enviar datos json a Angular
echo json_encode($dataUser);
exit();
?>