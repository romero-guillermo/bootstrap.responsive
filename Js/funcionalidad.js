document.addEventListener('DOMContentLoaded', function () {
    
    shuffleCarousel();

    setInterval(shuffleCarousel, 5000);
});


function shuffleCarousel() {
    
    const carouselInner = document.getElementById('carrusel');

    const items = Array.from(carouselInner.children);

    for (var i = items.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = items[i];
        items[i] = items[j];
        items[j] = temp;
    }


    carouselInner.innerHTML = '';

  
    items.forEach(function (item) {
        carouselInner.appendChild(item);
    });
}