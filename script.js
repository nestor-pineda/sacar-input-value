const myButton = document.getElementById("submit").addEventListener("click", () => {
  const myInput = document.getElementById("message-input");
  const result = document.getElementById("message-output");
  let myOutput = "";
  myOutput += myInput.value;
  result.innerHTML = myOutput;
  myInput.value = ""; // cada vez que le damos a añadir, el valor del input se resetea
});

// Creamos un Event Listener en el botón.
// Extraemos el valor del input y se lo agregamos a una variable vacia.
// Seleccionamos donde queremos que aparezca el texto y con innerHTML le asignamos la variable con el valor guardado.
