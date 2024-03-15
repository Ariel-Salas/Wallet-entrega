// jQuery para enviar dinero 
$(document).ready(function() {
    // Agrega un evento al formulario para manejar la resta de montos y la redirección
    $('#deposit-form').submit(function(e) {
        e.preventDefault(); // Evita que el formulario se envíe por defecto

        // Obtiene el monto a transferir y el tipo de cuenta seleccionado
        var montoTransferir = parseFloat($('.card-holder-input').val());
        var cuentaSeleccionada = $('#account').val();

        // Verifica si el monto es válido y si se seleccionó una cuenta
        if (!isNaN(montoTransferir) && montoTransferir > 0 && cuentaSeleccionada) {

            console.log ("entro al if")

            // Obtiene el saldo actual de la cuenta seleccionada desde el sessionStorage
            var saldoActual;
            if (cuentaSeleccionada === "01") {
                saldoActual = parseFloat(sessionStorage.getItem('nuevoSaldoVisaAzul')) || 0;
            } else if (cuentaSeleccionada === "02") {
                saldoActual = parseFloat(sessionStorage.getItem('nuevoSaldoMasterCardDorada')) || 0;
            } else if (cuentaSeleccionada === "03") {
                saldoActual = parseFloat(sessionStorage.getItem('nuevoSaldoSuperVisaMorada')) || 0;
            }

            console.log("Saldo actual:", saldoActual);

            // Verifica si hay suficiente saldo en la cuenta para realizar la transferencia
            if (saldoActual >= montoTransferir) {
                // Calcula el nuevo saldo restando el monto a transferir
                var nuevoSaldo = saldoActual - montoTransferir;
                console.log("Nuevo saldo:", nuevoSaldo);

                // Almacena el nuevo saldo en el sessionStorage correspondiente
                if (cuentaSeleccionada === "01") {
                    sessionStorage.setItem('nuevoSaldoVisaAzul', nuevoSaldo);
                } else if (cuentaSeleccionada === "02") {
                    sessionStorage.setItem('nuevoSaldoMasterCardDorada', nuevoSaldo);
                } else if (cuentaSeleccionada === "03") {
                    sessionStorage.setItem('nuevoSaldoSuperVisaMorada', nuevoSaldo);
                }

                // Redirecciona a main.html después de 100 milisegundos
                setTimeout(function() {
                    window.location.href = "../views/main.html";
                }, 100);
            } else {
                alert("Saldo insuficiente en la cuenta seleccionada.");
            }
        } else {
            alert("Por favor, ingrese un monto válido mayor a 0 y seleccione una cuenta válida.");
        }
    });
});

