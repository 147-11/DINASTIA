<?php
function conn()
{
    //return mysqli_connect('localhost', 'root', 'root', 'bddinastia');
    return mysqli_connect('remotemysql.com','ltwVf9jGZs','8L6H07OoPV','ltwVf9jGZs');
}

$conn = conn();

//prodcuto1
$p1 = $_POST['p1'];
$imgp1 = $_FILES["ip1"];
$n_p1 = $imgp1["name"];
$tempp1 = $imgp1["tmp_name"];
$id_producto = $_POST['idp1'];

if ($p1 == 1) {
    $imagenp1 = "../img/categoria/ropa/" . $n_p1;
    $imgurlp1 = "img/categoria/ropa/" . $n_p1;
    if ($imgp1) {
        if (move_uploaded_file($tempp1, $imagenp1)) {
            echo "subida";
        } else {
            echo "no subio";
        };
        mysqli_query($conn, "UPDATE productos_page_r SET url_img_producto_r = '$imgurlp1' WHERE id_producto_r = '$id_producto'");
    };
};

if ($p1 == 2) {
    $imagenp1 = "../img/categoria/accesorios/" . $n_p1;
    $imgurlp1 = "img/categoria/accesorios/" . $n_p1;
    if ($imgp1) {
        if (move_uploaded_file($tempp1, $imagenp1)) {
            echo "subida";
        } else {
            echo "no subio";
        };

        mysqli_query($conn, "UPDATE productos_page_a SET url_img_producto_a = '$imgurlp1' WHERE id_producto_a = '$id_producto'");
    };
};
if ($p1 == 3) {
    $imagenp1 = "../img/categoria/patines/" . $n_p1;
    $imgurlp1 = "img/categoria/patines/" . $n_p1;
    if ($imgp1) {

        if (move_uploaded_file($tempp1, $imagenp1)) {
            echo "subida";
        } else {
            echo "no subio";
        };

        mysqli_query($conn, "UPDATE productos_page_p SET url_img_producto_p = '$imgurlp1' WHERE id_producto_p = '$id_producto'");
    };
};
