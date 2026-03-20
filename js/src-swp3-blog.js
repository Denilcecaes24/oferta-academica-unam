var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 4,
      spaceBetween: 10,
      /*
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      */
        navigation: {
        nextEl: ".swiper-button-nextt2",
        prevEl: ".swiper-button-prevv2",
      },

      breakpoints: {
      // Configuración cuando el ancho de la ventana es igual o menor a 400px
      300: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 10, // Espacio entre los slides
      },
      600: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 10, // Espacio entre los slides
    },
    900: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 10, // Espacio entre los slides
  },
  1200: {
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 10, // Espacio entre los slides
  },
}
    });