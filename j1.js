const titulo = document.getElementById("titulo1");
const boton = document.getElementById("boton1");

boton.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1_e1").value) || 0;
    let num2 = parseFloat(document.getElementById("num2_e1").value) || 0;

    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num2 !== 0 ? (num1 / num2).toFixed(2) : "No se puede dividir entre 0";

    titulo.textContent = `Suma: ${suma} | Resta: ${resta} | Mult: ${multiplicacion} | Div: ${division}`;
});