let contenedor
let cantidad = 7
let minimo = 1
function cargar_imagen(valor,num,titulo){
    var x=document.getElementById(valor);
    document.getElementById('monitor').src = x.src;
    contenedor = num;
    document.getElementById('titulo').innerHTML=titulo;
}
function siguiente_imagen(raiz, titulo){
    contenedor++;
    if (contenedor>cantidad){
        contenedor = 1;
        var ur=raiz+contenedor+".jpg";
        document.getElementById('monitor').src =ur;
    }else{
        var ur=raiz+contenedor+".jpg";
        document.getElementById('monitor').src =ur;
    }

    if (contenedor>=1 && contenedor<=7){
        document.getElementById('titulo').innerHTML=titulo;
    } else { 
        alert("Error");
    }    
}
function anterior_imagen(raiz, titulo){
    contenedor--;
    if (contenedor<minimo){
        contenedor = cantidad;
        var ur=raiz+contenedor+".jpg";
        document.getElementById('monitor').src =ur;
    }else{
        var ur=raiz+contenedor+".jpg";
        document.getElementById('monitor').src =ur;
    }   
    
    if (contenedor>=1 && contenedor<=7){
        document.getElementById('titulo').innerHTML=titulo;
    } else { 
        alert("Error");
    }  
}