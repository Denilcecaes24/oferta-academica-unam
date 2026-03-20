 document.querySelectorAll('.cont-pest-act').forEach(container => {
      const tabsnw = container.querySelectorAll('.tab5');
      const tracknw = container.querySelector('.slider-track5');
      const slidess = container.querySelectorAll('.slide5');
      let currentIndex = 0;

      // Ajusta ancho de track y slides
      tracknw.style.width = `${slidess.length * 100}%`;
      slidess.forEach(slide => {
        slide.style.minWidth = `${100 / slidess.length}%`;
      });

      function showSlide(index) {
        tabsnw.forEach(tab => tab.classList.remove('active'));
        tabsnw[index].classList.add('active');
        tracknw.style.transform = `translateX(-${index * (100 / slidess.length)}%)`;
        currentIndex = index;
      }

      tabsnw.forEach((tab, index) => {
        tab.addEventListener('click', () => showSlide(index));
      });

      // Soporte para desplazamiento táctil
      let startX = 0;
      tracknw.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
      });

      tracknw.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].clientX;
        const diff = endX - startX;

        if (diff > 50 && currentIndex > 0) {
          showSlide(currentIndex - 1);
        } else if (diff < -50 && currentIndex < slidess.length - 1) {
          showSlide(currentIndex + 1);
        }
      });
    });