 // Función para mostrar el contenido correspondiente
 function showContentt(tabIndex) {
    // Ocultar todos los contenidos
    const contents2 = document.querySelectorAll('.tab-content2');
    contents2.forEach(content => content.classList.remove('active-content2'));

    // Eliminar la clase activa de las pestañas
    const tabs2 = document.querySelectorAll('.tab2');
    tabs2.forEach(tab => tab.classList.remove('active-tab2'));

    // Mostrar el contenido correspondiente
    document.getElementById('contentt' + tabIndex).classList.add('active-content2');

    // Agregar la clase activa a la pestaña seleccionada
    tabs2[tabIndex - 1].classList.add('active-tab2');
  }