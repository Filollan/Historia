const nombreInput = document.getElementById('Nombre');
const documentoInput = document.getElementById('Documento');
const edadInput = document.getElementById('Edad');
const sexoInput = document.getElementById('Sexo');
const ocupacionInput = document.getElementById('Ocupacion');
// Y así con los demás

// Función para obtener los datos del formulario
function obtenerDatosForm() {
  const datos = {
    nombre: nombreInput.value, 
    edad: edadInput.value,
    // ...
  }

  return datos;
}

// Simulación de base de datos
const db = []; 

// Función para guardar
function guardar() {
  const datos = obtenerDatosForm();
  
  // Asignar ID
  datos.id = Date.now(); 
  
  // Guardar en "DB"
  db.push(datos);
}

// Función para editar
function editar(id) {
  const datos = obtenerDatosForm();
  
  // Buscar índice del registro por ID
  const index = db.findIndex(x => x.id === id);

  // Actualizar registro
  db[index] = {...db[index], ...datos};
}

// Función para eliminar
function eliminar(id) {

  const index = db.findIndex(x => x.id === id);
  db.splice(index, 1);

}

// Handler al hacer clic en botón guardar
const botonGuardar = document.getElementById("btn-guardar");

botonGuardar.onclick = () => {
  guardar();
}