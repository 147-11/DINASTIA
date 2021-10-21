<?php
function conn(){
    return mysqli_connect('localhost','root','root','bddinastia');
}

$conn=conn();

    $tablas=array();

    $club_page="SELECT * FROM `club_page`";
    $club_page_r=mysqli_query($conn, $club_page);
    $id_mision=0;
    while($club_page_mostrar=mysqli_fetch_assoc($club_page_r)){ 
        array_push($tablas, $club_page_mostrar);  
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