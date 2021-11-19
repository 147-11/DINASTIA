$.post("php/sesion.php", {}, function (confirmo, status) {
  if (sessionStorage.getItem("usuario") == confirmo) {
    document.getElementById("cerrarsesion").style.display = "block";

    //producto 1
    document.getElementById("editarp1").style.display = "block";

    //producto 2
    document.getElementById("editarp2").style.display = "block";

    //producto 3
    document.getElementById("editarp3").style.display = "block";

    //producto 4
    document.getElementById("editarp4").style.display = "block";

    //botones
    document.getElementById("right").style.display = "block";

    if (sessionStorage.getItem("ropa") == 1) {
        var xhrR = new XMLHttpRequest();
        xhrR.open("GET", "php/productosR.php");
        xhrR.send();
        xhrR.onload = function () {
        var productosR = JSON.parse(this.response);
        var countr = Object.keys(productosR).length;
        if (countr > 5) {
          for (var i = 5; i < countr; i++) {
            document.getElementById("eliminar"+i).style.display = "block";
          }
        }
      };
    }

    if (sessionStorage.getItem("ropa") == 2) {
        var xhrA = new XMLHttpRequest();
        xhrA.open("GET", "php/productosA.php");
        xhrA.send();
        xhrA.onload = function () {
          var productosR = JSON.parse(this.response);
          var counta = Object.keys(productosR).length;
          sessionStorage.setItem("ia", counta);
          if (counta > 5) {
            for (var i = 5; i < counta; i++) {
              document.getElementById("eliminar"+i).style.display = "block";
            }
          }
        };
      }

    if (sessionStorage.getItem("ropa") == 3) {
        var xhrP = new XMLHttpRequest();
        xhrP.open("GET", "php/productosP.php");
        xhrP.send();
        xhrP.onload = function () {
          var productosR = JSON.parse(this.response);
          var countp = Object.keys(productosR).length;
          if (countp > 5) {
            for (var i = 5; i < countp; i++) {
              document.getElementById("eliminar"+i).style.display = "block";
            }
          }
        };
      }
  }
});
