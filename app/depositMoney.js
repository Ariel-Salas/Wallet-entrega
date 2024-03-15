
// jQuery para depositar dinero
$(document).ready(function() {
    // Agrega un evento al formulario para manejar la suma de montos y la redirección
    $('#deposit-form').submit(function(e) {
        e.preventDefault(); // Evita que el formulario se envíe por defecto

        // Obtiene el monto ingresado y el tipo de tarjeta seleccionado
        var monto = parseFloat($('.card-holder-input').val());
        var selectedCard = $('#account').val();

        // Verifica si el monto es válido > a 1000 y si se seleccionó una tarjeta
        if (!isNaN(monto) && monto > 1000 && selectedCard) {

            // Obtén el saldo actual de la tarjeta seleccionada desde el sessionStorage
            var saldoActual;
            if (selectedCard === "01") {
                saldoActual = parseFloat(sessionStorage.getItem('nuevoSaldoVisaAzul')) || 0;
            } else if (selectedCard === "02") {
                saldoActual = parseFloat(sessionStorage.getItem('nuevoSaldoMasterCardDorada')) || 0;
            } else if (selectedCard === "03") {
                saldoActual = parseFloat(sessionStorage.getItem('nuevoSaldoSuperVisaMorada')) || 0;
            }

            console.log("Saldo actual:", saldoActual);
            
            // Calcula el nuevo saldo sumando el monto ingresado
            var nuevoSaldo = saldoActual + monto;
            console.log("Nuevo saldo:", nuevoSaldo);

            // Almacena el nuevo saldo en el sessionStorage correspondiente
            if (selectedCard === "01") {
                sessionStorage.setItem('nuevoSaldoVisaAzul', nuevoSaldo);
            } else if (selectedCard === "02") {
                sessionStorage.setItem('nuevoSaldoMasterCardDorada', nuevoSaldo);
            } else if (selectedCard === "03") {
                sessionStorage.setItem('nuevoSaldoSuperVisaMorada', nuevoSaldo);
            }

            // Redirecciona a main.html después de 100 milisegundos
            setTimeout(function() {
                window.location.href = "../views/main.html";
            }, 100);
            
        } else {
            console.log("Entró al 'else'");
            alert("Por favor, ingrese un monto válido mayor a 1000 y seleccione una cuenta válida.");
        }
    });
});
