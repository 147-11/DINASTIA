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
        var usuario=document.getElementById("usuario_correo").value;
        var clave=document.getElementById("clave").value;
    
      
        if(usuario==u && clave==c){
          window.location.href = "index.html";
        }
        else{
          window.alert("Usuario o contraseña inválidos");
        }
    }