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
    $urloldici= mysqli_query($conn,"SELECT img_club_index FROM club_index");
    while ($uici=mysqli_fetch_array($urloldici)){
        unlink("../".$uici[img_club_index]);
    }

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
$imagenii = "../img/index/cate_club/ii".$n_ii;
$imgurlii = "img/index/cate_club/ii".$n_ii;

if($imgii != null){
    $urloldii= mysqli_query($conn,"SELECT `cate_img_index` FROM `categorias_club_index` WHERE id_categorias_index = 1");
    while ($uii=mysqli_fetch_array($urloldii)){
        unlink("../".$uii[cate_img_index]);
    }
    

    if (move_uploaded_file($tempii, $imagenii)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_img_index = '$imgurlii' WHERE id_categorias_index = 1");
};

//basico
$imgib = $_FILES["ib"];
$n_ib = $imgib["name"];
$tempib = $imgib["tmp_name"];
$imagenib = "../img/index/cate_club/".$n_ib;
$imgurlib = "img/index/cate_club/".$n_ib;

if($imgib != null){
    $urloldib= mysqli_query($conn,"SELECT `cate_img_index` FROM `categorias_club_index` WHERE id_categorias_index = 2");
    while ($uib=mysqli_fetch_array($urloldib)){
        unlink("../".$uib[cate_img_index]);
    }

    if (move_uploaded_file($tempib, $imagenib)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_img_index = '$imgurlib' WHERE id_categorias_index = 2");
};

//medio
$imgim = $_FILES["im"];
$n_im = $imgim["name"];
$tempim = $imgim["tmp_name"];
$imagenim = "../img/index/cate_club/".$n_im;
$imgurlim = "img/index/cate_club/".$n_im;

if($imgim != null){
    $urloldim= mysqli_query($conn,"SELECT `cate_img_index` FROM `categorias_club_index` WHERE id_categorias_index = 3");
    while ($uim=mysqli_fetch_array($urloldim)){
        unlink("../".$uim[cate_img_index]);
    }

    if (move_uploaded_file($tempim, $imagenim)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_img_index = '$imgurlim' WHERE id_categorias_index = 3");
};

//avanzado
$imgia = $_FILES["ia"];
$n_ia = $imgia["name"];
$tempia = $imgia["tmp_name"];
$imagenia = "../img/index/cate_club/".$n_ia;
$imgurlia = "img/index/cate_club/".$n_ia;

if($imgia != null){
    $urloldia= mysqli_query($conn,"SELECT `cate_img_index` FROM `categorias_club_index` WHERE id_categorias_index = 4");
    while ($uia=mysqli_fetch_array($urloldia)){
        unlink("../".$uia[cate_img_index]);
    }

    if (move_uploaded_file($tempia, $imagenia)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_img_index = '$imgurlia' WHERE id_categorias_index = 4");
};

//pre-club
$imgip = $_FILES["ip"];
$n_ip = $imgip["name"];
$tempip = $imgip["tmp_name"];
$imagenip = "../img/index/cate_club/".$n_ip;
$imgurlip = "img/index/cate_club/".$n_ip;

if($imgip != null){
    $urloldip= mysqli_query($conn,"SELECT `cate_img_index` FROM `categorias_club_index` WHERE id_categorias_index = 5");
    while ($uip=mysqli_fetch_array($urloldip)){
        unlink("../".$uip[cate_img_index]);
    }

    if (move_uploaded_file($tempip, $imagenip)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_img_index = '$imgurlip' WHERE id_categorias_index = 5");
};

//club
$imgicl = $_FILES["icl"];
$n_icl = $imgicl["name"];
$tempicl = $imgicl["tmp_name"];
$imagenicl = "../img/index/cate_club/".$n_icl;
$imgurlicl = "img/index/cate_club/".$n_icl;

if($imgicl != null){
    $urloldicl= mysqli_query($conn,"SELECT `cate_img_index` FROM `categorias_club_index` WHERE id_categorias_index = 6");
    while ($uicl=mysqli_fetch_array($urloldicl)){
        unlink("../".$uicl[cate_img_index]);
    }

    if (move_uploaded_file($tempicl, $imagenicl)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_img_index = '$imgurlicl' WHERE id_categorias_index = 6");
};

//productos
//ropa
$imgir = $_FILES["ir"];
$n_ir = $imgir["name"];
$tempir = $imgir["tmp_name"];
$imagenir = "../img/index/logos/ir".$n_ir;
$imgurlir = "img/index/logos/ir".$n_ir;

if($imgir){
    $urloldir= mysqli_query($conn,"SELECT logo_producto_index FROM productos_index WHERE productos_index.id_producto_index = 1");
    while ($uir=mysqli_fetch_array($urloldir)){
        unlink("../".$uir[logo_producto_index]);
    }
    
    if (move_uploaded_file($tempir, $imagenir)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE productos_index SET logo_producto_index = '$imgurlir' WHERE productos_index.id_producto_index = 1");
};

//accesorios
$imgiacc = $_FILES["iacc"];
$n_iacc = $imgiacc["name"];
$tempiacc = $imgiacc["tmp_name"];
$imageniacc = "../img/index/logos/iacc".$n_iacc;
$imgurliacc = "img/index/logos/iacc".$n_iacc;

if($imgiacc){
    $urloldiacc= mysqli_query($conn,"SELECT logo_producto_index FROM productos_index WHERE productos_index.id_producto_index = 2");
    while ($uiacc=mysqli_fetch_array($urloldiacc)){
        unlink("../".$uiacc[logo_producto_index]);
    }

    if (move_uploaded_file($tempiacc, $imageniacc)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE productos_index SET logo_producto_index = '$imgurliacc' WHERE productos_index.id_producto_index = 2");
};

//patines
$imgipat = $_FILES["ipat"];
$n_ipat = $imgipat["name"];
$tempipat = $imgipat["tmp_name"];
$imagenipat = "../img/index/logos/ipat".$n_ipat;
$imgurlipat = "img/index/logos/ipat".$n_ipat;

if($imgipat){
    $urloldipat= mysqli_query($conn,"SELECT logo_producto_index FROM productos_index WHERE productos_index.id_producto_index = 3");
    while ($uipat=mysqli_fetch_array($urloldipat)){
        unlink("../".$uipat[logo_producto_index]);
    }

    if (move_uploaded_file($tempipat, $imagenipat)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE productos_index SET logo_producto_index = '$imgurlipat' WHERE productos_index.id_producto_index = 3");
};

//galeria
$imgg1 = $_FILES["g1"];
$n_g1 = $imgg1["name"];
$tempg1 = $imgg1["tmp_name"];
$imageng1 = "../img/index/galeria/G1".$n_g1;
$imgurlg1 = "img/index/galeria/G1".$n_g1;

$imgg2 = $_FILES["g2"];
$n_g2 = $imgg2["name"];
$tempg2 = $imgg2["tmp_name"];
$imageng2 = "../img/index/galeria/G2".$n_g2;
$imgurlg2 = "img/index/galeria/G2".$n_g2;

$imgg3 = $_FILES["g3"];
$n_g3 = $imgg3["name"];
$tempg3 = $imgg3["tmp_name"];
$imageng3 = "../img/index/galeria/G3".$n_g3;
$imgurlg3 = "img/index/galeria/G3".$n_g3;


if($imgg1){
    $urloldg1= mysqli_query($conn,"SELECT g_img1 FROM galeria ");
    while ($ug1=mysqli_fetch_array($urloldg1)){
        unlink("../".$ug1[g_img1]);
    }

    if (move_uploaded_file($tempg1, $imageng1)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE galeria SET g_img1 = '$imgurlg1'");
};

if($imgg2){
    $urloldg2= mysqli_query($conn,"SELECT g_img2 FROM galeria ");
    while ($ug2=mysqli_fetch_array($urloldg2)){
        unlink("../".$ug2[g_img2]);
    }

    if (move_uploaded_file($tempg2, $imageng2)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE galeria SET g_img2 = '$imgurlg2'");
};

if($imgg3){
    $urloldg3= mysqli_query($conn,"SELECT g_img3 FROM galeria ");
    while ($ug3=mysqli_fetch_array($urloldg3)){
        unlink("../".$ug3[g_img3]);
    }

    if (move_uploaded_file($tempg3, $imageng3)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE galeria SET g_img3 = '$imgurlg3'");
};


?>