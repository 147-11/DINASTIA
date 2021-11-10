function mision(){
    
    document.getElementById('seguromision').style.display = 'block';
    document.getElementById('contenidom').style.display = 'none';
}

function seguromision(a) {
    var titulomision= $('#tm').val();
    var descripcionmision =$('#dm').val();
    var imgm = document.querySelector('#im').files;
    if (a == 1){
        $.post('php/actualizarclub.php',{tm:titulomision, dm:descripcionmision }, function(data, status){
            console.log(data+" "+status);
            if (imgm.length < 64227) {
                let formData = new FormData();
                
                formData.append("im", imgm[0]); // En la posición 0; es decir, el primer elemento
                fetch('php/imagenclub.php', {
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
            window.location.href = "club.html";
        });
    } else {
        alert("Modificación Cancelada");
        document.getElementById('seguromision').style.display = 'none';
        document.getElementById('contenidom').style.display = 'flex';
    }
}

function vision(){
    
    document.getElementById('segurovision').style.display = 'block';
    document.getElementById('contenidov').style.display = 'none';
}

function segurovision(a) {
    var titulovision= $('#tv').val();
    var descripcionvision =$('#dv').val();
    var imgv = document.querySelector('#iv').files;
    if (a ==1){
        $.post('php/actualizarclub.php',{tv:titulovision, dv:descripcionvision }, function(data, status){
            console.log(data+" "+status);
            if (imgv.length < 64227) {
                let formData = new FormData();
                
                formData.append("iv", imgv[0]); // En la posición 0; es decir, el primer elemento
                fetch('php/imagenclub.php', {
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
            window.location.href = "club.html";
        });
    } else {
        alert("Modificación Cancelada");
        document.getElementById('segurovision').style.display = 'none';
        document.getElementById('contenidov').style.display = 'flex';
    }
}

// OBJETIVO GENERAL
function OG(){
    
    document.getElementById('seguroOG').style.display = 'block';
    document.getElementById('contenidoog').style.display = 'none';
}

function seguroOG(a) {
    var tituloOG= $('#tog').val();
    var descripcionOG =$('#dog').val();
    if (a == 1){
        $.post('php/actualizarclub.php',{tog:tituloOG, dog:descripcionOG }, function(data, status){
            console.log(data+" "+status);
            alert("Información Guardada");
            window.location.href = "club.html";
        });
    } else {
        alert("Modificación Cancelada");
        document.getElementById('seguroOG').style.display = 'none';
        document.getElementById('contenidoog').style.display = 'flex';
    }
}

// OBJETIVOS ESPECIFICOS
function goe(){
    
    document.getElementById('segurogoe').style.display = 'block';
    document.getElementById('contenidooe').style.display = 'none';
}

function segurogoe(a) {
    var titulogoe= $('#toe').val();
    var descripciongoe =$('#doe').val();
    if (a == 1){
        $.post('php/actualizarclub.php',{toe:titulogoe, doe:descripciongoe }, function(data, status){
            console.log(data+" "+status);
            alert("Información Guardada");
            window.location.href = "club.html";
        });
    } else {
        alert("Modificación Cancelada");
        document.getElementById('segurogoe').style.display = 'none';
        document.getElementById('contenidooe').style.display = 'flex';
    }
}

// HISTORIA
function historia(){
    
    document.getElementById('segurohistoria').style.display = 'block';
    document.getElementById('contenidoh').style.display = 'none';
}

function segurohistoria(a) {
    var titulohistoria= $('#th').val();
    var descripcionhistoria =$('#dh').val();
    if (a == 1){
        $.post('php/actualizarclub.php',{th:titulohistoria, dh:descripcionhistoria}, function(data, status){
            console.log(data+" "+status);
            alert("Información Guardada");
            window.location.href = "club.html";
        });
    } else {
        alert("Modificación Cancelada");
        document.getElementById('segurohistoria').style.display = 'none';
        document.getElementById('contenidoh').style.display = 'flex';
    }
}

// POLITICAS DE BIENESTAR
function pb(){
    
    document.getElementById('seguropb').style.display = 'block';
    document.getElementById('contenidopb').style.display = 'none';
}

function seguropb(a) {
    var titulopb= $('#tpb').val();
    var descripcionpb =$('#dpb').val();
    if (a == 1){
        $.post('php/actualizarclub.php',{tpb:titulopb, dpb:descripcionpb }, function(data, status){
            console.log(data+" "+status);
            alert("Información Guardada");
            window.location.href = "club.html";
        });
    } else {
        alert("Modificación Cancelada");
        document.getElementById('seguropb').style.display = 'none';
        document.getElementById('contenidopb').style.display = 'flex';
    }
}