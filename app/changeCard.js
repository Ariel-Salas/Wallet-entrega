//  Script para cambiar la tarjeta 
//  Se activa cuando el DOM ha sido completamente cargado y analizado por el navegador
document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('account');
    var amountElement;
    var cardElement = document.querySelector('.card');

    console.log('selectElement:', selectElement);

    selectElement.addEventListener('change', function() {
        var selectedValue = selectElement.value;
        var cardId = '';

        // Determinar el ID de la tarjeta correspondiente
        var cardClass = '';
        if (selectedValue === '01') {
            cardId = 'VisaAzul';
            cardClass = 'blue-card'; // clase de fondo para la tarjeta azul
        } else if (selectedValue === '02') {
            cardId = 'MasterCardDorada';
            cardClass = 'gold-card'; // clase de fondo para la tarjeta dorada
        } else if (selectedValue === '03') {
            cardId = 'SuperVisaMorada';
            cardClass = 'purple-card'; // clase de fondo para la tarjeta morada
        }

        console.log('cardId:', cardId);
        console.log('cardClass:', cardClass);

        // Agregar la clase de fondo a la tarjeta
        cardElement.className = 'card ' + cardClass;

        // Obtener el saldo actual de sessionStorage para la tarjeta seleccionada
        var cardContent = sessionStorage.getItem('nuevoSaldo' + cardId);

        console.log('cardContent:', cardContent);

        // Si el contenido es null, establecerlo como 0
        if (cardContent === null) {
            cardContent = 0;
        }

        // Seleccionar el elemento de amount desde deposit.html
        amountElement = document.querySelector('.middle .cards .card .middle h1');

        console.log('amountElement:', amountElement);

        // Actualizar el contenido de la tarjeta en deposit.html
        amountElement.innerHTML = '$' + cardContent;

        // Almacena el saldo actual como un atributo de datos en el elemento amountElement
        amountElement.dataset.saldoActual = cardContent;
    });
});



