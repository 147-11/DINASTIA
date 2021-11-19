<?php
function conn(){
    return mysqli_connect('localhost','root','root','bddinastia');
}

$conn=conn();

    $tablas=array();

    $productos_pagetituloa="SELECT * FROM `categorias_productos` WHERE id_categoria_productos = 2";
    $productos_pagetituloa_r=mysqli_query($conn, $productos_pagetituloa);
    while($productos_pagetituloa_mostrar=mysqli_fetch_assoc($productos_pagetituloa_r)){
        array_push($tablas, $productos_pagetituloa_mostrar); 
    };

    $productos_pagea="SELECT * FROM `productos_page_a`";
    $productos_pagea_r=mysqli_query($conn, $productos_pagea);
    while($productos_pagea_mostrar=mysqli_fetch_assoc($productos_pagea_r)){
        array_push($tablas, $productos_pagea_mostrar); 
    };

    echo json_encode($tablas,JSON_UNESCAPED_SLASHES);

?>