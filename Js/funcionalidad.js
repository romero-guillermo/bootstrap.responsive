document.addEventListener('DOMContentLoaded', function () {
    
    shuffleCarousel();

    setInterval(shuffleCarousel, 5000);
});


function shuffleCarousel() {
    
    var carouselInner = document.querySelector('.carousel-inner');

    var items = Array.from(carouselInner.children);

    // Barajar la lista de elementos usando el algoritmo Fisher-Yates
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