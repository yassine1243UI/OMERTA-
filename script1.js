// JavaScript
window.addEventListener('load', function() {
    var banniere = document.querySelector('body');
    // Utiliser GSAP pour créer une animation d'entrée
    gsap.from(banniere, { duration: 0.5, opacity: 0, y: -50, ease: "power2.out" });
});

window.addEventListener('load', function() {
    var block = document.querySelector('.blocks .block1');
    // Utiliser GSAP pour créer une animation d'entrée
    gsap.from(block, { duration: 1, opacity: 0, x: -100, ease: "EaseInOut" });
});

window.addEventListener('load', function() {
    var block = document.querySelector('.blocks .block2');
    // Utiliser GSAP pour créer une animation d'entrée
    gsap.from(block, { duration: 2, opacity: 0, x: -500, ease: "EaseInOut" });
});

window.addEventListener('load', function() {
    var block = document.querySelector('.blocks .block3');
    // Utiliser GSAP pour créer une animation d'entrée
    gsap.from(block, { duration: 2, opacity: 0, x: -1000, ease: "EaseInOut" });
});


