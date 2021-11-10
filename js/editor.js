$.post('php/sesion.php',{}, function(confirmo, status){
if (sessionStorage.getItem("usuario") == confirmo){

    document.getElementById('cerrarsesion').style.display = 'block';

    //club
    document.getElementById('editarclub').style.display = 'block';

    document.getElementById('clb_intro').style.margin = '1%';
    document.getElementById('clb_intro').style.padding = '1%';
    document.getElementById('clb_intro').style.borderStyle = 'dashed';
    document.getElementById('clb_intro').style.borderWidth = '1px';

    //iniciación
    document.getElementById('editariniciacion').style.display = 'block';
    //basico
    document.getElementById('editarbasico').style.display = 'block';
    //medio
    document.getElementById('editarmedio').style.display = 'block';
    //avanzado
    document.getElementById('editaravanzado').style.display = 'block';
    //preclub
    document.getElementById('editarpreclub').style.display = 'block';
    //club
    document.getElementById('editarcl').style.display = 'block';

    //categorias
    //ropa
    document.getElementById('editarropa').style.display = 'block';
    //accesorios
    document.getElementById('editaraccesorios').style.display = 'block';
    //patines
    document.getElementById('editarpatines').style.display = 'block';

    //galeria
    document.getElementById('editargaleria').style.display = 'block';

}
});
