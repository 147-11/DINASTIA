
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
    //document.getElementById('producto-1')
    document.getElementById('t1').innerHTML = productosR[1].nombre_producto_r;
    document.getElementById('p1').innerHTML = productosR[1].precio_producto_r;
    document.getElementById('d1').innerText = productosR[1].descripcion_producto_r; 
    document.getElementById('i1').src = productosR[1].url_img_producto_r;

    //producto2
    document.getElementById('t2').innerHTML = productosR[2].nombre_producto_r;
    document.getElementById('p2').innerHTML = productosR[2].precio_producto_r;
    document.getElementById('d2').innerText = productosR[2].descripcion_producto_r; 
    document.getElementById('i2').src = productosR[2].url_img_producto_r;

    //producto3
    document.getElementById('t3').innerHTML = productosR[3].nombre_producto_r;
    document.getElementById('p3').innerHTML = productosR[3].precio_producto_r;
    document.getElementById('d3').innerText = productosR[3].descripcion_producto_r; 
    document.getElementById('i3').src = productosR[3].url_img_producto_r;

    //producto4
    document.getElementById('t4').innerHTML = productosR[4].nombre_producto_r;
    document.getElementById('p4').innerHTML = productosR[4].precio_producto_r;
    document.getElementById('d4').innerText = productosR[4].descripcion_producto_r; 
    document.getElementById('i4').src = productosR[4].url_img_producto_r;
    };
    if(sessionStorage.getItem("ropa")==2){
        document.getElementById('titlee').innerHTML = productosR[5].nombre_categoria_productos;

        //producto1
        document.getElementById('t1').innerHTML = productosR[6].nombre_producto_a;
        document.getElementById('p1').innerHTML = productosR[6].precio_producto_a;
        document.getElementById('d1').innerText = productosR[6].descripcion_producto_a; 
        document.getElementById('i1').src = productosR[6].url_img_producto_a;
    
        //producto2
        document.getElementById('t2').innerHTML = productosR[7].nombre_producto_a;
        document.getElementById('p2').innerHTML = productosR[7].precio_producto_a;
        document.getElementById('d2').innerText = productosR[7].descripcion_producto_a; 
        document.getElementById('i2').src = productosR[7].url_img_producto_a;
    
        //producto3
        document.getElementById('t3').innerHTML = productosR[8].nombre_producto_a;
        document.getElementById('p3').innerHTML = productosR[8].precio_producto_a;
        document.getElementById('d3').innerText = productosR[8].descripcion_producto_a; 
        document.getElementById('i3').src = productosR[8].url_img_producto_a;
    
        //producto4
        document.getElementById('t4').innerHTML = productosR[9].nombre_producto_a;
        document.getElementById('p4').innerHTML = productosR[9].precio_producto_a;
        document.getElementById('d4').innerText = productosR[9].descripcion_producto_a; 
        document.getElementById('i4').src = productosR[9].url_img_producto_a;
        }

        if(sessionStorage.getItem("ropa")==3){
            console.log(productosR);
            document.getElementById('titlee').innerHTML = productosR[10].nombre_categoria_productos;
    
            //producto1
            document.getElementById('t1').innerHTML = productosR[11].nombre_producto_p;
            document.getElementById('p1').innerHTML = productosR[11].precio_producto_p;
            document.getElementById('d1').innerText = productosR[11].descripcion_producto_p; 
            document.getElementById('i1').src = productosR[11].url_img_producto_p;
        
            //producto2
            document.getElementById('t2').innerHTML = productosR[12].nombre_producto_p;
            document.getElementById('p2').innerHTML = productosR[12].precio_producto_p;
            document.getElementById('d2').innerText = productosR[12].descripcion_producto_p; 
            document.getElementById('i2').src = productosR[12].url_img_producto_p;
        
            //producto3
            document.getElementById('t3').innerHTML = productosR[13].nombre_producto_p;
            document.getElementById('p3').innerHTML = productosR[13].precio_producto_p;
            document.getElementById('d3').innerText = productosR[13].descripcion_producto_p; 
            document.getElementById('i3').src = productosR[13].url_img_producto_p;
        
            //producto4
            document.getElementById('t4').innerHTML = productosR[14].nombre_producto_p;
            document.getElementById('p4').innerHTML = productosR[14].precio_producto_p;
            document.getElementById('d4').innerText = productosR[14].descripcion_producto_p; 
            document.getElementById('i4').src = productosR[14].url_img_producto_p;
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