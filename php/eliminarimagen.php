<?php
function conn()
{
    return mysqli_connect('localhost', 'root', 'root', 'bddinastia');
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