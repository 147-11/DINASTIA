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

//basico
$imgib = $_FILES["ib"];
$n_ib = $imgib["name"];
$tempib = $imgib["tmp_name"];
$imagenib = "../img/".$n_ib;
$imgurlib = "img/".$n_ib;

if($imgib != null){
    if (move_uploaded_file($tempib, $imagenib)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_img_index = '$imgurlib' WHERE id_categorias_index = 2");
};

//basico
$imgib = $_FILES["ib"];
$n_ib = $imgib["name"];
$tempib = $imgib["tmp_name"];
$imagenib = "../img/".$n_ib;
$imgurlib = "img/".$n_ib;

if($imgib != null){
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
$imagenim = "../img/".$n_im;
$imgurlim = "img/".$n_im;

if($imgim != null){
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
$imagenia = "../img/".$n_ia;
$imgurlia = "img/".$n_ia;

if($imgia != null){
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
$imagenip = "../img/".$n_ip;
$imgurlip = "img/".$n_ip;

if($imgip != null){
    if (move_uploaded_file($tempip, $imagenip)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE categorias_club_index SET cate_img_index = '$imgurlip' WHERE id_categorias_index = 5");
};

//pre-club
$imgicl = $_FILES["icl"];
$n_icl = $imgicl["name"];
$tempicl = $imgicl["tmp_name"];
$imagenicl = "../img/".$n_icl;
$imgurlicl = "img/".$n_icl;

if($imgicl != null){
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
$imagenir = "../img/index/logos/".$n_ir;
$imgurlir = "img/index/logos/".$n_ir;

if($imgir != null){
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
$imageniacc = "../img/index/logos/".$n_iacc;
$imgurliacc = "img/index/logos/".$n_iacc;

if($imgiacc != null){
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
$imagenipat = "../img/index/logos/".$n_ipat;
$imgurlipat = "img/index/logos/".$n_ipat;

if($imgipat != null){
    if (move_uploaded_file($tempipat, $imagenipat)){
        echo "subida";
    }
    else {
        echo "no hizo nothin";
    };

    mysqli_query ($conn, "UPDATE productos_index SET logo_producto_index = '$imgurlipat' WHERE productos_index.id_producto_index = 3");
};


?>