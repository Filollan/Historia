document.addEventListener('DOMContentLoaded', function () {
    // Obtiene el contenedor de campos de identificación
    const camposIdentificacion = document.getElementById('campos-identificacion');

    // Array con los nombres de los campos de identificación
    const campos = [
        'Nombre','Documento', 'Edad', 'Lugar de nacimiento','Fecha de nacimiento',
        'Sexo', 'Raza', 'Estado Civil', 'Nivel de Estudio', 
        'Ocupación', 'Religión', 'Procedencia', 'Domicilio',
        'Teléfono', 'Grupo Sanguíneo', 'EPS', 'Tipo de Vinculación',
        'Responsable o Acudiente', 'Parentesco del Responsable o Acudiente',
        'Teléfono del Responsable o Acudiente'
    ];


    // Agrega campos al formulario
    campos.forEach(function (campo) {
        const label = document.createElement('label');
        label.setAttribute('for', campo.toLowerCase().replace(/ /g, '-'));

        const input = document.createElement('input');
        input.type = 'text';
        input.id = campo.toLowerCase().replace(/ /g, '-');
        input.name = campo.toLowerCase().replace(/ /g, '-');

        label.textContent = campo + ':';

        camposIdentificacion.appendChild(label);
        camposIdentificacion.appendChild(input);
    });
});
