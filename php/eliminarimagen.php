<?php
function conn()
{
    //return mysqli_connect('localhost', 'root', 'root', 'bddinastia');
    return mysqli_connect('remotemysql.com','ltwVf9jGZs','8L6H07OoPV','ltwVf9jGZs');
}

$conn = conn();

//prodcuto1
$p1 = $_POST['p1'];
$id_producto = $_POST['idp1'];


if ($p1 == 1) {
        
        echo("$id_producto");
};

if ($p1 == 2) {
    
        echo("eliminado");
};
if ($p1 == 3) {
    
    echo("eliminado");
};

?>