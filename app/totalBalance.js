
// jQuery para ver el balance total de dinero de todas las cuentas
$(document).ready(function() {
    // Función para obtener y sumar los saldos de las tarjetas del sessionStorage
    var sumarSaldos = function() {
        var total = 0;
        // Array con los nombres de las claves en sessionStorage
        var tarjetas = ['nuevoSaldoVisaAzul', 'nuevoSaldoMasterCardDorada', 'nuevoSaldoSuperVisaMorada'];
        
        // Iterar sobre cada tarjeta y sumar su saldo
        tarjetas.forEach(function(tarjeta) {
            var saldo = parseFloat(sessionStorage.getItem(tarjeta));
            if (!isNaN(saldo)) {
                total += saldo;
            }
        });
        
        // Actualizar el contenido del elemento total
        $('#total-number').text('$' + total.toLocaleString('es-ES'));
    };

    // Llamar a la función para calcular el total al cargar la página
    sumarSaldos();

    // Función para actualizar el total cuando cambia un valor en sessionStorage
    var actualizarTotal = function() {
        sumarSaldos();
    };

    // Evento de cambio en sessionStorage
    $(window).on('storage', actualizarTotal);
});
