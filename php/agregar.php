<?php
function conn()
{
    return mysqli_connect('localhost', 'root', 'root', 'bddinastia');
}

$conn = conn();

//prodcuto1
$p1 = $_POST['p1'];

$nombre = $_POST['name'];
$precio = $_POST['price'];
$descripcion = $_POST['description'];
$id_producto = $_POST['ip1'];

if ($p1 == 1) {
    if ($id_producto > 4) {
        $ruta = "INSERT INTO productos_page_r (id_producto_r, nombre_producto_r, precio_producto_r, descripcion_producto_r, url_img_producto_r) VALUES ('$id_producto','$nombre','$precio','$descripcion','img/rsinimagen.jpeg')";
        if(mysqli_query($conn, $ruta)){
            echo("se subió");
        }else{
            echo("no lo subió");
        }
    }
}
if ($p1 == 2) {
    if ($id_producto > 4) {
        $ruta = "INSERT INTO productos_page_a (id_producto_a, nombre_producto_a, precio_producto_a, descripcion_producto_a, url_img_producto_a) VALUES ('$id_producto','$nombre','$precio','$descripcion','img/asinimagen.jpeg')";
        if(mysqli_query($conn, $ruta)){
            echo("se subió");
        }else{
            echo("no lo subió");
        }
    }
}
if ($p1 == 3) {
    if ($id_producto > 4) {
        $ruta = "INSERT INTO productos_page_p (id_producto_p, nombre_producto_p, precio_producto_p, descripcion_producto_p, url_img_producto_p) VALUES ('$id_producto','$nombre','$precio','$descripcion','img/psinimagen.jpeg')";
        if(mysqli_query($conn, $ruta)){
            echo("se subió");
        }else{
            echo("no lo subió");
        }
    }
}


?>