var usuario; var clave; var a=0;

var xhr = new XMLHttpRequest();
var u; var c;

xhr.open("GET","php/login.php");
xhr.send();
xhr.onload=function(){
    var login= JSON.parse(this.response);
    u = login[0].usuario;
    c = login[0].clave;
};

function login(){
        usuario=document.getElementById("usuario_correo").value;
        clave=document.getElementById("clave").value;
    
        if(usuario==u && clave==c){
          window.location.href = "index.html";
          sessionStorage.setItem("usuario","dinastia1234");
        }
        else{
          window.alert("Usuario o contraseña inválidos");
        }
}
function sesion(){
  sessionStorage.removeItem("usuario");
  window.location.href = "login.html";
}