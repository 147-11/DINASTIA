let i = 0;
let cont = document.getElementById("c1");
let fila;
function agregar() {
  if (sessionStorage.getItem("ropa") == 1) {
    var pr = 1;
    var id_productor = document.querySelector("#producto-1").dataset.producto;
    let seccion = document.createElement("section");
    seccion.style.width= "320px";
    let img = document.createElement("img");
    img.src = "img/sinimagen.jpeg"; //debe ir imagen nueva cargada
    img.style.objectFit= "contain";
    let seccion1 = document.createElement("section");
   
    seccion1.className = "texto";
    let ui = document.createElement("input");
    ui.type="file";
    ui.placeholder="Subir Imagen";
    ui.style.display = "flex";
    ui.style.margin = "5%";
    let h2 = document.createElement("input");
    h2.placeholder = "Producto"; //debe ir texto nuevo cargado
    h2.class = "prod1";
    h2.style.display = "flex";
    h2.style.margin = "5%";
    let h3 = document.createElement("input");
    h3.placeholder = "Precio";
    h3.id = "prec1";
    h3.style.display = "flex";
    h3.style.margin = "5%";
    let p = document.createElement("textarea");
    p.placeholder = "Descripción";
    p.class = "descr1";
    p.style.display = "flex";
    p.style.margin = "5%";
    let enviar = document.createElement("input");
    enviar.type="submit";
    enviar.innerText = "Guardar";
    enviar.id = "botonn";
    enviar.style.display = "flex";
    enviar.style.margin = "5%";
    enviar.style.backgroundColor = "red";
    enviar.onclick = function(){
      $.post(
        "php/agregar.php",
        { name: h2.value, description: p.value, price: h3.value },
        function (data, status) {
          alert(data);
        }
      );
    };//sessionStorage.setItem("nuevoproducto",1);

    /*if(sessionStorage.getItem("ropa") == 1){
    var nombre = document.getElementById("prod1");
    var precio = document.getElementById("prec1");
    var descripcion = document.getElementById("descr1");

    alert(nombre);


    /*$.post(
      "php/agregar.php",
      { name: nombre, description: descripcion, price: precio },
      function (data, status) {
        console.log(data + " " + status);
      }
    );*/

    //}

    if (i % 2 == 0) {
      fila = document.createElement("div");
    }
    fila.className = "fila";
    seccion1.appendChild(ui);
    seccion1.appendChild(h2);
    seccion1.appendChild(h3);
    seccion1.appendChild(p);
    seccion1.appendChild(enviar);
    seccion.appendChild(img);
    seccion.appendChild(seccion1);
    fila.appendChild(seccion);
    cont.appendChild(fila);
    i = i + 1;
  }
}

function enviar(){
  alert("holi");
}