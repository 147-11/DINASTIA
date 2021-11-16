<?php
function conn()
{
    return mysqli_connect('localhost', 'root', 'root', 'bddinastia');
}

$conn = conn();

//prodcuto1
$p1 = $_POST['p1'];

$nombre_producto = $_POST['tp1'];
$precio_producto = $_POST['pp1'];
$descripcion_producto = $_POST['dp1'];
$id_producto = $_POST['ip1'];

if ($p1 == 1) {
    if ($nombre_producto != null) {
        mysqli_query($conn, "UPDATE productos_page_r set nombre_producto_r ='$nombre_producto' WHERE id_producto_r = '$id_producto'");
    }
    if ($precio_producto != null) {
        mysqli_query($conn, "UPDATE productos_page_r set precio_producto_r ='$precio_producto' WHERE id_producto_r = '$id_producto'");
    }
    if ($descripcion_producto != null) {
        mysqli_query($conn, "UPDATE productos_page_r set descripcion_producto_r ='$descripcion_producto' WHERE id_producto_r = '$id_producto'");
    }
}

if ($p1 == 2) {
    if ($nombre_producto) {
        mysqli_query($conn, "UPDATE productos_page_a set nombre_producto_a ='$nombre_producto' WHERE id_producto_a = '$id_producto'");
    }
    if ($precio_producto) {
        mysqli_query($conn, "UPDATE productos_page_a set precio_producto_a ='$precio_producto' WHERE id_producto_a = '$id_producto'");
    }
    if ($descripcion_producto) {
        mysqli_query($conn, "UPDATE productos_page_a set descripcion_producto_a ='$descripcion_producto' WHERE id_producto_a = '$id_producto'");
    }
}

if ($p1 == 3) {
    if ($nombre_producto) {
        mysqli_query($conn, "UPDATE productos_page_p set nombre_producto_p ='$nombre_producto' WHERE id_producto_p = '$id_producto'");
    }
    if ($precio_producto) {
        mysqli_query($conn, "UPDATE productos_page_p set precio_producto_p ='$precio_producto' WHERE id_producto_p = '$id_producto'");
    }
    if ($descripcion_producto) {
        mysqli_query($conn, "UPDATE productos_page_p set descripcion_producto_p ='$descripcion_producto' WHERE id_producto_p = '$id_producto'");
    }
}
/*
//prodcuto2
$nombre_producto = $_POST['tp2'];
$precio_producto = $_POST['pp2'];
$descripcion_producto = $_POST['dp2'];

if ($nombre_producto != null) {
    mysqli_query($conn, "UPDATE productos_page set nombre_producto ='$nombre_producto' WHERE productos_page.categoria_producto = 2");
}
if ($precio_producto != null) {
    mysqli_query($conn, "UPDATE productos_page set precio_producto ='$precio_producto' WHERE productos_page.categoria_producto = 2");
}
if ($descripcion_producto != null) {
    mysqli_query($conn, "UPDATE productos_page set descripcion_producto ='$descripcion_producto' WHERE productos_page.categoria_producto = 2");
}


//prodcuto3
$nombre_producto = $_POST['tp3'];
$precio_producto = $_POST['pp3'];
$descripcion_producto = $_POST['dp3'];

if ($nombre_producto != null) {
    mysqli_query($conn, "UPDATE productos_page set nombre_producto ='$nombre_producto' WHERE productos_page.categoria_producto = 3");
}
if ($precio_producto != null) {
    mysqli_query($conn, "UPDATE productos_page set precio_producto ='$precio_producto' WHERE productos_page.categoria_producto = 3");
}
if ($descripcion_producto != null) {
    mysqli_query($conn, "UPDATE productos_page set descripcion_producto ='$descripcion_producto' WHERE productos_page.categoria_producto = 3");
}


//prodcuto4
$nombre_producto = $_POST['tp4'];
$precio_producto = $_POST['pp4'];
$descripcion_producto = $_POST['dp4'];

if ($nombre_producto != null) {
    mysqli_query($conn, "UPDATE productos_page set nombre_producto ='$nombre_producto' WHERE productos_page.categoria_producto = 1");
}
if ($precio_producto != null) {
    mysqli_query($conn, "UPDATE productos_page set precio_producto ='$precio_producto' WHERE productos_page.categoria_producto = 1");
}
if ($descripcion_producto != null) {
    mysqli_query($conn, "UPDATE productos_page set descripcion_producto ='$descripcion_producto' WHERE productos_page.categoria_producto = 1");
}
