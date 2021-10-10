const mysql = require('mysql');
const squel = require('squel');

let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bddinastia'
});

conexion.connect;

let consulta = squel.select()
    .field('usuario')
    .field('contraseña')

console.log('Consulta SQL:', consulta.toString());

conexion.query(consulta.toString(), function(error, registros, campos) {
    if (error) {
        throw error;
    }

    registros.forEach(function(registro, indice, arreglo) {

var a=getElementById('acceder');
      a=function login(){
        var usuario=document.getElementById("usuario_correo").value;
        var clave=document.getElementById("clave").value;
      
        if(usuario==registro.usuario && clave==registro.clave){
          window.location.href = "index.html";
        }
        else{
          window.alert("Usuario o contraseña inválidos");
        }
      }
    });

    conexion.end();
});




function login(){
  var usuario=document.getElementById("usuario_correo").value;
  var clave=document.getElementById("clave").value;

  if(usuario=="" && clave==""){
    window.location.href = "index.html";
  }
  else{
    window.alert("Usuario o contraseña inválidos");
  }
}