
$(document).ready(function() {
    // Agrega un evento al formulario para capturar los datos y almacenarlos en sessionStorage
    $('#deposit-form').submit(function(e) {
        e.preventDefault(); // Evita que el formulario se envíe por defecto

        // Obtiene el monto a depositar desde el formulario
        let monto = $('.card-holder-input').val();

        // Otros datos predeterminados
        let nombreDestinatario = 'Invitado';
        let bancoDestino = 'Banco santiago'; // Nombre del banco predeterminado
        let rutDestinatario = 'rut invitado'; // Rut predeterminado
        let tipo = 'Depósito'; // Tipo de transacción predeterminado

        // Genera un identificador único para este conjunto de datos
        let timestamp = new Date().getTime();
        let key = 'transfer_' + timestamp;

        // Almacena los datos en sessionStorage con el identificador único
        let transferData = {
            fecha: new Date().toLocaleDateString(),
            nombreDestinatario: nombreDestinatario,
            rutDestinatario: rutDestinatario,
            bancoDestino: bancoDestino,
            monto: monto,
            tipo: tipo
        };
        sessionStorage.setItem(key, JSON.stringify(transferData));

        // Redirecciona a la página transaction2.html
        window.location.href = "../views/main.html";
    });
});
