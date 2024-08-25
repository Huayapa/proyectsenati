<?php
//incluyo conexion
include("connexion.php");

//Texto para mysql
$textBD = 'SELECT * FROM usuarios';
//preparo la conexion con la solicitud
$getuser = $connectBd->prepare($textBD);
//ejecuto la peticion
$getuser->execute();
//arreglo para almacenar los datos que retornara
$datosUser = array();

//verificar que haya salido correcto
if($getuser) {
  //bucle de cada registro para almacenarlo
  while($row = $getuser->fetch()) {
    $datosUser[] = $row;
  }
}
//retornar el arreglo
echo json_encode($datosUser);
