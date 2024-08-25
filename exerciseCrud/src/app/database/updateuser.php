<?php
//incluyo conexion
include("connexion.php");
//tomo valor de la URL
$id = $_REQUEST["id"];
//Tomo los valores pasados como parametro en el http del angular y los defino en una variable
$jsoncode = json_decode(file_get_contents("php://input"), true);
$name = $jsoncode["name"];
$apellidos = $jsoncode["apellidos"];
//valor de retorno para saber si fue actualizado sus valores
$isUpdate = false;
//verficar que no esten vacio los parametros que envio angular
if($name != "" && $apellidos != "") {
  //Texto para mysql
  $textBD = "UPDATE usuarios SET name = '$name', apellidos = '$apellidos' WHERE id = $id";
  //preparo la conexion
  $getuser = $connectBd->prepare($textBD);
  //ejecuta y verifica que haya salido bien
  if($getuser->execute()) {
    $isUpdate = true;
  }
}

echo $isUpdate;
