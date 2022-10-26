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

    //Validación Formulario

    let formulario = document.getElementById("formulario");
        function validar(e){
            let inputNombre =document.getElementById("nombre"),
                inputEmail =document.getElementById("email"),
                inputComents =document.getElementById("comentarios"),
                alertSuccess = document.getElementById("alertSuccess"),
                alertError = document.getElementById("alertError");


            if(inputNombre.value == 0 || inputEmail.value == 0 || inputComents.value == 0){
                e.preventDefault();
                alertError.classList.remove("hide");
                alertError.classList.add("show");
                
                setTimeout(function(){
                    alertError.classList.remove("show");
                    alertError.classList.add("hide");
                },2000); 
            }else{
                e.preventDefault();
                alertSuccess.classList.remove("hide");
                alertSuccess.classList.add("show");
                
                setTimeout(function(){
                    alertSuccess.classList.remove("show");
                    alertSuccess.classList.add("hide");
                },2000); 
                inputNombre.value = "";
                inputEmail.value = "";
                inputComents.value = "";
            }    
        }

    //Evento form
    formulario.addEventListener("submit", validar); 


    //Boton Scroll top
    let btnTop = document.getElementById("btn-top"),
        logo = document.getElementById("logo");

    //Detectar scroll en pagina
    window.addEventListener("scroll", function() {
        let scroll = document.documentElement.scrollTop,
            fullSize = document.documentElement.offsetHeight,
            sizeVP = document.documentElement.clientHeight;

        if(scroll > 100 ){
            btnTop.classList.add("show");
        }else{
            btnTop.classList.remove("show");
        }

        // modificar elemento cuando llegue al final
        if (fullSize == (scroll + sizeVP)){
            btnTop.classList.add("scrollFinal");
        }else{
            btnTop.classList.remove("scrollFinal");
        }
    });

    //Evento click btn up
    btnTop.addEventListener("click", function(){
        window.scrollTo(0,0);
    });

    //Evento click logo up
    logo.addEventListener("click", function(){
        window.scrollTo(0,0);
    });