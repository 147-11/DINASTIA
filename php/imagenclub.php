<?php
function conn(){
    return mysqli_connect('localhost','root','root','bddinastia');
}

$conn=conn();

//misión

$imgm = $_FILES["im"];
$n_m = $imgm["name"];
$tempm = $imgm["tmp_name"];
$imagenm = "../img/club/m".$n_m;
$imgurlm = "img/club/m".$n_m;

if($imgm){
    $urloldm= mysqli_query($conn,"SELECT img_club_page FROM club_page WHERE id_club_page=1");
    while ($um=mysqli_fetch_array($urloldm)){
        unlink("../".$um[img_club_page]);
    }

    if (move_uploaded_file($tempm, $imagenm)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE club_page SET img_club_page = '$imgurlm' WHERE id_club_page=1");
};

//visión

$imgv = $_FILES["iv"];
$n_v = $imgv["name"];
$tempv = $imgv["tmp_name"];
$imagenv = "../img/club/v".$n_v;
$imgurlv = "img/club/v".$n_v;

if($imgv){
    $urloldv= mysqli_query($conn,"SELECT img_club_page FROM club_page WHERE id_club_page=2");
    while ($uv=mysqli_fetch_array($urloldv)){
        unlink("../".$uv[img_club_page]);
    }

    if (move_uploaded_file($tempv, $imagenv)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE club_page SET img_club_page = '$imgurlv' WHERE id_club_page=2");
};


?>