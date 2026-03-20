 var swiperr = new Swiper(".mySwiperr", {
      slidesPerView: 4,
      spaceBetween: 10,
      breakpoints: {
            // Configuración cuando el ancho de la ventana es igual o menor a 400px
            300: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            600: {
                slidesPerView: 3,
                centeredSlides: false,
            },
            800: {
            slidesPerView: 4,
            centeredSlides: false,
            }
       }
    });