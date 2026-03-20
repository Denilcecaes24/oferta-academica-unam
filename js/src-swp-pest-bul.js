const labels = ["TIPOS DE INGRESO","PRERREQUISITOS","INGRESO INDIRECTO","OFERTA ESCOLARIZADA","OFERTA ABIERTA","OFERTA DISTANCIA","OFERTA ACADÉMICA","ACIERTOS","SITIO UNAM","CONTACTO"];

    var swiperp = new Swiper(".mySwiperp", {
      spaceBetween: 10,
      slidesPerView: 3,
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">${labels[index]}</span>`;
        },
      },
      navigation: {
        nextEl: ".swiper-button-nextps",
        prevEl: ".swiper-button-prevps",
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
      }
    });
