
//jQuery que capta los datos desde sendMoney y los pasa al html de Deposit
$(document).ready(function() {
    // Agrega un evento al formulario para capturar los datos y almacenarlos en localStorage
    $('#deposit-form').submit(function(e) {
        e.preventDefault(); // Evita que el formulario se envíe por defecto

        // Obtiene los datos del formulario
        let nombreDestinatario = $('.card-holder-input-nombre').val();
        let rutDestinatario = $('.card-holder-input-rut').val();
        let bancoDestino = $('.banco-input').val();
        let correoDestinatario = $('.card-holder-input-correo').val();
        let montoTransferir = $('.card-holder-input').val();
        let cuentaTransferencia = $('#account').val();

        // Genera un identificador único para este conjunto de datos
        let timestamp = new Date().getTime();
        let key = 'transfer_' + timestamp;

        // Almacena los datos en localStorage con el identificador único, esto es solo para el vio de dinero
        let transferData = {
            fecha: new Date().toLocaleDateString(),
            nombreDestinatario: nombreDestinatario,
            rutDestinatario: rutDestinatario,
            bancoDestino: bancoDestino,
            correoDestinatario: correoDestinatario,
            monto: montoTransferir,
            tipo: 'Envío',
            cuentaTransferencia: cuentaTransferencia
        };
        sessionStorage.setItem(key, JSON.stringify(transferData));

        // Redirecciona a la página transaction2.html
        window.location.href = "../views/main.html";
    });
});
