var swiper = new Swiper(".mySwiper1", {
      slidesPerView: 3,
      spaceBetween: 10,
        navigation: {
        nextEl: ".swiper-button-nextt",
        prevEl: ".swiper-button-prevv",
      },

      breakpoints: {
      // ConfiguraciÃ³n cuando el ancho de la ventana es igual o menor a 400px
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
    1000: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 10, // Espacio entre los slides
  },
}
    });


var swipercv = new Swiper(".mySwipercv", {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
        navigation: {
        nextEl: ".swiper-button-nextt2",
        prevEl: ".swiper-button-prevv2",
      },

      breakpoints: {
      // ConfiguraciÃ³n cuando el ancho de la ventana es igual o menor a 400px
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
    1000: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 10, // Espacio entre los slides
  },
}
    });


var swiperun = new Swiper(".mySwiperun", {
      slidesPerView: 3,
      spaceBetween: 10,
        navigation: {
        nextEl: ".swiper-button-nextt",
        prevEl: ".swiper-button-prevv",
      },

      breakpoints: {
      // ConfiguraciÃ³n cuando el ancho de la ventana es igual o menor a 400px
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
   1000: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 10, // Espacio entre los slides
  },
}
    });