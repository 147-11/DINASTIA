var usuario; var clave; var a=0;

var xhr = new XMLHttpRequest();
var u; var c;

xhr.open("GET","php/login.php");
xhr.send();
xhr.onload=function(){
    var login= JSON.parse(this.response);
    alert(login[0].a);
};

function login(){
        usuario=document.getElementById("usuario_correo").value;
        clave=document.getElementById("clave").value;

        $.post('php/login.php',{u:usuario, c:clave}, function(data, status){
          console.log(data+" "+status);})
    
        if(usuario==u && clave==c){
          window.location.href = "index.html";
          sessionStorage.setItem("usuario","dinastia1234");
        }
        else{
          window.alert(login[0].a);
        }
}
function sesion(){
  sessionStorage.removeItem("usuario");
  window.location.href = "login.html";
}
