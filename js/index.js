var xhr = new XMLHttpRequest();
xhr.open("GET","php/index.php");
xhr.send();
xhr.onload=function(){
    var index= JSON.parse(this.response);

    //El club
    document.getElementById('title').innerHTML = index[0].titulo_club_index;
    document.getElementById('des_club_index').innerText = index[0].descripcion_club_index; 
    document.getElementById('i_c_i').src = index[0].img_club_index;

    //Categorias
    document.getElementById('imgg').src = index[1].cate_img_index;
    document.getElementById('t1').innerHTML = index[1].cate_titulo_index;
    document.getElementById('par1').innerText = index[1].cate_descripcion_index;

    document.getElementById('imgg2').src = index[2].cate_img_index;
    document.getElementById('t2').innerHTML = index[2].cate_titulo_index;
    document.getElementById('par2').innerText = index[2].cate_descripcion_index;

    document.getElementById('imgg3').src = index[3].cate_img_index;
    document.getElementById('t3').innerHTML = index[3].cate_titulo_index;
    document.getElementById('par3').innerText = index[3].cate_descripcion_index;

    document.getElementById('imgg4').src = index[4].cate_img_index;
    document.getElementById('t4').innerHTML = index[4].cate_titulo_index;
    document.getElementById('par4').innerText = index[4].cate_descripcion_index;

    document.getElementById('imgg5').src = index[5].cate_img_index;
    document.getElementById('t5').innerHTML = index[5].cate_titulo_index;
    document.getElementById('par5').innerText = index[5].cate_descripcion_index;

    document.getElementById('imgg6').src = index[6].cate_img_index;
    document.getElementById('t6').innerHTML = index[6].cate_titulo_index;
    document.getElementById('par6').innerText = index[6].cate_descripcion_index;

    //productos
    document.getElementById('log1').src = index[7].logo_producto_index;
    document.getElementById('b1').innerHTML = index[7].nombre_producto_index;

    document.getElementById('log2').src = index[8].logo_producto_index;
    document.getElementById('b2').innerHTML = index[8].nombre_producto_index;

    document.getElementById('log3').src = index[9].logo_producto_index;
    document.getElementById('b3').innerHTML = index[9].nombre_producto_index;

    //galeria
    document.getElementById('gale1').src = index[10].g_img1;
    document.getElementById('gale2').src = index[10].g_img2;
    document.getElementById('gale3').src = index[10].g_img3;

    //footer
    document.getElementById('f1').href = index[11].f_correo;
    document.getElementById('f1').setAttribute("style","color:#707070; text-decoration: none;");
    document.getElementById('f1').innerHTML = " Correo";

    document.getElementById('f2').href = index[11].f_facebook;
    document.getElementById('f2').setAttribute("style","color:#707070; text-decoration: none;");
    document.getElementById('f2').innerHTML = " Facebook";

    document.getElementById('f3').href = index[11].f_instagram;
    document.getElementById('f3').setAttribute("style","color:#707070; text-decoration: none;");
    document.getElementById('f3').innerHTML = " Instagram";

    document.getElementById('f4').href = index[11].f_whatsapp;
    document.getElementById('f4').setAttribute("style","color:#707070; text-decoration: none;");
    document.getElementById('f4').innerHTML = " Whatsapp";



    
};






