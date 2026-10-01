const cajaNumero = document.getElementById("num_e9");
const boton = document.getElementById("boton9");
const titulo = document.getElementById("titulo9");

boton.addEventListener("click", () => {
    let valor = cajaNumero.value;

    if (valor.length !== 3 || isNaN(valor)) {
        titulo.textContent = "Por favor, ingrese un número válido de 3 cifras.";
        return;
    }

    if (valor[0] === valor[2]) {
        titulo.textContent = "El número " + valor + " SÍ es capicúa.";
    } else {
        titulo.textContent = "El número " + valor + " NO es capicúa.";
    }
});