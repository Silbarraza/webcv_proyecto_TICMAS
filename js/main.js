console.log("Mi cv")


//Funciones


function ocultar_elemento(elemento){
    elemento.style.display='none'
}

function mostrar_elemento(elemento){
    elemento.style.display='inline-block'
}

function modificar_parrafo (parrafo){
    document.getElementById('about_me').innerHTML=parrafo;
}

//variables

const about_intro='Soy diseñadora UX/UI, desarrolladora web frontend y también licenciada en nutrición. Durante la pandemia del 2020, tuve la oportunidad de conocer y adentrarme en este campo del diseño. Descubrí una nueva vocación, por lo que mi objetivo es poder seguir este camino laboral y profesionalmente. Capacitandome, adquiriendo nuevas habilidades y llevandolas a la práctica. ';

const about_me=`Soy diseñadora UX/UI, desarrolladora web frontend y también licenciada en nutrición. Durante la pandemia del 2020, tuve la oportunidad de conocer y adentrarme en este campo del diseño. Descubrí una nueva vocación, por lo que mi objetivo es poder seguir este camino laboral y profesionalmente. Capacitandome, adquiriendo nuevas habilidades y llevandolas a la práctica. Y por qué no, cuando sea oportuno, darle mi persepectiva en relación a la salud y la nutricón. Me gustaria formar parte de un equipo que me permita aplicar mis conocimientos, aprender y crecer profesioanlmente. Me gusta poner atención los detalles y lograr resultados equilibrados y funcionales.`;


let boton = document.getElementById("boton");

let boton_ocultar = document.getElementById("boton_ocultar");



//Código


ocultar_elemento(boton_ocultar);

modificar_parrafo(about_intro)


boton.addEventListener('click', function(){
    
    ocultar_elemento(boton);
    modificar_parrafo(about_me)
    mostrar_elemento(boton_ocultar);

});

boton_ocultar.addEventListener('click',function(){
    ocultar_elemento(boton_ocultar);
    modificar_parrafo(about_intro)
    mostrar_elemento(boton)
})

