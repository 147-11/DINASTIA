<?php
function conn(){
    return mysqli_connect('localhost','root','root','bddinastia');
}

$conn=conn();

    $tablas=array();

    $footer="SELECT * FROM `footer`";
    $footer_r=mysqli_query($conn, $footer);
    while($footer_mostrar=mysqli_fetch_assoc($footer_r) ){
        array_push($tablas, $footer_mostrar); 
    };
    


    echo json_encode($tablas,JSON_UNESCAPED_SLASHES);

?>