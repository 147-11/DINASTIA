var xhr = new XMLHttpRequest();
xhr.open("GET","php/club.php");
xhr.send();
xhr.onload=function(){
    var club= JSON.parse(this.response);
    console.log(club);

    //mision
    document.getElementById('titulo_mision').innerHTML = club[0].titulo_club_page;
    document.getElementById('p_m').innerText = club[0].descripcion_club_page; 
    document.getElementById('i_m').src = club[0].img_club_page;

    //vision
    document.getElementById('titulo_vision').innerHTML = club[1].titulo_club_page;
    document.getElementById('p_v').innerText = club[1].descripcion_club_page; 
    document.getElementById('i_v').src = club[1].img_club_page;

    //obGeneral
    document.getElementById('G').innerHTML = club[2].titulo_club_page;
    document.getElementById('p_G').innerText = club[2].descripcion_club_page; 
    //obEspecificos
    document.getElementById('Obj_E').innerHTML = club[3].titulo_club_page;
    document.getElementById('p_E').innerText = club[3].descripcion_club_page;

    //historia
    document.getElementById('titulito').innerHTML = club[4].titulo_club_page;
    document.getElementById('parrafo_histo').innerText = club[4].descripcion_club_page;
    //galeria
    document.getElementById('gale1').src = club[6].g_img1;
    document.getElementById('gale2').src = club[6].g_img2;
    document.getElementById('gale3').src = club[6].g_img3;

    //politica bienestar
    document.getElementById('t_pb').innerHTML = club[5].titulo_club_page;
    document.getElementById('d_pb').innerText = club[5].descripcion_club_page;

    //footer
    document.getElementById('f1').href = club[7].f_correo;
    document.getElementById('f1').setAttribute("style","color:#707070; text-decoration: none;");
    document.getElementById('f1').innerHTML = club[7].f_correo;

    document.getElementById('f2').href = club[7].f_facebook;
    document.getElementById('f2').setAttribute("style","color:#707070; text-decoration: none;");
    document.getElementById('f2').innerHTML = club[7].f_facebook;

    document.getElementById('f3').href = club[7].f_instagram;
    document.getElementById('f3').setAttribute("style","color:#707070; text-decoration: none;");
    document.getElementById('f3').innerHTML = club[7].f_instagram;

    document.getElementById('f4').href = club[7].f_whatsapp;
    document.getElementById('f4').setAttribute("style","color:#707070; text-decoration: none;");
    document.getElementById('f4').innerHTML = club[7].f_whatsapp;

};