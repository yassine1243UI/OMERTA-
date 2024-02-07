window.addEventListener('load', function() {
    var block = document.querySelector('h1');
    // Utiliser GSAP pour créer une animation d'entrée
    gsap.from(block, { duration:1, opacity: 0, y: -200, ease: "back.inOut(1.7)" });
});
window.addEventListener('load', function() {
    var block = document.querySelector('h2');
    // Utiliser GSAP pour créer une animation d'entrée
    gsap.from(block, { duration:2, opacity: 0, x: -500, ease: "power2.out" });
});
window.addEventListener('load', function() {
    var block = document.querySelector('h3');
    // Utiliser GSAP pour créer une animation d'entrée
    gsap.from(block, { duration:3, opacity: 0, y: 500, ease: "power2.out" });
});

window.addEventListener('load', function() {
    var block = document.querySelector('.block2');
    // Utiliser GSAP pour créer une animation d'entrée
    gsap.from(block, { duration:1, opacity: 0, y: -500, ease: "power1.out" });
});