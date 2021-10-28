function p1(){
    document.getElementById('segurop1').style.display = 'block';
    document.getElementById('contenidop1').style.display = 'none';
}
function segurop1(a) {
    var titulop1= $('#tp1').val();
    var preciop1 =$('#pp1').val();
    var descripcionp1 =$('#dp1').val();

    if (a == 1){
        $.post('php/actualizarproductos.php',{tp1:titulop1, dp1:descripcionp1, pp1:preciop1 }, function(data, status){
            console.log(data+" "+status);
            alert("Información Guardada");
            window.location.href = "productos.html";
        });
    } else {
        alert("Modificación Cancelada");
        document.getElementById('segurop1').style.display = 'none';
        document.getElementById('contenidop1').style.display = 'flex';
    }
}

function p2(){
    document.getElementById('segurop2').style.display = 'block';
    document.getElementById('contenidop2').style.display = 'none';
}
function segurop2(a) {
    var titulop2= $('#tp2').val();
    var preciop2 =$('#pp2').val();
    var descripcionp2 =$('#dp2').val();

    if (a == 1){
        $.post('php/actualizarproductos.php',{tp2:titulop2, dp2:descripcionp2, pp2:preciop2 }, function(data, status){
            console.log(data+" "+status);
            alert("Información Guardada");
            window.location.href = "productos.html";
        });
    } else {
        alert("Modificación Cancelada");
        document.getElementById('segurop2').style.display = 'none';
        document.getElementById('contenidop2').style.display = 'flex';
    }
}

function p3(){
    document.getElementById('segurop3').style.display = 'block';
    document.getElementById('contenidop3').style.display = 'none';
}
function segurop3(a) {
    var titulop3= $('#tp3').val();
    var preciop3 =$('#pp3').val();
    var descripcionp3 =$('#dp3').val();

    if (a == 1){
        $.post('php/actualizarproductos.php',{tp3:titulop3, dp3:descripcionp3, pp3:preciop3 }, function(data, status){
            console.log(data+" "+status);
            alert("Información Guardada");
            window.location.href = "productos.html";
        });
    } else {
        alert("Modificación Cancelada");
        document.getElementById('segurop3').style.display = 'none';
        document.getElementById('contenidop3').style.display = 'flex';
    }
}

function p4(){
    document.getElementById('segurop4').style.display = 'block';
    document.getElementById('contenidop4').style.display = 'none';
}
function segurop4(a) {
    var titulop4= $('#tp4').val();
    var preciop4 =$('#pp4').val();
    var descripcionp4 =$('#dp4').val();

    if (a == 1){
        $.post('php/actualizarproductos.php',{tp4:titulop4, dp4:descripcionp4, pp4:preciop4 }, function(data, status){
            console.log(data+" "+status);
            alert("Información Guardada");
            window.location.href = "productos.html";
        });
    } else {
        alert("Modificación Cancelada");
        document.getElementById('segurop4').style.display = 'none';
        document.getElementById('contenidop4').style.display = 'flex';
    }
}