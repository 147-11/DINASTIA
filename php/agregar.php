<?php
function conn()
{
    return mysqli_connect('localhost', 'root', 'root', 'bddinastia');
}

$conn = conn();

//prodcuto1
//$p1 = $_POST['p1'];

$nombre = $_POST['name'];
$precio = $_POST['price'];
$descripcion = $_POST['description'];
//$id_producto = $_POST['ip1'];

//if ($p1 == 1) {
    //if ($nombre ==1) {
        $ruta = "INSERT INTO productos_page_r (id_producto_r,nombre_producto_r, precio_producto_r, descripcion_producto_r,url_img_producto_r) VALUES ('5','$nombre','$precio','$descirpcion','img/architecture-2893844_1920.jpg')";
        if(mysqli_query($conn, $ruta)){
            echo("se subió");
        }else{
            echo("no lo subió");
        }
    //}
//}


?>