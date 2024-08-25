<?php
//incluyo conexion
include("connexion.php");

//tomo valor de la URL
$id = $_REQUEST["id"];

//Valor de retorno
$isDelete = false;

//Texto para mysql
$textBD = "DELETE FROM usuarios WHERE id = $id;";
//preparo la conexion
$getuser = $connectBd->prepare($textBD);
//ejecuto y verifico que sea valido para modificar el valor de retorno
if($getuser->execute()) {
  $isDelete = true;
}
echo $isDelete;
