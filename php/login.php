<?php
function conn(){
    return mysqli_connect('localhost','root','root','bddinastia');
}

$conn=conn();

$usuario = "DinastíaClubFP";//$_POST['u'];
$clave = "*Dinastiaclub21*";//$_POST['c'];


    $tablas=array();
    $login="SELECT id_login FROM `login`";
    $login_r=mysqli_query($conn, $login);
    while($login_mostrar=mysqli_fetch_assoc($login_r)){
        $tablas= $login_mostrar;   
    };

    $u=$tablas[1];
    if ($tablas[1]==$usuario){
        $a= 1;
    }else{
        $a=0;
    };


    echo json_encode($u,JSON_UNESCAPED_SLASHES);

?>