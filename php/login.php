<?php
function conn(){
    return mysqli_connect('localhost','root','root','bddinastia');
}

$conn=conn();

    $tablas=array();

    $login="SELECT * FROM `login`";
    $login_r=mysqli_query($conn, $login);
    while($login_mostrar=mysqli_fetch_assoc($login_r)){
        array_push($tablas, $login_mostrar); 
    };

    echo json_encode($tablas,JSON_UNESCAPED_SLASHES);

?>