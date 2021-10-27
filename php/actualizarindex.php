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
    $cate_titulo_indexi = $_POST['ti'];
    $descripcioni = $_POST['di'];

    if($cate_titulo_indexi != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_titulo_index = '$cate_titulo_indexi' WHERE categorias_club_index.id_categorias_index = 1");}
    if($descripcioni != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_descripcion_index = '$descripcioni' WHERE categorias_club_index.id_categorias_index = 1");}

    //basico
    $cate_titulo_indexb = $_POST['tb'];
    $descripcionb = $_POST['db'];

    if($cate_titulo_indexb != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_titulo_index = '$cate_titulo_indexb' WHERE categorias_club_index.id_categorias_index = 2");}
    if($descripcionb != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_descripcion_index = '$descripcionb' WHERE categorias_club_index.id_categorias_index = 2");}
    

    //medio
    $cate_titulo_indexm = $_POST['tm'];
    $descripcionm = $_POST['dm'];

    if($cate_titulo_indexm != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_titulo_index = '$cate_titulo_indexm' WHERE categorias_club_index.id_categorias_index = 3");}
    if($descripcionm != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_descripcion_index = '$descripcionm' WHERE categorias_club_index.id_categorias_index = 3");}


    //avanzado
    $cate_titulo_indexa = $_POST['ta'];
    $descripciona = $_POST['da'];
 
    if($cate_titulo_indexa != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_titulo_index = '$cate_titulo_indexa' WHERE categorias_club_index.id_categorias_index = 4");}
    if($descripciona != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_descripcion_index = '$descripciona' WHERE categorias_club_index.id_categorias_index = 4");}
    
    
    //preclub
    $cate_titulo_indexpre = $_POST['tp'];
    $descripcionpre = $_POST['dp'];
 
    if($cate_titulo_indexpre != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_titulo_index = '$cate_titulo_indexpre' WHERE categorias_club_index.id_categorias_index = 5");}
    if($descripcionpre != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_descripcion_index = '$descripcionpre' WHERE categorias_club_index.id_categorias_index = 5");}

    //club
    $cate_titulo_indexclubb = $_POST['tcl'];
    $descripcionclubb = $_POST['dcl'];

    if($cate_titulo_indexclubb != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_titulo_index = '$cate_titulo_indexclubb' WHERE categorias_club_index.id_categorias_index = 6");}
    if($descripcionclubb != null){
    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_descripcion_index = '$descripcionclubb' WHERE categorias_club_index.id_categorias_index = 6");}



//productos
   //ropa
   $nombre_producto_indexr = $_POST['tr'];

   if($nombre_producto_indexr != null){
   mysqli_query ($conn, "UPDATE productos_index SET nombre_producto_index = '$nombre_producto_indexr' WHERE productos_index.id_producto_index = 1");}
   

   //accesorios
   $nombre_producto_indexacc = $_POST['ta'];

   if($nombre_producto_indexacc != null){
   mysqli_query ($conn, "UPDATE productos_index SET nombre_producto_index = '$nombre_producto_indexacc' WHERE productos_index.id_producto_index = 2");}


   //patines
   $nombre_producto_indexpat = $_POST['tpat'];

   if($nombre_producto_indexpat != null){
   mysqli_query ($conn, "UPDATE productos_index SET nombre_producto_index = '$nombre_producto_indexpat' WHERE productos_index.id_producto_index = 3");}


?>