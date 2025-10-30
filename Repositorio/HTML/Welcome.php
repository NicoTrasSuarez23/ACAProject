<?php
// Datos de conexión
$servername = "localhost:3306";
$username = "root";  // Usuario por defecto de XAMPP
$password = "";      // Sin contraseña por defecto
$dbname = "contacto_db";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Recibir los datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$codigo = $_POST['codigo'];
$telefono = $_POST['telefono'];
$dudas = $_POST['dudas'];

// Insertar los datos en la tabla
$sql = "INSERT INTO contactos (nombre, apellido, email, codigo, telefono, dudas)
        VALUES ('$nombre', '$apellido', '$email', '$codigo', '$telefono', '$dudas')";

if ($conn->query($sql) === TRUE) {
    echo "<h2>✅ Gracias por contactarte, $nombre $apellido.</h2>";
    echo "<p>Hemos recibido tu mensaje y te responderemos pronto.</p>";
} else {
    echo "❌ Error al guardar los datos: " . $conn->error;
}

// Cerrar conexión
$conn->close();
?>