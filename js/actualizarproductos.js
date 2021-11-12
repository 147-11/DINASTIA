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
          console.log(data + " " + status);
          alert("Información Guardada");
          window.location.href = "productos.html";
        }
      );
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
          alert("Información Guardada");
          window.location.href = "productos.html";
        }
      );
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
    var id_productoa = document.querySelector("#producto-1").dataset.producto;

    if (a == 1) {
      $.post(
        "php/actualizarproductos.php",
        {
          tp1: titulop1a,
          dp1: descripcionp1a,
          pp1: preciop1a,
          ip1: id_productoa,
          p1: pp,
        },
        function (data, status) {
          console.log(data + " " + status);
          alert("Información Guardada");
          window.location.href = "productos.html";
        }
      );
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
  var titulop2 = $("#tp2").val();
  var preciop2 = $("#pp2").val();
  var descripcionp2 = $("#dp2").val();

  if (a == 1) {
    $.post(
      "php/actualizarproductos.php",
      { tp2: titulop2, dp2: descripcionp2, pp2: preciop2 },
      function (data, status) {
        console.log(data + " " + status);
        alert("Información Guardada");
        window.location.href = "productos.html";
      }
    );
  } else {
    alert("Modificación Cancelada");
    document.getElementById("segurop2").style.display = "none";
    document.getElementById("contenidop2").style.display = "flex";
  }
}

function p3() {
  document.getElementById("segurop3").style.display = "block";
  document.getElementById("contenidop3").style.display = "none";
}
function segurop3(a) {
  var titulop3 = $("#tp3").val();
  var preciop3 = $("#pp3").val();
  var descripcionp3 = $("#dp3").val();

  if (a == 1) {
    $.post(
      "php/actualizarproductos.php",
      { tp3: titulop3, dp3: descripcionp3, pp3: preciop3 },
      function (data, status) {
        console.log(data + " " + status);
        alert("Información Guardada");
        window.location.href = "productos.html";
      }
    );
  } else {
    alert("Modificación Cancelada");
    document.getElementById("segurop3").style.display = "none";
    document.getElementById("contenidop3").style.display = "flex";
  }
}

function p4() {
  document.getElementById("segurop4").style.display = "block";
  document.getElementById("contenidop4").style.display = "none";
}
function segurop4(a) {
  var titulop4 = $("#tp4").val();
  var preciop4 = $("#pp4").val();
  var descripcionp4 = $("#dp4").val();

  if (a == 1) {
    $.post(
      "php/actualizarproductos.php",
      { tp4: titulop4, dp4: descripcionp4, pp4: preciop4 },
      function (data, status) {
        console.log(data + " " + status);
        alert("Información Guardada");
        window.location.href = "productos.html";
      }
    );
  } else {
    alert("Modificación Cancelada");
    document.getElementById("segurop4").style.display = "none";
    document.getElementById("contenidop4").style.display = "flex";
  }
}
