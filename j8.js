const cajaRadio = document.getElementById("radio_e8");
const boton = document.getElementById("boton8");
const titulo = document.getElementById("titulo8");

boton.addEventListener("click", () => {
    let radio = parseFloat(cajaRadio.value);

    if (isNaN(radio) || radio < 0) {
        titulo.textContent = "Por favor, ingrese un radio válido.";
        return;
    }

    let area = Math.PI * radio * radio;

    titulo.textContent = "El área es: " + area.toFixed(2);
});