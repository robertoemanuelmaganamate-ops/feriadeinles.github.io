window.addEventListener("scroll", function() {

    var barra = document.getElementById("barra");

    if (window.scrollY > 80) {

        barra.classList.add("mostrar");

    } else {

        barra.classList.remove("mostrar");

    }

});

const botonMenu = document.getElementById("menu-toggle");
        const menu = document.querySelector(".menu");

        botonMenu.addEventListener("click", function () {
            menu.classList.toggle("activo");

            const icono = botonMenu.querySelector("i");

            if (menu.classList.contains("activo")) {
                icono.classList.remove("fa-bars");
                icono.classList.add("fa-xmark");
            } else {
                icono.classList.remove("fa-xmark");
                icono.classList.add("fa-bars");
            }
        });
