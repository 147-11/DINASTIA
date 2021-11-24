<?php
function conn(){
    //return mysqli_connect('localhost','root','root','bddinastia');
    return mysqli_connect('remotemysql.com','ltwVf9jGZs','8L6H07OoPV','ltwVf9jGZs');
}

$conn=conn();

//mision
    $titulo_club_mision = $_POST['tm'];
    $descripcion_club_mision = $_POST['dm'];

    if($titulo_club_mision != null){
    mysqli_query ($conn, "UPDATE club_page set titulo_club_page ='$titulo_club_mision' WHERE club_page.id_club_page = 1");}
    if($descripcion_club_mision != null){
    mysqli_query ($conn, "UPDATE club_page set descripcion_club_page ='$descripcion_club_mision' WHERE club_page.id_club_page = 1");}


//vision
    $titulo_club_vision = $_POST['tv'];
    $descripcion_club_vision = $_POST['dv'];

    if($titulo_club_vision != null){
    mysqli_query ($conn, "UPDATE club_page set titulo_club_page ='$titulo_club_vision' WHERE club_page.id_club_page = 2");}
    if($descripcion_club_vision != null){
    mysqli_query ($conn, "UPDATE club_page set descripcion_club_page ='$descripcion_club_vision' WHERE club_page.id_club_page = 2");}

//objetivo general
    $titulo_club_OG = $_POST['tog'];
    $descripcion_club_OG = $_POST['dog'];

    if($titulo_club_OG != null){
    mysqli_query ($conn, "UPDATE club_page set titulo_club_page ='$titulo_club_OG' WHERE club_page.id_club_page = 3");}
    if($descripcion_club_OG != null){
    mysqli_query ($conn, "UPDATE club_page set descripcion_club_page ='$descripcion_club_OG' WHERE club_page.id_club_page = 3");}


//objetivos especificos
    $titulo_club_goe = $_POST['toe'];
    $descripcion_club_goe = $_POST['doe'];

    if($titulo_club_goe != null){
    mysqli_query ($conn, "UPDATE club_page set titulo_club_page ='$titulo_club_goe' WHERE club_page.id_club_page = 4");}
    if($descripcion_club_goe != null){
    mysqli_query ($conn, "UPDATE club_page set descripcion_club_page ='$descripcion_club_goe' WHERE club_page.id_club_page = 4");}


//HISTORIA
    $titulo_club_historia = $_POST['th'];
    $descripcion_club_historia = $_POST['dh'];

    if($titulo_club_historia != null){
    mysqli_query ($conn, "UPDATE club_page set titulo_club_page ='$titulo_club_historia' WHERE club_page.id_club_page = 5");}
    if($descripcion_club_historia != null){
    mysqli_query ($conn, "UPDATE club_page set descripcion_club_page ='$descripcion_club_historia' WHERE club_page.id_club_page = 5");}




//politicas bienestar
    $titulo_club_pb = $_POST['tpb'];
    $descripcion_club_pb = $_POST['dpb'];

    if($titulo_club_pb != null){
    mysqli_query ($conn, "UPDATE club_page set titulo_club_page ='$titulo_club_pb' WHERE club_page.id_club_page = 6");}
    if($descripcion_club_pb != null){
    mysqli_query ($conn, "UPDATE club_page set descripcion_club_page ='$descripcion_club_pb' WHERE club_page.id_club_page = 6");}


?>