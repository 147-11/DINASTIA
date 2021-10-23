function jajaxd(){
    
var tituloclub= $('#tci').val();
var descripcionclub =$('#dci').val();
$.post('php/actualizarindex.php',{tci:tituloclub, dci:descripcionclub }, function(data, status){
    console.log(data+" "+status);
    alert("Información Guardada");
    window.location.href = "index.html";
});
}