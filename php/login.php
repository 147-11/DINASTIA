<?php
function conn(){
    //return mysqli_connect('localhost','root','root','bddinastia');
    return mysqli_connect('remotemysql.com','ltwVf9jGZs','8L6H07OoPV','ltwVf9jGZs');
}

$conn=conn();

$usuario = $_POST['u'];
$clave = $_POST['c'];


    $tablas=array();
    $login="SELECT * FROM `login`";
    $login_r=mysqli_query($conn, $login);
    while($login_mostrar=mysqli_fetch_assoc($login_r)){
        array_push($tablas, $login_mostrar);   
    };

    $u=$tablas[0];

    if ($u[user]==$usuario && $u[keyy]==$clave){
        $a= 1;
    }else{
        $a=0;
    };


    echo json_encode($a,JSON_UNESCAPED_SLASHES);

?>