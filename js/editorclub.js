$.post("php/sesion.php", {}, function (confirmo, status) {
  if (sessionStorage.getItem("usuario") == confirmo) {
    document.getElementById("cerrarsesionclub").style.display = "block";

    //mision
    document.getElementById("editarmision").style.display = "block";

    //vision
    document.getElementById("editarvision").style.display = "block";

    //OG
    document.getElementById("editarog").style.display = "block";

    //OE
    document.getElementById("editaroe").style.display = "block";

    //historia
    document.getElementById("editarhistoria").style.display = "block";

    //politica bienestar
    document.getElementById("editarpb").style.display = "block";
  }
});
