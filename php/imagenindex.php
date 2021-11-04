<?php
function conn(){
    return mysqli_connect('localhost','root','root','bddinastia');
}

$conn=conn();


$imgci = $_FILES["ici"];
$n_ci = $imgci["name"];
$temp = $imgci["tmp_name"];
$imagenci = "/DINASTIA/img/".$n_ci;

    if (move_uploaded_file($temp, $imagenci)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };


    mysqli_query ($conn, "UPDATE club_index SET img_club_index = '$imagenci'");
    


?>