var xhr = new XMLHttpRequest();
xhr.open("GET","php/productos.php");
xhr.send();
xhr.onload=function(){
    var productos= JSON.parse(this.response);

    //producto1
    document.getElementById('t1').innerHTML = productos[0].nombre_producto;
    document.getElementById('p1').innerHTML = productos[0].precio_producto;
    document.getElementById('d1').innerText = productos[0].descripcion_producto; 
    document.getElementById('i1').src = productos[0].url_img_producto;

    //producto2
    document.getElementById('t2').innerHTML = productos[1].nombre_producto;
    document.getElementById('p2').innerHTML = productos[1].precio_producto;
    document.getElementById('d2').innerText = productos[1].descripcion_producto; 
    document.getElementById('i2').src = productos[1].url_img_producto;

    //producto3
    document.getElementById('t3').innerHTML = productos[2].nombre_producto;
    document.getElementById('p3').innerHTML = productos[2].precio_producto;
    document.getElementById('d3').innerText = productos[2].descripcion_producto; 
    document.getElementById('i3').src = productos[2].url_img_producto;

    //producto4
    document.getElementById('t4').innerHTML = productos[3].nombre_producto;
    document.getElementById('p4').innerHTML = productos[3].precio_producto;
    document.getElementById('d4').innerText = productos[3].descripcion_producto; 
    document.getElementById('i4').src = productos[3].url_img_producto;

    //footer
    document.getElementById('f1').href = productos[4].f_correo;
    document.getElementById('f1').setAttribute("style","color:#707070; text-decoration: none;");
    document.getElementById('f1').innerHTML = productos[4].f_correo;

    document.getElementById('f2').href = productos[4].f_facebook;
    document.getElementById('f2').setAttribute("style","color:#707070; text-decoration: none;");
    document.getElementById('f2').innerHTML = productos[4].f_facebook;

    document.getElementById('f3').href = productos[4].f_instagram;
    document.getElementById('f3').setAttribute("style","color:#707070; text-decoration: none;");
    document.getElementById('f3').innerHTML = productos[4].f_instagram;

    document.getElementById('f4').href = productos[4].f_whatsapp;
    document.getElementById('f4').setAttribute("style","color:#707070; text-decoration: none;");
    document.getElementById('f4').innerHTML = productos[4].f_whatsapp;


};