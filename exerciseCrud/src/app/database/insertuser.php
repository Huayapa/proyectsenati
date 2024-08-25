<?php
//incluyo conexion
include("connexion.php");
//Tomo los valores pasados como parametro en el http del angular y los defino en una variable
$jsoncode = json_decode(file_get_contents("php://input"), true);
$name = $jsoncode["name"];
$apellidos = $jsoncode["apellidos"];
//valor de retorno para saber si fue actualizado sus valores
$isAddUser = false;

//verficar que no esten vacio los parametros que envio angular
if($name != "" && $apellidos != "") {
  //Texto para mysql
  $textBD = "INSERT INTO usuarios (id, name, apellidos) VALUES (NULL, '$name', '$apellidos');";
  //preparo la conexion
  $getuser = $connectBd->prepare($textBD);
  //ejecuta y verifica que haya salido bien
  if($getuser->execute()) {
    $isAddUser = true;
  }
}

echo $isAddUser;
