function club(){
    
    document.getElementById('seguroclub').style.display = 'block';
    document.getElementById('contenido').style.display = 'none';
}

function seguroclub(a) {
    var tituloclub= $('#tci').val();
    var descripcionclub =$('#dci').val();
    if (a ==1){
        $.post('php/actualizarindex.php',{tci:tituloclub, dci:descripcionclub }, function(data, status){
            console.log(data+" "+status);
            alert("Información Guardada");
            window.location.href = "index.html";
        });
    } else {
        alert("Modificación Cancelada");
        document.getElementById('seguroclub').style.display = 'none';
        document.getElementById('contenido').style.display = 'flex';
    }
}

function iniciacion(){
    
    document.getElementById('seguroiniciacion').style.display = 'block';
    document.getElementById('contenidoi').style.display = 'none';
}

function seguroiniciacion(a){
    var tituloiniciacion= $('#ti').val();
    var descripcioniniciacion = $('#di').val();
    if (a ==1){
    $.post('php/actualizarindex.php',{ti:tituloiniciacion, di:descripcioniniciacion}, function(data, status){
    console.log(data+" "+status);
    alert("Información Guardada");
    window.location.href = "index.html";
});
} else {
    alert("Modificación Cancelada");
    document.getElementById('seguroiniciacion').style.display = 'none';
    document.getElementById('contenidoi').style.display = 'flex';
}
}