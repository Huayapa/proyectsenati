<?php
//conexion base de datos
include("conexion.php");
//configuracion de envio de la base de datos
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
//datos del formulario registro de angular
$datosPost = json_decode(file_get_contents('php://input'), true);
//Devolvera los datos de usuario
$dateRegister = array();
//Si no encuentra usuarios devolvera esto por defecto
$dateRegister[0] = 0;
$dateRegister[1] = null;
//peticion bd
$ObtenerUser = "SELECT * FROM users WHERE useremail = '$datosPost[email]' AND userpass = '$datosPost[password]'";
$peticion = $conexion -> query($ObtenerUser);
//verificar que haya una tabla almenos
if($peticion -> num_rows > 0) {
  $value = $peticion-> fetch_assoc();
  //obtener la tabla
  $dateRegister[0] = 1;
  $dateRegister[1] = $value;
}
//ejecutara un arreglo donde estara los valores y otro para saber si tuvo exito
echo json_encode($dateRegister);
exit();
?>