<?php
function conn(){
    return mysqli_connect('localhost','root','root','bddinastia');
}

$conn=conn();
//el club
    $titulo_club_index = $_POST['tci'];
    $descripcion_club_index = $_POST['dci'];

    if($titulo_club_index != null){
    mysqli_query ($conn, "UPDATE club_index set titulo_club_index ='$titulo_club_index'") or die("error");}
    if($descripcion_club_index != null){
    mysqli_query ($conn, "UPDATE club_index set descripcion_club_index ='$descripcion_club_index'") or die("error");}


//categorías
   //iniciacion
    $cate_titulo_index = $_POST['ti'];
    $descripcion = $_POST['di'];

    if($cate_titulo_index != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_titulo_index = '$cate_titulo_index' WHERE categorias_club_index.id_categorias_index = 1");}
    if($descripcion != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_descripcion_index = '$descripcion' WHERE categorias_club_index.id_categorias_index = 1");}
    mysqli_close($conn);

?>