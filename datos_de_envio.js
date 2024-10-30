// Función para guardar los datos de envío en localStorage
document.getElementById('shippingForm').addEventListener('submit', function(event) {
    // Evitar el comportamiento por defecto del formulario (que recargue la página)
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('name').value;
    const metodoPago = document.getElementById('metodoPago').value;
    const telefono = document.getElementById('telefono').value;
    const departamento = document.getElementById('departamento-input').value; // Asegúrate de que el ID sea correcto
    const ciudad = document.getElementById('ciudad-input').value; // Asegúrate de que el ID sea correcto
    const direccion = document.getElementById('direccion').value;

    // Validar que todos los campos tengan datos
    if (nombre && metodoPago && telefono && departamento && ciudad && direccion) {
        // Guardar datos en localStorage
        localStorage.setItem('shippingName', nombre);
        localStorage.setItem('shippingMetodoPago', metodoPago); 
        localStorage.setItem('shippingTelefono', telefono);
        localStorage.setItem('shippingDepartamento', departamento);
        localStorage.setItem('shippingCiudad', ciudad);
        localStorage.setItem('shippingDireccion', direccion);

        // Redirigir a la página de confirmación de compra
        window.location.href = "../confirmacion_compra/confirmacion_compra.html";
    } else {
        alert("Por favor complete todos los campos de envío.");
    }
});
    // Función para manejar la selección de departamento y ciudades
    const departamentoSelect = document.getElementById('departamento-input');
    const ciudadSelect = document.getElementById('ciudad-input');

    // Mapeo de departamentos a ciudades
    const ciudadesPorDepartamento = {
        "Bogotá D.C.": ["Bogotá"],
        "Antioquia": ["Medellín", "Envigado", "Bello"],
        "Valle del Cauca": ["Cali", "Palmira", "Buenaventura"],
        "Atlántico": ["Barranquilla", "Soledad", "Malambo"],
        "Santander": ["Bucaramanga", "Floridablanca", "Giron"]
    };

    // Al cambiar el departamento
    departamentoSelect.addEventListener('change', function() {
        const departamentoSeleccionado = departamentoSelect.value;

        // Limpiar la lista de ciudades
        ciudadSelect.innerHTML = '<option value="" disabled selected>-- Selecciona una ciudad --</option>'; 

        if (ciudadesPorDepartamento[departamentoSeleccionado]) {
            ciudadSelect.disabled = false; // Habilitar la selección de ciudad

            // Agregar las ciudades correspondientes
            ciudadesPorDepartamento[departamentoSeleccionado].forEach(function(ciudad) {
                const option = document.createElement('option');
                option.value = ciudad;
                option.textContent = ciudad;
                ciudadSelect.appendChild(option);
            });
        } else {
            ciudadSelect.disabled = true; // Deshabilitar si no hay ciudades
        }
    });

