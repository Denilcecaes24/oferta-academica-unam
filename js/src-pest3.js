 // Función para mostrar el contenido correspondiente
 function showContenttt(tabIndex) {
    // Ocultar todos los contenidos
    const contents3 = document.querySelectorAll('.tab-content3');
    contents3.forEach(content => content.classList.remove('active-content3'));

    // Eliminar la clase activa de las pestañas
    const tabs3 = document.querySelectorAll('.tab3');
    tabs3.forEach(tab => tab.classList.remove('active-tab3'));

    // Mostrar el contenido correspondiente
    document.getElementById('contenttt' + tabIndex).classList.add('active-content3');

    // Agregar la clase activa a la pestaña seleccionada
    tabs3[tabIndex - 1].classList.add('active-tab3');
  }