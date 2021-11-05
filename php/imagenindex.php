<?php
function conn(){
    return mysqli_connect('localhost','root','root','bddinastia');
}

$conn=conn();

//el club

$imgci = $_FILES["ici"];
$n_ci = $imgci["name"];
$temp = $imgci["tmp_name"];
$imagenci = "../img/".$n_ci;
$imgurl = "img/".$n_ci;

if($imgci != null){
    if (move_uploaded_file($temp, $imagenci)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE club_index SET img_club_index = '$imgurl'");
};

//categorias

//iniciacion
$imgii = $_FILES["ii"];
$n_ii = $imgii["name"];
$tempii = $imgii["tmp_name"];
$imagenii = "../img/".$n_ii;
$imgurlii = "img/".$n_ii;

if($imgii != null){
    $urlold= "SELECT img_club_index FROM bddinastia`.`club_index`";
    $urlold_r=mysqli_query($conn, $urlold); 
    $urlold_mostrar=mysqli_fetch_assoc($urlold_r);
    move_uploaded_file($urlold_mostrar, "img/");

    if (move_uploaded_file($tempii, $imagenii)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_img_index = '$imgurlii' WHERE id_categorias_index = 1");
};
echo $imgii;


?>