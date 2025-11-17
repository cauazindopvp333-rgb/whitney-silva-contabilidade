document.addEventListener("scroll", () => {
    const elementos = document.querySelectorAll(".reveal");

    elementos.forEach((el) => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 80) {
            el.classList.add("visible");
        }
    });
});

// Mostrar elementos que já estão visíveis ao carregar
window.addEventListener("load", () => {
    const elementos = document.querySelectorAll(".reveal");
    elementos.forEach((el) => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 80) {
            el.classList.add("visible");
        }
    });
});
