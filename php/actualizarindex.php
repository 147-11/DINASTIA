<?php
function conn(){
    return mysqli_connect('localhost','root','root','bddinastia');
}

$conn=conn();
    $titulo = $_POST['tci'];
    $descripcion = $_POST['dci'];

    mysqli_query ($conn, "UPDATE club_index set titulo_club_index ='$titulo'") or die("error");
    mysqli_query ($conn, "UPDATE club_index set descripcion_club_index ='$descripcion'") or die("error");
    mysqli_close($conn);

?>