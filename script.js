// 1. DEFINICIÓN DE LA FUNCIÓN
        function darBienvenida() {
            // Utilizamos la función 'alert()' de JavaScript para mostrar 
            // un cuadro de diálogo simple en el navegador.
            alert("¡Bienvenido/a a la página de Fans de T1! Gracias por visitarnos.");
        }
        // 2. LLAMADA A LA FUNCIÓN
        // Llamamos a la función para que se ejecute inmediatamente 
        darBienvenida();

  const viewportHeight = window.innerHeight;
        const element = document.querySelector(".animacion");

        function checkScroll(){
            if(window.scrollY >= viewportHeight/3){
                element.classList.add("animate__animated","animate__backInLeft");
            }
            if(element.classList.contains(animate__jello)){
                window.removeEventListener("scroll",checkScroll);
            }
        }

        window.addEventListener("scroll",checkScroll);