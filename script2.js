window.addEventListener('load', function() {
    var img = document.querySelector('.block1 .imgChut');
    // Utiliser GSAP pour créer une animation d'entrée
    gsap.from(img, {duration: 2.5, opacity: 0,ease: "sine.inOut", y: -250 });
});

window.addEventListener('load', function() {
    var img = document.querySelector('.block3');
    // Utiliser GSAP pour créer une animation d'entrée
    gsap.from(img, {duration: 2.5, opacity: 0,ease: "sine.inOut", y: 250 });
});