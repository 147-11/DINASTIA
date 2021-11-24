<?php
function conn(){
    //return mysqli_connect('localhost','root','root','bddinastia');
    return mysqli_connect('remotemysql.com','ltwVf9jGZs','8L6H07OoPV','ltwVf9jGZs');
}

$conn=conn();

    $tablas=array();

    $productos_pagetitulop="SELECT * FROM `categorias_productos` WHERE id_categoria_productos = 3";
    $productos_pagetitulop_r=mysqli_query($conn, $productos_pagetitulop);
    while($productos_pagetitulop_mostrar=mysqli_fetch_assoc($productos_pagetitulop_r)){
        array_push($tablas, $productos_pagetitulop_mostrar); 
    };

    $productos_pagep="SELECT * FROM `productos_page_p`";
    $productos_pagep_r=mysqli_query($conn, $productos_pagep);
    while($productos_pagep_mostrar=mysqli_fetch_assoc($productos_pagep_r)){
        array_push($tablas, $productos_pagep_mostrar); 
    };


    echo json_encode($tablas,JSON_UNESCAPED_SLASHES);

?>