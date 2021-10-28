<?php
function conn(){
    return mysqli_connect('localhost','root','root','bddinastia');
}

$conn=conn();

//prodcuto1
$nombre_producto = $_POST['tp1'];
$precio_producto = $_POST['pp1'];
$descripcion_producto = $_POST['dp1'];

if($nombre_producto != null){
mysqli_query ($conn, "UPDATE productos_page set nombre_producto ='$nombre_producto' WHERE productos_page.categoria_producto = 1");}
if($precio_producto != null){
    mysqli_query ($conn, "UPDATE productos_page set precio_producto ='$precio_producto' WHERE productos_page.categoria_producto = 1");}
if($descripcion_producto != null){
mysqli_query ($conn, "UPDATE productos_page set descripcion_producto ='$descripcion_producto' WHERE productos_page.categoria_producto = 1");}


//prodcuto2
$nombre_producto = $_POST['tp2'];
$precio_producto = $_POST['pp2'];
$descripcion_producto = $_POST['dp2'];

if($nombre_producto != null){
mysqli_query ($conn, "UPDATE productos_page set nombre_producto ='$nombre_producto' WHERE productos_page.categoria_producto = 2");}
if($precio_producto != null){
    mysqli_query ($conn, "UPDATE productos_page set precio_producto ='$precio_producto' WHERE productos_page.categoria_producto = 2");}
if($descripcion_producto != null){
mysqli_query ($conn, "UPDATE productos_page set descripcion_producto ='$descripcion_producto' WHERE productos_page.categoria_producto = 2");}


//prodcuto3
$nombre_producto = $_POST['tp3'];
$precio_producto = $_POST['pp3'];
$descripcion_producto = $_POST['dp3'];

if($nombre_producto != null){
mysqli_query ($conn, "UPDATE productos_page set nombre_producto ='$nombre_producto' WHERE productos_page.categoria_producto = 3");}
if($precio_producto != null){
    mysqli_query ($conn, "UPDATE productos_page set precio_producto ='$precio_producto' WHERE productos_page.categoria_producto = 3");}
if($descripcion_producto != null){
mysqli_query ($conn, "UPDATE productos_page set descripcion_producto ='$descripcion_producto' WHERE productos_page.categoria_producto = 3");}


//prodcuto4
$nombre_producto = $_POST['tp4'];
$precio_producto = $_POST['pp4'];
$descripcion_producto = $_POST['dp4'];

if($nombre_producto != null){
mysqli_query ($conn, "UPDATE productos_page set nombre_producto ='$nombre_producto' WHERE productos_page.categoria_producto = 1");}
if($precio_producto != null){
    mysqli_query ($conn, "UPDATE productos_page set precio_producto ='$precio_producto' WHERE productos_page.categoria_producto = 1");}
if($descripcion_producto != null){
mysqli_query ($conn, "UPDATE productos_page set descripcion_producto ='$descripcion_producto' WHERE productos_page.categoria_producto = 1");}


?>