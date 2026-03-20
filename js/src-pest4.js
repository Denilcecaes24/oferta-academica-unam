 // Función para mostrar el contenido correspondiente
 function showCont(tabIndex) {
    // Ocultar todos los contenidos
    const contents4 = document.querySelectorAll('.tab-content4');
    contents4.forEach(content => content.classList.remove('active-content4'));

    // Eliminar la clase activa de las pestañas
    const tabs4 = document.querySelectorAll('.tab4');
    tabs4.forEach(tab => tab.classList.remove('active-tab4'));

    // Mostrar el contenido correspondiente
    document.getElementById('cont' + tabIndex).classList.add('active-content4');

    // Agregar la clase activa a la pestaña seleccionada
    tabs4[tabIndex - 1].classList.add('active-tab4');
  }