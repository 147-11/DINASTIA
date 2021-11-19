function producto(a) {
  if (a == 0) {
    sessionStorage.removeItem("ropa");
    sessionStorage.setItem("ropa", 1);
    window.location.href = "productos.html";
  }
  if (a == 1) {
    sessionStorage.removeItem("ropa");
    sessionStorage.setItem("ropa", 2);
    window.location.href = "productos.html";
  }
  if (a == 2) {
    sessionStorage.removeItem("ropa");
    sessionStorage.setItem("ropa", 3);
    window.location.href = "productos.html";
  }
}
//function producto(a){
let fila;

if (sessionStorage.getItem("ropa") == 1) {
  var pr = 1;
  var xhrR = new XMLHttpRequest();
  xhrR.open("GET", "php/productosR.php");
  xhrR.send();
  xhrR.onload = function () {
    var productosR = JSON.parse(this.response);
    console.log(productosR);
    document.getElementById("titlee").innerHTML =
      productosR[0].nombre_categoria_productos;

    //producto1
    //document.getElementById('producto-1')
    document.getElementById("t1").innerHTML = productosR[1].nombre_producto_r;
    document.getElementById("p1").innerHTML = productosR[1].precio_producto_r;
    document.getElementById("d1").innerText =
      productosR[1].descripcion_producto_r;
    document.getElementById("i1").src = productosR[1].url_img_producto_r;

    //producto2
    document.getElementById("t2").innerHTML = productosR[2].nombre_producto_r;
    document.getElementById("p2").innerHTML = productosR[2].precio_producto_r;
    document.getElementById("d2").innerText =
      productosR[2].descripcion_producto_r;
    document.getElementById("i2").src = productosR[2].url_img_producto_r;

    //producto3
    document.getElementById("t3").innerHTML = productosR[3].nombre_producto_r;
    document.getElementById("p3").innerHTML = productosR[3].precio_producto_r;
    document.getElementById("d3").innerText =
      productosR[3].descripcion_producto_r;
    document.getElementById("i3").src = productosR[3].url_img_producto_r;

    //producto4
    document.getElementById("t4").innerHTML = productosR[4].nombre_producto_r;
    document.getElementById("p4").innerHTML = productosR[4].precio_producto_r;
    document.getElementById("d4").innerText =
      productosR[4].descripcion_producto_r;
    document.getElementById("i4").src = productosR[4].url_img_producto_r;

    //nuevos
    var count = Object.keys(productosR).length;
    sessionStorage.setItem("ir", count);
    if (count > 5) {
      for (var i = 5; i < count; i++) {
        let cont = document.getElementById("c1");
        let seccion = document.createElement("section");
        seccion.id = i;
        let img = document.createElement("img");
        img.src = productosR[i].url_img_producto_r; //debe ir imagen nueva cargada
        let seccion1 = document.createElement("section");
        seccion1.className = "texto";
        let h2 = document.createElement("h2");
        h2.innerText = productosR[i].nombre_producto_r; //debe ir texto nuevo cargado
        let h3 = document.createElement("h3");
        h3.innerText = productosR[i].precio_producto_r; //debe ir texto nuevo cargado
        let p = document.createElement("p");
        p.innerText = productosR[i].descripcion_producto_r;
        let e = document.createElement("input");
        e.id = "eliminar" + i;
        e.type = "submit";
        e.value = "Eliminar";
        e.style.display = "flex";
        e.style.margin = "5%";
        e.style.backgroundColor = "red";
        e.style.display = "none";
        e.onclick = function () {
          $.post(
            "php/eliminar.php",
            {
              p1: pr,
              ip1: seccion.id,
              count: count,
            },
            function (data, status) {
              alert(data);
            }
          );
        };
        if ((i - 1) % 2 == 0) {
          fila = document.createElement("div");
          fila.id = i / 2;
        }
        fila.className = "fila";
        seccion1.appendChild(h2);
        seccion1.appendChild(h3);
        seccion1.appendChild(p);
        seccion.appendChild(img);
        seccion.appendChild(seccion1);
        seccion.appendChild(e);
        fila.appendChild(seccion);
        cont.appendChild(fila);
      }
    }
  };
}
if (sessionStorage.getItem("ropa") == 2) {
  var pr = 2;
  var xhrA = new XMLHttpRequest();
  xhrA.open("GET", "php/productosA.php");
  xhrA.send();
  xhrA.onload = function () {
    var productosR = JSON.parse(this.response);

    document.getElementById("titlee").innerHTML =
      productosR[0].nombre_categoria_productos;

    //producto1
    document.getElementById("t1").innerHTML = productosR[1].nombre_producto_a;
    document.getElementById("p1").innerHTML = productosR[1].precio_producto_a;
    document.getElementById("d1").innerText =
      productosR[1].descripcion_producto_a;
    document.getElementById("i1").src = productosR[1].url_img_producto_a;

    //producto2
    document.getElementById("t2").innerHTML = productosR[2].nombre_producto_a;
    document.getElementById("p2").innerHTML = productosR[2].precio_producto_a;
    document.getElementById("d2").innerText =
      productosR[2].descripcion_producto_a;
    document.getElementById("i2").src = productosR[2].url_img_producto_a;

    //producto3
    document.getElementById("t3").innerHTML = productosR[3].nombre_producto_a;
    document.getElementById("p3").innerHTML = productosR[3].precio_producto_a;
    document.getElementById("d3").innerText =
      productosR[3].descripcion_producto_a;
    document.getElementById("i3").src = productosR[3].url_img_producto_a;

    //producto4
    document.getElementById("t4").innerHTML = productosR[4].nombre_producto_a;
    document.getElementById("p4").innerHTML = productosR[4].precio_producto_a;
    document.getElementById("d4").innerText =
      productosR[4].descripcion_producto_a;
    document.getElementById("i4").src = productosR[4].url_img_producto_a;

    //nuevos
    var counta = Object.keys(productosR).length;
    sessionStorage.setItem("ia", counta);
    if (counta > 5) {
      for (var i = 5; i < counta; i++) {
        let cont = document.getElementById("c1");
        let seccion = document.createElement("section");
        seccion.id = i;
        let img = document.createElement("img");
        img.src = productosR[i].url_img_producto_a; //debe ir imagen nueva cargada
        let seccion1 = document.createElement("section");
        seccion1.className = "texto";
        let h2 = document.createElement("h2");
        h2.innerText = productosR[i].nombre_producto_a; //debe ir texto nuevo cargado
        let h3 = document.createElement("h3");
        h3.innerText = productosR[i].precio_producto_a; //debe ir texto nuevo cargado
        let p = document.createElement("p");
        p.innerText = productosR[i].descripcion_producto_a;
        let e = document.createElement("input");
        e.id = "eliminar" + i;
        e.type = "submit";
        e.value = "Eliminar";
        e.style.display = "flex";
        e.style.margin = "5%";
        e.style.backgroundColor = "red";
        e.style.display = "none";
        e.onclick = function () {
          $.post(
            "php/eliminar.php",
            {
              p1: pr,
              ip1: seccion.id,
              count: counta,
            },
            function (data, status) {
              alert(data);
            }
          );
        };
        if ((i - 1) % 2 == 0) {
          fila = document.createElement("div");
          fila.id = i / 2;
        }
        fila.className = "fila";
        seccion1.appendChild(h2);
        seccion1.appendChild(h3);
        seccion1.appendChild(p);
        seccion.appendChild(img);
        seccion.appendChild(seccion1);
        seccion.appendChild(e);
        fila.appendChild(seccion);
        cont.appendChild(fila);
      }
    }
  };
}

