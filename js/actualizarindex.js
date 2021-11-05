function club(){
    
    document.getElementById('seguroclub').style.display = 'block';
    document.getElementById('contenido').style.display = 'none';
}

function seguroclub(a) {
    

    if (a ==1){
        
    
    var tituloclub= $('#tci').val();
    var descripcionclub =$('#dci').val();
    var imgci = document.querySelector('#ici').files;
    if (a ==1){
    $.post('php/actualizarindex.php',{tci:tituloclub, dci:descripcionclub}, function(data, status){
    console.log(data+" "+status);
    if (imgci.length < 64227) {
            let formData = new FormData();
            
            formData.append("ici", imgci[0]); // En la posición 0; es decir, el primer elemento
            fetch('php/imagenindex.php', {
                method: 'POST',
                body: formData,
            })
                .then(respuesta => respuesta.text())
                .then(decodificado => {
                    console.log(decodificado);
                });
        }else{
            alert("La imagen excede el peso recomendado");
        }
    alert("Información Guardada");
    window.location.href = "index.html#title";
});
} else {
    alert("Modificación Cancelada");
        document.getElementById('seguroclub').style.display = 'none';
        document.getElementById('contenido').style.display = 'flex';
}
}}

//categorias

//iniciacion
function iniciacion(){
    
    document.getElementById('seguroiniciacion').style.display = 'block';
    document.getElementById('contenidoi').style.display = 'none';
}

function seguroiniciacion(a){
    var tituloiniciacion= $('#ti').val();
    var descripcioniniciacion = $('#di').val();
    var imgii = document.querySelector('#ii').files;
    if (a ==1){
    $.post('php/actualizarindex.php',{ti:tituloiniciacion, di:descripcioniniciacion}, function(data, status){
    console.log(data+" "+status);
    if (imgii.length < 64227) {
            let formData = new FormData();
            
            formData.append("ii", imgii[0]); // En la posición 0; es decir, el primer elemento
            fetch('php/imagenindex.php', {
                method: 'POST',
                body: formData,
            })
                .then(respuesta => respuesta.text())
                .then(decodificado => {
                    console.log(decodificado);
                });
        }else{
            alert("La imagen excede el peso recomendado");
        }
    alert("Información Guardada");
    window.location.href = "index.html#ii";
});
} else {
    alert("Modificación Cancelada");
    document.getElementById('seguroiniciacion').style.display = 'none';
    document.getElementById('contenidoi').style.display = 'flex';
}
}

//basico
function basico(){
    
    document.getElementById('segurobasico').style.display = 'block';
    document.getElementById('contenidob').style.display = 'none';
}
function segurobasico(a){
    var titulobasico= $('#tb').val();
    var descripcionbasico = $('#db').val();
    if (a ==1){
    $.post('php/actualizarindex.php',{tb:titulobasico, db:descripcionbasico}, function(data, status){
    console.log(data+" "+status);
    alert("Información Guardada");
    window.location.href = "index.html";
});
} else {
    alert("Modificación Cancelada");
    document.getElementById('segurobasico').style.display = 'none';
    document.getElementById('contenidob').style.display = 'flex';
}
}


//medio
function medio(){
    
    document.getElementById('seguromedio').style.display = 'block';
    document.getElementById('contenidom').style.display = 'none';
}
function seguromedio(a){
    var titulomedio= $('#tm').val();
    var descripcionmedio = $('#dm').val();
    if (a ==1){
    $.post('php/actualizarindex.php',{tm:titulomedio, dm:descripcionmedio}, function(data, status){
    console.log(data+" "+status);
    alert("Información Guardada");
    window.location.href = "index.html";
});
} else {
    alert("Modificación Cancelada");
    document.getElementById('seguromedio').style.display = 'none';
    document.getElementById('contenidom').style.display = 'flex';
}
}

