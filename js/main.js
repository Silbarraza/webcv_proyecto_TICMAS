console.log("Mi cv")


//Funciones

function ocultar_elemento(elemento){
    elemento.style.display='none'
}

function mostrar_elemento(elemento){
    elemento.style.display='inline-block'
}

function modificar_parrafo (nuevo_parrafo){
    document.getElementById('ver_mas').innerHTML= nuevo_parrafo;
    
}


//variables

const parrafo_extendido = `Me gusta poner atención en los detalles y lograr resultados equilibrados y funcionales. Soy una persona amigable y responsable, con buenas relaciones interpersonales, por lo que me gustaría formar parte de un equipo que me permita aplicar mis conocimientos, aprender y crecer profesionalmente.`;

const parrafo_vacio = " ";

let boton = document.getElementById("boton");

let boton_ocultar = document.getElementById("boton_ocultar");

//Código

ocultar_elemento(boton_ocultar);


boton.addEventListener('click', function(){
    //al hacer click ocultamos el boton ver mas y mostramos el texto extendido

    ocultar_elemento(boton);

    //modificar_parrafo(about_me,parrafo_intro)

    modificar_parrafo(parrafo_extendido)
    
    //mostramos boton ver menos
    mostrar_elemento(boton_ocultar);

});

boton_ocultar.addEventListener('click',function(){
    ocultar_elemento(boton_ocultar);

    modificar_parrafo(parrafo_vacio)

    mostrar_elemento(boton)
})

