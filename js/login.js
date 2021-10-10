function login(){
    var usuario=document.getElementById("usuario_correo").value;
    var clave=document.getElementById("clave").value;
  
    if(usuario=="DinastíaClubFP" && clave=="*Dinastiaclub21*"){
      window.location.href = "index.php";
    }
    else{
      window.alert("Usuario o contraseña inválidos");
    }
  }