<?php
  //datos
  $domineServer = "localhost";
  $user = "root";
  $bd = "listuser";
  $password = "";
  //conectar
  $conexion = mysqli_connect($domineServer, $user, $password,$bd);
  $conexion -> set_charset("utf8");
  //verificar conexion
  if(!$conexion) {
    mysqli_connect_error("Error con la base de datos");
  }
?>