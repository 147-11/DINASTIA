<?php
function conn(){
    return mysqli_connect('localhost','root','root','bddinastia');
}

$conn=conn();

    $tablas=array();

    $productos_pagetitulo="SELECT * FROM `categorias_productos` WHERE id_categoria_productos = 1";
    $productos_pagetitulo_r=mysqli_query($conn, $productos_pagetitulo);
    while($productos_pagetitulo_mostrar=mysqli_fetch_assoc($productos_pagetitulo_r)){
        array_push($tablas, $productos_pagetitulo_mostrar); 
    };

    $productos_page="SELECT * FROM `productos_page` WHERE categoria_producto = 1";
    $productos_page_r=mysqli_query($conn, $productos_page);
    while($productos_page_mostrar=mysqli_fetch_assoc($productos_page_r)){
        array_push($tablas, $productos_page_mostrar); 
    };

    $productos_pagetituloa="SELECT * FROM `categorias_productos` WHERE id_categoria_productos = 2";
    $productos_pagetituloa_r=mysqli_query($conn, $productos_pagetituloa);
    while($productos_pagetituloa_mostrar=mysqli_fetch_assoc($productos_pagetituloa_r)){
        array_push($tablas, $productos_pagetituloa_mostrar); 
    };

    $productos_pagea="SELECT * FROM `productos_page` WHERE categoria_producto = 2";
    $productos_pagea_r=mysqli_query($conn, $productos_pagea);
    while($productos_pagea_mostrar=mysqli_fetch_assoc($productos_pagea_r)){
        array_push($tablas, $productos_pagea_mostrar); 
    };

    $productos_pagetitulop="SELECT * FROM `categorias_productos` WHERE id_categoria_productos = 3";
    $productos_pagetitulop_r=mysqli_query($conn, $productos_pagetitulop);
    while($productos_pagetitulop_mostrar=mysqli_fetch_assoc($productos_pagetitulop_r)){
        array_push($tablas, $productos_pagetitulop_mostrar); 
    };

    $productos_pagep="SELECT * FROM `productos_page` WHERE categoria_producto = 3";
    $productos_pagep_r=mysqli_query($conn, $productos_pagep);
    while($productos_pagep_mostrar=mysqli_fetch_assoc($productos_pagep_r)){
        array_push($tablas, $productos_pagep_mostrar); 
    };


    echo json_encode($tablas,JSON_UNESCAPED_SLASHES);

?>