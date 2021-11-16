let i=0;
let cont=document.getElementById('c1');
let fila;
function agregar(){
    let seccion = document.createElement('section');
    let img = document.createElement('img');
    img.src="img/imagen1.png"; //debe ir imagen nueva cargada
    let seccion1 = document.createElement('section');
    seccion1.className='texto';
    let h2=document.createElement('h2');
    h2.innerText='producto'; //debe ir texto nuevo cargado
    let h3=document.createElement('h3');
    h3.innerText='descripcion'; 
    let p=document.createElement('p');
    p.innerText='precio';
    if((i%2)==0){
        fila=document.createElement('div');
    }
    fila.className='fila';
    seccion1.appendChild(h2);
    seccion1.appendChild(h3);
    seccion1.appendChild(p);
    seccion.appendChild(img);
    seccion.appendChild(seccion1);
    fila.appendChild(seccion);
    cont.appendChild(fila);
    i=i+1; 
}