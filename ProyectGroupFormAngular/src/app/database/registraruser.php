<?php
//conexion base de datos
include("conexion.php");
//configuracion de envio de la base de datos
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
//datos del formulario registro de angular
$datosPost = json_decode(file_get_contents('php://input'), true); //manera para transmitir el contenido de un fichero a una cadena.
$fechaRegister = date("Y-m-d"); //obtener horario de registro
//variable para saber si el registro es exitoso
$IsRegister = 0;
//peticion bd
$IsExistUser = "SELECT * FROM users WHERE useremail = '$datosPost[email]' AND userpass = '$datosPost[password]'";
$peticion = $conexion -> query($IsExistUser);
//verificar que haya una tabla almenos
if($peticion -> num_rows <= 0) {
  //Si no existe un correo y contraseña igual, entonces se insertaran lo datos
  $RegisterUserCode = "INSERT INTO users VALUES ('', '$datosPost[name]', '$datosPost[lastname]', '$datosPost[email]', '$datosPost[password]', '$fechaRegister')";
  if(mysqli_query($conexion, $RegisterUserCode)) {
    $IsRegister = 1;
  }
}
//devolvera un 0 y 1 (como un booleano)
echo $IsRegister;
exit();
?>