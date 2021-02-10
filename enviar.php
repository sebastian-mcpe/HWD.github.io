<?php
//campos

$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['e-mail'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

//datos del correo

$destinatario = 'horizon010203@gmail.com';

//texto

$carta = 'De: $nombre \n';
$carta .= 'Correo: $correo\n';
$carta .= 'Telefono: $telefono\n';
$carta .= 'Asunto: $asunto\n';
$carta .= 'Mensaje: $mensaje';

//enviar mensaje

mail($destinatario, $asunto, $carta);
header('location:mensaje.html')
?>