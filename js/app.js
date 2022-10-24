 //Menu Responsive
 let btnMenuOpen = document.getElementById("btnMenuOpen"),
     btnMenuClose = document.getElementById("btnMenuClose"),
     menuResponsive = document.getElementById("menuBar"),
     enlaces = document.getElementById("enlaces"); 

    //click abrir
    btnMenuOpen.addEventListener("click", function () {
        menuResponsive.classList.add("active");
    });
    //click cerrar
    btnMenuClose.addEventListener("click", function () {
        menuResponsive.classList.remove("active");
    });
    //click cerrar menu con elemntos de enlace
    enlaces.addEventListener("click", function () {
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");
    });

//Slider Productos
let contenedor = document.querySelector('.slider'),
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecho = document.getElementById("btn-derecha");

    //Evento btn derecho
    btnDerecho.addEventListener("click", function(){
        contenedor.scrollLeft += contenedor.offsetWidth;
    });
    
    //Evento btn izquierdo
    btnIzquierdo.addEventListener("click", function(){
        contenedor.scrollLeft -= contenedor.offsetWidth;
    });
