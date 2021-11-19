<?php
function conn()
{
    return mysqli_connect('localhost', 'root', 'root', 'bddinastia');
}

$conn = conn();

//prodcuto1
$p1 = $_POST['p1'];
$id_producto = $_POST['ip1'];
$count = $_POST['count'];

if ($p1 == 1) {
    if ($id_producto > 4) {
        //imagen
        $urloldp1 = mysqli_query($conn, "SELECT url_img_producto_r FROM productos_page_r WHERE id_producto_r = '$id_producto'");
        while ($up1 = mysqli_fetch_array($urloldp1)) {
            unlink("../" . $up1['url_img_producto_r']);
        }

        $ruta = "DELETE FROM productos_page_r WHERE id_producto_r = '$id_producto'";
        if (mysqli_query($conn, $ruta)) {
            echo ("eliminado");
        } else {
            echo ("no se eliminó");
        }
        if ($id_producto < ($count - 1)) {
            echo ("entro al if");
            for ($i = $id_producto; $i < ($count - 1); $i++) {
                $cont = $i + 1;
                mysqli_query($conn, "UPDATE productos_page_r SET id_producto_r = '$i' WHERE id_producto_r = '$cont'");
            }
        }
    }
}
if ($p1 == 2) {
    if ($id_producto > 4) {
        //imagen
        $urloldp1 = mysqli_query($conn, "SELECT url_img_producto_a FROM productos_page_a WHERE id_producto_a = '$id_producto'");
        while ($up1 = mysqli_fetch_array($urloldp1)) {
            unlink("../" . $up1['url_img_producto_a']);
        }


        $ruta = "DELETE FROM productos_page_a WHERE id_producto_a = '$id_producto'";
        if (mysqli_query($conn, $ruta)) {
            echo ("eliminado");
        } else {
            echo ("no se eliminó");
        }
        for ($i = $id_producto; $i < ($count - 1); $i++) {
            $cont = $i + 1;
            mysqli_query($conn, "UPDATE productos_page_a SET id_producto_a = '$i' WHERE id_producto_a = '$cont'");
        }
    }
}
if ($p1 == 3) {
    if ($id_producto > 4) {
        //imagen
        $urloldp1 = mysqli_query($conn, "SELECT url_img_producto_p FROM productos_page_p WHERE id_producto_p = '$id_producto'");
        while ($up1 = mysqli_fetch_array($urloldp1)) {
            unlink("../" . $up1['url_img_producto_p']);
        }


        $ruta = "DELETE FROM productos_page_p WHERE id_producto_p = '$id_producto'";
        if (mysqli_query($conn, $ruta)) {
            echo ("eliminado");
        } else {
            echo ("no se eliminó");
        }
        for ($i = $id_producto; $i < ($count - 1); $i++) {
            $cont = $i + 1;
            mysqli_query($conn, "UPDATE productos_page_p SET id_producto_p = '$i' WHERE id_producto_p = '$cont'");
        }
    }
}
