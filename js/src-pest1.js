 // Función para mostrar el contenido correspondiente
 function showContent(tabIndex) {
    // Ocultar todos los contenidos
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active-content'));

    // Eliminar la clase activa de las pestañas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    // Mostrar el contenido correspondiente
    document.getElementById('content' + tabIndex).classList.add('active-content');

    // Agregar la clase activa a la pestaña seleccionada
    tabs[tabIndex - 1].classList.add('active-tab');
  }