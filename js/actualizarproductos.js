function p1() {
  document.getElementById("segurop1").style.display = "block";
  document.getElementById("contenidop1").style.display = "none";
}
function segurop1(a) {
  //ropa
  if (sessionStorage.getItem("ropa") == 1) {
    var pr = 1;

    var titulop1r = $("#tp1").val();
    var preciop1r = $("#pp1").val();
    var descripcionp1r = $("#dp1").val();
    var imgp1 = document.querySelector("#ip1").files;
    var id_productor = document.querySelector("#producto-1").dataset.producto;

    if (a == 1) {
      $.post(
        "php/actualizarproductos.php",
        {
          tp1: titulop1r,
          dp1: descripcionp1r,
          pp1: preciop1r,
          ip1: id_productor,
          p1: pr,
        },
        function (data, status) {
          //console.log(data + " " + status);
        }
      );
      if (imgp1.length < 64227) {
        let formData = new FormData();

        formData.append("ip1", imgp1[0]); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
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
          formData.append("idp1", id_productor); // En la posición 0; es decir, el primer elemento
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

      alert("Información Guardada");
      window.location.href = "productos.html";
      /*}
      );*/
    } else {
      alert("Modificación Cancelada");
      document.getElementById("segurop1").style.display = "none";
      document.getElementById("contenidop1").style.display = "flex";
    }
  }

  //accesorios
  if (sessionStorage.getItem("ropa") == 2) {
    var pa = 2;

    var titulop1a = $("#tp1").val();
    var preciop1a = $("#pp1").val();
    var descripcionp1a = $("#dp1").val();
    var imgp1 = document.querySelector("#ip1").files;
    var id_productoa = document.querySelector("#producto-1").dataset.producto;

    if (a == 1) {
      $.post(
        "php/actualizarproductos.php",
        {
          tp1: titulop1a,
          dp1: descripcionp1a,
          pp1: preciop1a,
          ip1: id_productoa,
          p1: pa,
        },
        function (data, status) {
          console.log(data + " " + status);
        }
      );
      if (imgp1.length < 64227) {
        let formData = new FormData();

        formData.append("ip1", imgp1[0]); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("p1", pa); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("idp1", id_productoa); // En la posición 0; es decir, el primer elemento
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
      alert("Información Guardada");
      window.location.href = "productos.html";
    } else {
      alert("Modificación Cancelada");
      document.getElementById("segurop1").style.display = "none";
      document.getElementById("contenidop1").style.display = "flex";
    }
  }

  //patines
  if (sessionStorage.getItem("ropa") == 3) {
    var pp = 3;

    var titulop1a = $("#tp1").val();
    var preciop1a = $("#pp1").val();
    var descripcionp1a = $("#dp1").val();
    var imgp1 = document.querySelector("#ip1").files;
    var id_productop = document.querySelector("#producto-1").dataset.producto;

    if (a == 1) {
      $.post(
        "php/actualizarproductos.php",
        {
          tp1: titulop1a,
          dp1: descripcionp1a,
          pp1: preciop1a,
          ip1: id_productop,
          p1: pp,
        },
        function (data, status) {
          console.log(data + " " + status);
        }
      );
      if (imgp1.length < 64227) {
        let formData = new FormData();

        formData.append("ip1", imgp1[0]); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("p1", pp); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("idp1", id_productop); // En la posición 0; es decir, el primer elemento
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
      alert("Información Guardada");
      window.location.href = "productos.html";
    } else {
      alert("Modificación Cancelada");
      document.getElementById("segurop1").style.display = "none";
      document.getElementById("contenidop1").style.display = "flex";
    }
  }
}

function p2() {
  document.getElementById("segurop2").style.display = "block";
  document.getElementById("contenidop2").style.display = "none";
}
function segurop2(a) {
  //ropa
  if (sessionStorage.getItem("ropa") == 1) {
    var pr = 1;

    var titulop1r = $("#tp2").val();
    var preciop1r = $("#pp2").val();
    var descripcionp1r = $("#dp2").val();
    var imgp1 = document.querySelector("#ip2").files;
    var id_productor = document.querySelector("#producto-2").dataset.producto;

    if (a == 1) {
      $.post(
        "php/actualizarproductos.php",
        {
          tp1: titulop1r,
          dp1: descripcionp1r,
          pp1: preciop1r,
          ip1: id_productor,
          p1: pr,
        },
        function (data, status) {
          //console.log(data + " " + status);
        }
      );
      if (imgp1.length < 64227) {
        let formData = new FormData();

        formData.append("ip1", imgp1[0]); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
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
          formData.append("idp1", id_productor); // En la posición 0; es decir, el primer elemento
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

      alert("Información Guardada");
      window.location.href = "productos.html";
      /*}
      );*/
    } else {
      alert("Modificación Cancelada");
      document.getElementById("segurop2").style.display = "none";
      document.getElementById("contenidop2").style.display = "flex";
    }
  }

  //accesorios
  if (sessionStorage.getItem("ropa") == 2) {
    var pa = 2;

    var titulop1a = $("#tp2").val();
    var preciop1a = $("#pp2").val();
    var descripcionp1a = $("#dp2").val();
    var imgp1 = document.querySelector("#ip2").files;
    var id_productoa = document.querySelector("#producto-2").dataset.producto;

    if (a == 1) {
      $.post(
        "php/actualizarproductos.php",
        {
          tp1: titulop1a,
          dp1: descripcionp1a,
          pp1: preciop1a,
          ip1: id_productoa,
          p1: pa,
        },
        function (data, status) {
          console.log(data + " " + status);
        }
      );
      if (imgp1.length < 64227) {
        let formData = new FormData();

        formData.append("ip1", imgp1[0]); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("p1", pa); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("idp1", id_productoa); // En la posición 0; es decir, el primer elemento
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
      alert("Información Guardada");
      window.location.href = "productos.html";
    } else {
      alert("Modificación Cancelada");
      document.getElementById("segurop2").style.display = "none";
      document.getElementById("contenidop2").style.display = "flex";
    }
  }

  //patines
  if (sessionStorage.getItem("ropa") == 3) {
    var pp = 3;

    var titulop1a = $("#tp2").val();
    var preciop1a = $("#pp2").val();
    var descripcionp1a = $("#dp2").val();
    var imgp1 = document.querySelector("#ip2").files;
    var id_productop = document.querySelector("#producto-2").dataset.producto;

    if (a == 1) {
      $.post(
        "php/actualizarproductos.php",
        {
          tp1: titulop1a,
          dp1: descripcionp1a,
          pp1: preciop1a,
          ip1: id_productop,
          p1: pp,
        },
        function (data, status) {
          console.log(data + " " + status);
        }
      );
      if (imgp1.length < 64227) {
        let formData = new FormData();

        formData.append("ip1", imgp1[0]); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("p1", pp); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("idp1", id_productop); // En la posición 0; es decir, el primer elemento
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
      alert("Información Guardada");
      window.location.href = "productos.html";
    } else {
      alert("Modificación Cancelada");
      document.getElementById("segurop2").style.display = "none";
      document.getElementById("contenidop2").style.display = "flex";
    }
  }
}

function p3() {
  document.getElementById("segurop3").style.display = "block";
  document.getElementById("contenidop3").style.display = "none";
}
function segurop3(a) {
  //ropa
  if (sessionStorage.getItem("ropa") == 1) {
    var pr = 1;

    var titulop1r = $("#tp3").val();
    var preciop1r = $("#pp3").val();
    var descripcionp1r = $("#dp3").val();
    var imgp1 = document.querySelector("#ip3").files;
    var id_productor = document.querySelector("#producto-3").dataset.producto;

    if (a == 1) {
      $.post(
        "php/actualizarproductos.php",
        {
          tp1: titulop1r,
          dp1: descripcionp1r,
          pp1: preciop1r,
          ip1: id_productor,
          p1: pr,
        },
        function (data, status) {
          //console.log(data + " " + status);
        }
      );
      if (imgp1.length < 64227) {
        let formData = new FormData();

        formData.append("ip1", imgp1[0]); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
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
          formData.append("idp1", id_productor); // En la posición 0; es decir, el primer elemento
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

      alert("Información Guardada");
      window.location.href = "productos.html";
      /*}
      );*/
    } else {
      alert("Modificación Cancelada");
      document.getElementById("segurop3").style.display = "none";
      document.getElementById("contenidop3").style.display = "flex";
    }
  }

  //accesorios
  if (sessionStorage.getItem("ropa") == 2) {
    var pa = 2;

    var titulop1a = $("#tp3").val();
    var preciop1a = $("#pp3").val();
    var descripcionp1a = $("#dp3").val();
    var imgp1 = document.querySelector("#ip3").files;
    var id_productoa = document.querySelector("#producto-3").dataset.producto;

    if (a == 1) {
      $.post(
        "php/actualizarproductos.php",
        {
          tp1: titulop1a,
          dp1: descripcionp1a,
          pp1: preciop1a,
          ip1: id_productoa,
          p1: pa,
        },
        function (data, status) {
          console.log(data + " " + status);
        }
      );
      if (imgp1.length < 64227) {
        let formData = new FormData();

        formData.append("ip1", imgp1[0]); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("p1", pa); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("idp1", id_productoa); // En la posición 0; es decir, el primer elemento
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
      alert("Información Guardada");
      window.location.href = "productos.html";
    } else {
      alert("Modificación Cancelada");
      document.getElementById("segurop3").style.display = "none";
      document.getElementById("contenidop3").style.display = "flex";
    }
  }

  //patines
  if (sessionStorage.getItem("ropa") == 3) {
    var pp = 3;

    var titulop1p = $("#tp3").val();
    var preciop1p = $("#pp3").val();
    var descripcionp1p = $("#dp3").val();
    var imgp1 = document.querySelector("#ip3").files;
    var id_productop = document.querySelector("#producto-3").dataset.producto;

    if (a == 1) {
      $.post(
        "php/actualizarproductos.php",
        {
          tp1: titulop1p,
          dp1: descripcionp1p,
          pp1: preciop1p,
          ip1: id_productop,
          p1: pp,
        },
        function (data, status) {
          console.log(data + " " + status);
        }
      );
      if (imgp1.length < 64227) {
        let formData = new FormData();

        formData.append("ip1", imgp1[0]); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("p1", pp); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("idp1", id_productop); // En la posición 0; es decir, el primer elemento
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
      alert("Información Guardada");
      window.location.href = "productos.html";
    } else {
      alert("Modificación Cancelada");
      document.getElementById("segurop3").style.display = "none";
      document.getElementById("contenidop3").style.display = "flex";
    }
  }
}

function p4() {
  document.getElementById("segurop4").style.display = "block";
  document.getElementById("contenidop4").style.display = "none";
}
function segurop4(a) {
  if (a == 1) {
    //ropa
  if (sessionStorage.getItem("ropa") == 1) {
    var pr = 1;

    var titulop1r = $("#tp4").val();
    var preciop1r = $("#pp4").val();
    var descripcionp1r = $("#dp4").val();
    var imgp1 = document.querySelector("#ip4").files;
    var id_productor = document.querySelector("#producto-4").dataset.producto;

    if (a == 1) {
      $.post(
        "php/actualizarproductos.php",
        {
          tp1: titulop1r,
          dp1: descripcionp1r,
          pp1: preciop1r,
          ip1: id_productor,
          p1: pr,
        },
        function (data, status) {
          //console.log(data + " " + status);
        }
      );
      if (imgp1.length < 64227) {
        let formData = new FormData();

        formData.append("ip1", imgp1[0]); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
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
          formData.append("idp1", id_productor); // En la posición 0; es decir, el primer elemento
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

      alert("Información Guardada");
      window.location.href = "productos.html";
      /*}
      );*/
    } else {
      alert("Modificación Cancelada");
      document.getElementById("segurop4").style.display = "none";
      document.getElementById("contenidop4").style.display = "flex";
    }
  }

  //accesorios
  if (sessionStorage.getItem("ropa") == 2) {
    var pa = 2;

    var titulop1a = $("#tp4").val();
    var preciop1a = $("#pp4").val();
    var descripcionp1a = $("#dp4").val();
    var imgp1 = document.querySelector("#ip4").files;
    var id_productoa = document.querySelector("#producto-4").dataset.producto;

    if (a == 1) {
      $.post(
        "php/actualizarproductos.php",
        {
          tp1: titulop1a,
          dp1: descripcionp1a,
          pp1: preciop1a,
          ip1: id_productoa,
          p1: pa,
        },
        function (data, status) {
          console.log(data + " " + status);
        }
      );
      if (imgp1.length < 64227) {
        let formData = new FormData();

        formData.append("ip1", imgp1[0]); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("p1", pa); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("idp1", id_productoa); // En la posición 0; es decir, el primer elemento
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
      alert("Información Guardada");
      window.location.href = "productos.html";
    } else {
      alert("Modificación Cancelada");
      document.getElementById("segurop4").style.display = "none";
      document.getElementById("contenidop4").style.display = "flex";
    }
  }

  //patines
  if (sessionStorage.getItem("ropa") == 3) {
    var pp = 3;

    var titulop1p = $("#tp4").val();
    var preciop1p = $("#pp4").val();
    var descripcionp1p = $("#dp4").val();
    var imgp1 = document.querySelector("#ip4").files;
    var id_productop = document.querySelector("#producto-4").dataset.producto;

    if (a == 1) {
      $.post(
        "php/actualizarproductos.php",
        {
          tp1: titulop1p,
          dp1: descripcionp1p,
          pp1: preciop1p,
          ip1: id_productop,
          p1: pp,
        },
        function (data, status) {
          console.log(data + " " + status);
        }
      );
      if (imgp1.length < 64227) {
        let formData = new FormData();

        formData.append("ip1", imgp1[0]); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("p1", pp); // En la posición 0; es decir, el primer elemento
        fetch("php/imagenproductos.php", {
          method: "POST",
          body: formData,
        })
          .then((respuesta) => respuesta.text())
          .then((decodificado) => {
            console.log(decodificado);
          });
          formData.append("idp1", id_productop); // En la posición 0; es decir, el primer elemento
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
      alert("Información Guardada");
      window.location.href = "productos.html";
    } else {
      alert("Modificación Cancelada");
      document.getElementById("segurop4").style.display = "none";
      document.getElementById("contenidop4").style.display = "flex";
    }
  }
  } else {
    alert("Modificación Cancelada");
    document.getElementById("segurop4").style.display = "none";
    document.getElementById("contenidop4").style.display = "flex";
  }
}
