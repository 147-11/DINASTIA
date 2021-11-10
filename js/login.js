function login(){
        usuario=$('#usuario_correo').val();
        clave=$('#clave').val();

        $.post('php/login.php',{u:usuario, c:clave}, function(data, status){
          console.log(data+" "+status);
    
          $.post('php/sesion.php',{}, function(UwU, status){
        if(data==1){
          window.location.href = "index.html";
          sessionStorage.setItem("usuario",UwU);
          window.alert("datos correctos");
        }
        else{
          window.alert("Contraseña o Nombre de Usuario incorrecto(s)");
        }})
      })
}
function sesion(){
  sessionStorage.removeItem("usuario");
  window.location.href = "index.html";
}
