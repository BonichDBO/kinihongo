<?php


$nombre = $_POST['nombre'];
$email = $_POST['mail'];
$mensaje = $_POST['mensaje'];


$para = 'ezequieldbo22@hotmail.com';

$asunto = 'nuevo mensaje de $nombre';

$mensaje ="

    Nombre del remitente: '.$nombre.'
    correo: '.$email.'
    mensaje: '.$mensaje.'

";

email($para,$asunto,uft8_decode($mensaje));

header("location: formulario.html");


 ?>
