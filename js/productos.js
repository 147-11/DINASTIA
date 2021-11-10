
function producto(a){
    if(a==0){
        sessionStorage.removeItem("ropa");
        sessionStorage.setItem("ropa",1);
        window.location.href="productos.html";
    }
    if(a==1){
        sessionStorage.removeItem("ropa");
        sessionStorage.setItem("ropa",2);
        window.location.href="productos.html";
    }
    if(a==2){
        sessionStorage.removeItem("ropa");
        sessionStorage.setItem("ropa",3);
        window.location.href="productos.html";
    }
}
//function producto(a){
    var xhrR = new XMLHttpRequest();
    xhrR.open("GET","php/productosR.php");
    xhrR.send();
    xhrR.onload=function(){
    var productosR= JSON.parse(this.response);
    

    if(sessionStorage.getItem("ropa")==1){
        console.log(productosR);
    document.getElementById('titlee').innerHTML = productosR[0].nombre_categoria_productos;

    //producto1
    document.getElementById('t1').innerHTML = productosR[1].nombre_producto;
    document.getElementById('p1').innerHTML = productosR[1].precio_producto;
    document.getElementById('d1').innerText = productosR[1].descripcion_producto; 
    document.getElementById('i1').src = productosR[1].url_img_producto;

    //producto2
    document.getElementById('t2').innerHTML = productosR[2].nombre_producto;
    document.getElementById('p2').innerHTML = productosR[2].precio_producto;
    document.getElementById('d2').innerText = productosR[2].descripcion_producto; 
    document.getElementById('i2').src = productosR[2].url_img_producto;

    //producto3
    document.getElementById('t3').innerHTML = productosR[1].nombre_producto;
    document.getElementById('p3').innerHTML = productosR[1].precio_producto;
    document.getElementById('d3').innerText = productosR[1].descripcion_producto; 
    document.getElementById('i3').src = productosR[1].url_img_producto;

    //producto4
    document.getElementById('t4').innerHTML = productosR[2].nombre_producto;
    document.getElementById('p4').innerHTML = productosR[2].precio_producto;
    document.getElementById('d4').innerText = productosR[2].descripcion_producto; 
    document.getElementById('i4').src = productosR[2].url_img_producto;
    };
    if(sessionStorage.getItem("ropa")==2){
        document.getElementById('titlee').innerHTML = productosR[3].nombre_categoria_productos;

        //producto1
        document.getElementById('t1').innerHTML = productosR[4].nombre_producto;
        document.getElementById('p1').innerHTML = productosR[4].precio_producto;
        document.getElementById('d1').innerText = productosR[4].descripcion_producto; 
        document.getElementById('i1').src = productosR[4].url_img_producto;
    
        //producto2
        document.getElementById('t2').innerHTML = productosR[4].nombre_producto;
        document.getElementById('p2').innerHTML = productosR[4].precio_producto;
        document.getElementById('d2').innerText = productosR[4].descripcion_producto; 
        document.getElementById('i2').src = productosR[4].url_img_producto;
    
        //producto3
        document.getElementById('t3').innerHTML = productosR[4].nombre_producto;
        document.getElementById('p3').innerHTML = productosR[4].precio_producto;
        document.getElementById('d3').innerText = productosR[4].descripcion_producto; 
        document.getElementById('i3').src = productosR[4].url_img_producto;
    
        //producto4
        document.getElementById('t4').innerHTML = productosR[4].nombre_producto;
        document.getElementById('p4').innerHTML = productosR[4].precio_producto;
        document.getElementById('d4').innerText = productosR[4].descripcion_producto; 
        document.getElementById('i4').src = productosR[4].url_img_producto;
        }

        if(sessionStorage.getItem("ropa")==3){
            document.getElementById('titlee').innerHTML = productosR[5].nombre_categoria_productos;
    
            //producto1
            document.getElementById('t1').innerHTML = productosR[6].nombre_producto;
            document.getElementById('p1').innerHTML = productosR[6].precio_producto;
            document.getElementById('d1').innerText = productosR[6].descripcion_producto; 
            document.getElementById('i1').src = productosR[6].url_img_producto;
        
            //producto2
            document.getElementById('t2').innerHTML = productosR[6].nombre_producto;
            document.getElementById('p2').innerHTML = productosR[6].precio_producto;
            document.getElementById('d2').innerText = productosR[6].descripcion_producto; 
            document.getElementById('i2').src = productosR[6].url_img_producto;
        
            //producto3
            document.getElementById('t3').innerHTML = productosR[6].nombre_producto;
            document.getElementById('p3').innerHTML = productosR[6].precio_producto;
            document.getElementById('d3').innerText = productosR[6].descripcion_producto; 
            document.getElementById('i3').src = productosR[6].url_img_producto;
        
            //producto4
            document.getElementById('t4').innerHTML = productosR[6].nombre_producto;
            document.getElementById('p4').innerHTML = productosR[6].precio_producto;
            document.getElementById('d4').innerText = productosR[6].descripcion_producto; 
            document.getElementById('i4').src = productosR[6].url_img_producto;
            }
            //sessionStorage.removeItem("ropa");
       
    //footer
    /*var xhr = new XMLHttpRequest();
    xhr.open("GET","php/productos.php");
    xhr.send();
    xhr.onload=function(){
    var productos= JSON.parse(this.response);
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
    };*/
//};
    };