//avanzado
function avanzado(){
    
    document.getElementById('seguroavanzado').style.display = 'block';
    document.getElementById('contenidoa').style.display = 'none';
}
function seguroavanzado(a){
    var tituloavanzado= $('#ta').val();
    var descripcionavanzado = $('#da').val();
    if (a ==1){
    $.post('php/actualizarindex.php',{ta:tituloavanzado, da:descripcionavanzado}, function(data, status){
    console.log(data+" "+status);
    alert("Información Guardada");
    window.location.href = "index.html";
});
} else {
    alert("Modificación Cancelada");
    document.getElementById('seguroavanzado').style.display = 'none';
    document.getElementById('contenidoa').style.display = 'flex';
}
}

//preclub
function pre(){
    
    document.getElementById('seguropre').style.display = 'block';
    document.getElementById('contenidop').style.display = 'none';
}
function seguropre(a){
    var titulopre= $('#tp').val();
    var descripcionpre = $('#dp').val();
    if (a ==1){
    $.post('php/actualizarindex.php',{tp:titulopre, dp:descripcionpre}, function(data, status){
    console.log(data+" "+status);
    alert("Información Guardada");
    window.location.href = "index.html";
});
} else {
    alert("Modificación Cancelada");
    document.getElementById('seguropre').style.display = 'none';
    document.getElementById('contenidop').style.display = 'flex';
}
}

//club
function clubb(){
    document.getElementById('seguroclubb').style.display = 'block';
    document.getElementById('contenidocl').style.display = 'none';
}
function seguroclubb(a){
    var tituloclubb= $('#tcl').val();
    var descripcionclubb = $('#dcl').val();
    if (a ==1){
    $.post('php/actualizarindex.php',{tcl:tituloclubb, dcl:descripcionclubb}, function(data, status){
    console.log(data+" "+status);
    alert("Información Guardada");
    window.location.href = "index.html";
});
} else {
    alert("Modificación Cancelada");
    document.getElementById('seguroclubb').style.display = 'none';
    document.getElementById('contenidocl').style.display = 'flex';
}
}


//productos
//ropa
function ropa(){
    
    document.getElementById('seguroropa').style.display = 'block';
    document.getElementById('contenidor').style.display = 'none';
}

function seguroropa(a){
    var tituloiniciacion= $('#tr').val();
    if (a ==1){
    $.post('php/actualizarindex.php',{tr:tituloiniciacion}, function(data, status){
    console.log(data+" "+status);
    alert("Información Guardada");
    window.location.href = "index.html";
});
} else {
    alert("Modificación Cancelada");
    document.getElementById('seguroropa').style.display = 'none';
    document.getElementById('contenidor').style.display = 'flex';
}
}

//accesorios
function accesorios(){
    
    document.getElementById('seguroaccesorios').style.display = 'block';
    document.getElementById('contenidoacc').style.display = 'none';
}

function seguroaccesorios(a){
    var tituloaccesorios= $('#tacc').val();
    if (a ==1){
    $.post('php/actualizarindex.php',{ta:tituloaccesorios}, function(data, status){
    console.log(data+" "+status);
    alert("Información Guardada");
    window.location.href = "index.html";
});
} else {
    alert("Modificación Cancelada");
    document.getElementById('seguroaccesorios').style.display = 'none';
    document.getElementById('contenidoacc').style.display = 'flex';
}
}


//patines
function patines(){
    
    document.getElementById('seguropatines').style.display = 'block';
    document.getElementById('contenidopat').style.display = 'none';
}

function seguropatines(a){
    var titulopatines= $('#tpat').val();
    if (a ==1){
    $.post('php/actualizarindex.php',{tpat:titulopatines}, function(data, status){
    console.log(data+" "+status);
    alert("Información Guardada");
    window.location.href = "index.html";
});
} else {
    alert("Modificación Cancelada");
    document.getElementById('seguropatines').style.display = 'none';
    document.getElementById('contenidopat').style.display = 'flex';
}
}