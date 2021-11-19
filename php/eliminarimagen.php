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
        $urloldp1 = mysqli_query($conn, "SELECT url_img_producto_r FROM productos_page_r WHERE id_producto_r = '$id_producto'");
        while ($up1 = mysqli_fetch_array($urloldp1)) {
            unlink("../" . $up1['url_img_producto_r']);
        }
        echo("$id_producto");
};

if ($p1 == 2) {
    $urloldp1 = mysqli_query($conn, "SELECT url_img_producto_a FROM productos_page_a WHERE id_producto_a = '$id_producto'");
        while ($up1 = mysqli_fetch_array($urloldp1)) {
            unlink("../" . $up1['url_img_producto_a']);
        }
        echo("eliminado");
};
if ($p1 == 3) {
    $urloldp1 = mysqli_query($conn, "SELECT url_img_producto_p FROM productos_page_p WHERE id_producto_p = '$id_producto'");
    while ($up1 = mysqli_fetch_array($urloldp1)) {
        unlink("../" . $up1['url_img_producto_p']);
    }
    echo("eliminado");
};

?>