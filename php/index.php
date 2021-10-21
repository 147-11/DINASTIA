<?php
function conn(){
    return mysqli_connect('localhost','root','root','bddinastia');
}

$conn=conn();

    $tablas=array();

    $club_index="SELECT * FROM `club_index`";
    $club_index_r=mysqli_query($conn, $club_index);
    $club_index_mostrar=mysqli_fetch_assoc($club_index_r);
    array_push($tablas, $club_index_mostrar);
    

    $categorias_club_index_medio="SELECT * FROM `categorias_club_index`";
    $categorias_club_index_medio_r=mysqli_query($conn, $categorias_club_index_medio);
    while($categorias_club_index_inicia_mostrar=mysqli_fetch_assoc($categorias_club_index_medio_r)){
        array_push($tablas, $categorias_club_index_inicia_mostrar);};


    $productos_index="SELECT * FROM `productos_index`";
    $productos_index_r=mysqli_query($conn, $productos_index);
    $id_prod=0;
    while($productos_index_mostrar=mysqli_fetch_assoc($productos_index_r) ){
        array_push($tablas, $productos_index_mostrar);
    };

    $galeria="SELECT * FROM `galeria`";
    $galeria_r=mysqli_query($conn, $galeria); 
    while($galeria_mostrar=mysqli_fetch_assoc($galeria_r) ){ 
        array_push($tablas, $galeria_mostrar);
    };

    $footer="SELECT * FROM `footer`";
    $footer_r=mysqli_query($conn, $footer);
    while($footer_mostrar=mysqli_fetch_assoc($footer_r) ){
        array_push($tablas, $footer_mostrar); 
    };
    


    echo json_encode($tablas,JSON_UNESCAPED_SLASHES);
?>