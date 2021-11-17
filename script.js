const myButton = document.getElementById("submit").addEventListener("click", () => {
  const myInput = document.getElementById("message-input");
  const result = document.getElementById("message-output");
  let myOutput = "";
  myOutput += myInput.value;
  result.innerHTML = myOutput;
  myInput.value = ""; // cada vez que le damos a añadir, el valor del input se resetea
});
