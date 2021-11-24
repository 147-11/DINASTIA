<?php
function conn(){
    //return mysqli_connect('localhost','root','root','bddinastia');
    return mysqli_connect('remotemysql.com','ltwVf9jGZs','8L6H07OoPV','ltwVf9jGZs');
}

$conn=conn();

    $tablas=array();

    $productos_pagetitulo="SELECT * FROM `categorias_productos` WHERE id_categoria_productos = 1";
    $productos_pagetitulo_r=mysqli_query($conn, $productos_pagetitulo);
    while($productos_pagetitulo_mostrar=mysqli_fetch_assoc($productos_pagetitulo_r)){
        array_push($tablas, $productos_pagetitulo_mostrar); 
    };

    $productos_page="SELECT * FROM `productos_page_r`";
    $productos_page_r=mysqli_query($conn, $productos_page);
    while($productos_page_mostrar=mysqli_fetch_assoc($productos_page_r)){
        array_push($tablas, $productos_page_mostrar); 
    };

    echo json_encode($tablas,JSON_UNESCAPED_SLASHES);

?>