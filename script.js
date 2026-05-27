// ====================================
// MOSTRAR PORTAFOLIO
// ====================================

const botonPortafolio =
document.getElementById(
"mostrarPortafolio"
);

const portafolio =
document.getElementById(
"portafolio"
);

botonPortafolio
.addEventListener(
"click",
() => {

    portafolio
    .classList
    .remove("oculto");

    portafolio
    .classList
    .add("mostrar");

    setTimeout(() => {

        portafolio
        .scrollIntoView({
            behavior:
            "smooth"
        });

    }, 200);

});


// ====================================
// EFECTO MOVIMIENTO FOTO
// ====================================

const foto =
document.querySelector(
".circulo-foto"
);

document
.addEventListener(
"mousemove",
(e) => {

    const moverX =
    (
        window.innerWidth / 2
        - e.clientX
    ) / 50;

    const moverY =
    (
        window.innerHeight / 2
        - e.clientY
    ) / 50;

    foto.style.transform =
    `translate(
    ${moverX}px,
    ${moverY}px
    )`;

});


// ====================================
// EFECTO HOVER TARJETAS
// ====================================

const cards =
document.querySelectorAll(
".card, .card-contacto"
);

cards.forEach(card => {

    card.addEventListener(
    "mouseenter",
    () => {

        card.style.transform =
        "translateY(-10px)";

    });

    card.addEventListener(
    "mouseleave",
    () => {

        card.style.transform =
        "translateY(0px)";

    });

});


// ====================================
// BOTÓN ARRIBA
// ====================================

const btnArriba =
document.createElement(
"button"
);

btnArriba.innerHTML = "↑";

btnArriba.classList.add(
"btn-arriba"
);

document.body.appendChild(
btnArriba
);

window.addEventListener(
"scroll",
() => {

    if (
        window.scrollY > 400
    ) {

        btnArriba.style.display =
        "flex";

    }

    else {

        btnArriba.style.display =
        "none";

    }

});

btnArriba
.addEventListener(
"click",
() => {

    window.scrollTo({

        top: 0,
        behavior:
        "smooth"

    });

});


// ====================================
// EFECTO APARECER
// ====================================

const sections =
document.querySelectorAll(
"section"
);

window.addEventListener(
"scroll",
() => {

    sections.forEach(
    section => {

        const top =
        section
        .getBoundingClientRect()
        .top;

        if(top < 500){

            section.style.opacity =
            "1";

            section.style.transform =
            "translateY(0)";

        }

    });

});

console.log(
"Portafolio funcionando ✨"
);