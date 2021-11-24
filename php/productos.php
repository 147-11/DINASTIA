<?php
function conn(){
    //return mysqli_connect('localhost','root','root','bddinastia');
    return mysqli_connect('remotemysql.com','ltwVf9jGZs','8L6H07OoPV','ltwVf9jGZs');
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