if (sessionStorage.getItem("ropa") == 3) {
  var pr = 3;
  var xhrP = new XMLHttpRequest();
  xhrP.open("GET", "php/productosP.php");
  xhrP.send();
  xhrP.onload = function () {
    var productosR = JSON.parse(this.response);

    console.log(productosR);
    document.getElementById("titlee").innerHTML =
      productosR[0].nombre_categoria_productos;

    //producto1
    document.getElementById("t1").innerHTML = productosR[1].nombre_producto_p;
    document.getElementById("p1").innerHTML = productosR[1].precio_producto_p;
    document.getElementById("d1").innerText =
      productosR[1].descripcion_producto_p;
    document.getElementById("i1").src = productosR[1].url_img_producto_p;

    //producto2
    document.getElementById("t2").innerHTML = productosR[2].nombre_producto_p;
    document.getElementById("p2").innerHTML = productosR[2].precio_producto_p;
    document.getElementById("d2").innerText =
      productosR[2].descripcion_producto_p;
    document.getElementById("i2").src = productosR[2].url_img_producto_p;

    //producto3
    document.getElementById("t3").innerHTML = productosR[3].nombre_producto_p;
    document.getElementById("p3").innerHTML = productosR[3].precio_producto_p;
    document.getElementById("d3").innerText =
      productosR[3].descripcion_producto_p;
    document.getElementById("i3").src = productosR[3].url_img_producto_p;

    //producto4
    document.getElementById("t4").innerHTML = productosR[4].nombre_producto_p;
    document.getElementById("p4").innerHTML = productosR[4].precio_producto_p;
    document.getElementById("d4").innerText =
      productosR[4].descripcion_producto_p;
    document.getElementById("i4").src = productosR[4].url_img_producto_p;

    //nuevos
    var countp = Object.keys(productosR).length;
    sessionStorage.setItem("ip", countp);
    if (countp > 5) {
      for (var i = 5; i < countp; i++) {
        let cont = document.getElementById("c1");
        let seccion = document.createElement("section");
        seccion.id = i;
        let img = document.createElement("img");
        img.src = productosR[i].url_img_producto_p; //debe ir imagen nueva cargada
        let seccion1 = document.createElement("section");
        seccion1.className = "texto";
        let h2 = document.createElement("h2");
        h2.innerText = productosR[i].nombre_producto_p; //debe ir texto nuevo cargado
        let h3 = document.createElement("h3");
        h3.innerText = productosR[i].precio_producto_p; //debe ir texto nuevo cargado
        let p = document.createElement("p");
        p.innerText = productosR[i].descripcion_producto_p;
        let e = document.createElement("input");
        e.id = "eliminar" + i;
        e.type = "submit";
        e.value = "Eliminar";
        e.style.display = "flex";
        e.style.margin = "5%";
        e.style.backgroundColor = "red";
        e.style.display = "none";
        e.onclick = function () {
          $.post(
            "php/eliminar.php",
            {
              p1: pr,
              ip1: seccion.id,
              count: countp,
            },
            function (data, status) {
              alert(data);
            }
          );
        };
        if ((i - 1) % 2 == 0) {
          fila = document.createElement("div");
          fila.id = i / 2;
        }
        fila.className = "fila";
        seccion1.appendChild(h2);
        seccion1.appendChild(h3);
        seccion1.appendChild(p);
        seccion.appendChild(img);
        seccion.appendChild(seccion1);
        seccion.appendChild(e);
        fila.appendChild(seccion);
        cont.appendChild(fila);
      }
    }
  };
}
//sessionStorage.removeItem("ropa");

//footer
var xhrf = new XMLHttpRequest();
xhrf.open("GET", "php/productos.php");
xhrf.send();
xhrf.onload = function () {
  var productos = JSON.parse(this.response);
  document.getElementById("f1").href = productos[0].f_correo;
  document
    .getElementById("f1")
    .setAttribute("style", "color:#707070; text-decoration: none;");
  document.getElementById("f1").innerHTML = productos[0].f_correo;

  document.getElementById("f2").href = productos[0].f_facebook;
  document
    .getElementById("f2")
    .setAttribute("style", "color:#707070; text-decoration: none;");
  document.getElementById("f2").innerHTML = productos[0].f_facebook;

  document.getElementById("f3").href = productos[0].f_instagram;
  document
    .getElementById("f3")
    .setAttribute("style", "color:#707070; text-decoration: none;");
  document.getElementById("f3").innerHTML = productos[0].f_instagram;

  document.getElementById("f4").href = productos[0].f_whatsapp;
  document
    .getElementById("f4")
    .setAttribute("style", "color:#707070; text-decoration: none;");
  document.getElementById("f4").innerHTML = productos[0].f_whatsapp;
};
//};
