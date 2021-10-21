var comparar = "dinastia1234";
if (sessionStorage.getItem("usuario") == comparar){
    document.getElementById('cerrarsesion').style.display = 'block';
    document.getElementById('editarclub').style.display = 'block';
    document.getElementById('clb_intro').style.margin = '1%';
    document.getElementById('clb_intro').style.padding = '1%';
    document.getElementById('clb_intro').style.borderStyle = 'dashed';
    document.getElementById('clb_intro').style.borderWidth = '1px';
}
