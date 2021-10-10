<?php
$servername = 'localhost';
$username = 'root';
$password = 'root';
$db = 'bddinastia';
$port = 3306;


// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    echo "<p> error al acceder al servidor </p>";
    die("Connection failed: " . $conn->connect_error);
}
if (!mysqli_select_db($conn, $db))
{
    echo "<p> class='error'>- error al acceder a la base de datos </p>";
    die("Connection failed: ");
}
?>

                        
                        
