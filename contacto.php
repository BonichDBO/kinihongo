<?php


$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];


$para = 'ezequieldbo22@hotmail.com';

$asunto = 'nuevo mensaje de $nombre';

$mensaje ="

    Nombre del remitente: '.$nombre.'
    correo: '.$email.'
    mensaje: '.$mensaje.'

";

email($para,$asunto,$mensaje);

header("location: formulario.html");


 ?>
