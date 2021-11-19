let cont = document.getElementById("c1");
function agregar() {
  if (sessionStorage.getItem("ropa") == 1) {
    var pr = 1;
    var i = Number(sessionStorage.getItem("ir"));

    let seccion = document.createElement("section");
    seccion.style.width = "320px";
    seccion.id = "producto-" + i;
    seccion.dataProducto = i;

    let img = document.createElement("img");
    img.src = "img/rsinimagen.jpeg"; //debe ir imagen nueva cargada
    img.style.objectFit = "contain";
    let seccion1 = document.createElement("section");

    seccion1.className = "texto";
    let ui = document.createElement("input");
    ui.type = "file";
    ui.placeholder = "Subir Imagen";
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
    enviar.type = "submit";
    enviar.innerText = "Guardar";
    enviar.id = "botonn";
    enviar.style.display = "flex";
    enviar.style.margin = "5%";
    enviar.style.backgroundColor = "yellow";
    enviar.onclick = function () {
      $.post(
        "php/agregar.php",
        {
          name: h2.value,
          description: p.value,
          price: h3.value,
          p1: pr,
          ip1: i,
        },
        function (data, status) {
          //alert(data);
        }
      );
      if (ui.files) {
        if (ui.files.length < 64227) {
          let formData = new FormData();

          formData.append("ip1", ui.files[0]); // En la posición 0; es decir, el primer elemento
          fetch("php/agregarimagen.php", {
            method: "POST",
            body: formData,
          })
            .then((respuesta) => respuesta.text())
            .then((decodificado) => {
              console.log(decodificado);
            });
          formData.append("p1", pr); // En la posición 0; es decir, el primer elemento
          fetch("php/imagenproductos.php", {
            method: "POST",
            body: formData,
          })
            .then((respuesta) => respuesta.text())
            .then((decodificado) => {
              console.log(decodificado);
            });
          formData.append("idp1", i); // En la posición 0; es decir, el primer elemento
          fetch("php/imagenproductos.php", {
            method: "POST",
            body: formData,
          })
            .then((respuesta) => respuesta.text())
            .then((decodificado) => {
              console.log(decodificado);
            });
        } else {
          alert("La imagen excede el peso recomendado");
        }
      }
    };

    if ((i - 1) % 2 == 0) {
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
    sessionStorage.setItem("ir", i + 1);
  }

  if (sessionStorage.getItem("ropa") == 2) {
    var i = Number(sessionStorage.getItem("ia"));
    var pr = 2;

    let seccion = document.createElement("section");
    seccion.style.width = "320px";
    seccion.id = "producto-" + i;
    seccion.dataProducto = i;

    let img = document.createElement("img");
    img.src = "img/asinimagen.jpeg"; //debe ir imagen nueva cargada
    img.style.objectFit = "contain";
    let seccion1 = document.createElement("section");

    seccion1.className = "texto";
    let ui = document.createElement("input");
    ui.type = "file";
    ui.placeholder = "Subir Imagen";
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
    enviar.type = "submit";
    enviar.innerText = "Guardar";
    enviar.id = "botonn";
    enviar.style.display = "flex";
    enviar.style.margin = "5%";
    enviar.style.backgroundColor = "red";
    enviar.onclick = function () {
      $.post(
        "php/agregar.php",
        {
          name: h2.value,
          description: p.value,
          price: h3.value,
          p1: pr,
          ip1: i,
        },
        function (data, status) {
          //alert(data);
        }
      );
      if (ui.files) {
        if (ui.files.length < 64227) {
          let formData = new FormData();

          formData.append("ip1", ui.files[0]); // En la posición 0; es decir, el primer elemento
          fetch("php/agregarimagen.php", {
            method: "POST",
            body: formData,
          })
            .then((respuesta) => respuesta.text())
            .then((decodificado) => {
              console.log(decodificado);
            });
          formData.append("p1", pr); // En la posición 0; es decir, el primer elemento
          fetch("php/imagenproductos.php", {
            method: "POST",
            body: formData,
          })
            .then((respuesta) => respuesta.text())
            .then((decodificado) => {
              console.log(decodificado);
            });
          formData.append("idp1", i); // En la posición 0; es decir, el primer elemento
          fetch("php/imagenproductos.php", {
            method: "POST",
            body: formData,
          })
            .then((respuesta) => respuesta.text())
            .then((decodificado) => {
              console.log(decodificado);
            });
        } else {
          alert("La imagen excede el peso recomendado");
        }
      }
    };

    if ((i - 1) % 2 == 0) {
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
    sessionStorage.setItem("ia", i + 1);
  }
  if (sessionStorage.getItem("ropa") == 3) {
    var i = Number(sessionStorage.getItem("ip"));
    var pr = 3;

    let seccion = document.createElement("section");
    seccion.style.width = "320px";
    seccion.id = "producto-" + i;
    seccion.dataProducto = i;

    let img = document.createElement("img");
    img.src = "img/psinimagen.jpeg"; //debe ir imagen nueva cargada
    img.style.objectFit = "contain";
    let seccion1 = document.createElement("section");

    seccion1.className = "texto";
    let ui = document.createElement("input");
    ui.type = "file";
    ui.placeholder = "Subir Imagen";
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
    enviar.type = "submit";
    enviar.innerText = "Guardar";
    enviar.id = "botonn";
    enviar.style.display = "flex";
    enviar.style.margin = "5%";
    enviar.style.backgroundColor = "red";
    enviar.onclick = function () {
      //console.log(im);
      //alert(im);
      $.post(
        "php/agregar.php",
        {
          name: h2.value,
          description: p.value,
          price: h3.value,
          p1: pr,
          ip1: i,
        },
        function (data, status) {
          //alert(data);
        }
      );
      if (ui.files) {
        if (ui.files.length < 64227) {
          let formData = new FormData();

          formData.append("ip1", ui.files[0]); // En la posición 0; es decir, el primer elemento
          fetch("php/agregarimagen.php", {
            method: "POST",
            body: formData,
          })
            .then((respuesta) => respuesta.text())
            .then((decodificado) => {
              console.log(decodificado);
            });
          formData.append("p1", pr); // En la posición 0; es decir, el primer elemento
          fetch("php/imagenproductos.php", {
            method: "POST",
            body: formData,
          })
            .then((respuesta) => respuesta.text())
            .then((decodificado) => {
              console.log(decodificado);
            });
          formData.append("idp1", i); // En la posición 0; es decir, el primer elemento
          fetch("php/imagenproductos.php", {
            method: "POST",
            body: formData,
          })
            .then((respuesta) => respuesta.text())
            .then((decodificado) => {
              console.log(decodificado);
            });
        } else {
          alert("La imagen excede el peso recomendado");
        }
      }
    };

    if ((i - 1) % 2 == 0) {
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
    sessionStorage.setItem("ip", i + 1);
  }
}
