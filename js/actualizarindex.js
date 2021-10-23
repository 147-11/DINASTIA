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
    var tituloiniciacion= $('#ti').val();
    //var descripcionclub =$('#dci').val();
    $.post('php/actualizarindex.php',{ti:tituloiniciacion/*, dci:descripcionclub*/ }, function(data, status){
    console.log(data+" "+status);
    alert("Información Guardada");
    window.location.href = "index.html";
});
}