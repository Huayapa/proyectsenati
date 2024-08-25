<?php
//incluyo conexion
include("connexion.php");
//tomo valor de la URL
$id = $_REQUEST["id"];
//Texto para mysql
$textBD = "SELECT id, name, apellidos FROM usuarios WHERE id = $id";
//preparo la conexion con la solicitud
$getuser = $connectBd->prepare($textBD);
//arreglo para almacenar los datos que retornara
$datosUser = array();
//ejecuto y verifico que sea valido
if($getuser->execute()) {
  //la fila se guardara en el arreglo y solicitaremos que solo nos envien los valores de la tabla y no por el indice
  while($row = $getuser->fetch(PDO::FETCH_ASSOC)) {
    $datosUser[] = $row;
  }
}
//Envio del primer usuario
echo json_encode($datosUser[0]);
