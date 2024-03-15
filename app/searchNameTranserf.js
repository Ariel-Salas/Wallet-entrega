
// Manejador de eventos para la inicialización de funciones después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene los elementos necesarios del DOM
    const search = document.querySelector('.input-group input'),
        table_rows = document.querySelectorAll('tbody tr'),
        table_headings = document.querySelectorAll('thead th');

    // Función para buscar y filtrar los datos de la tabla
    search.addEventListener('input', searchTable);

    function searchTable() {
        // Iterar sobre las filas de la tabla para realizar la búsqueda y mostrar u ocultar las filas según el criterio de búsqueda
        table_rows.forEach((row, i) => {
            let table_data = row.textContent.toLowerCase(),
                search_data = search.value.toLowerCase();

            row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
            row.style.setProperty('--delay', i / 25 + 's');
        });

        // Aplica estilos alternos a las filas visibles
        document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
            visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
        });
    }
});







