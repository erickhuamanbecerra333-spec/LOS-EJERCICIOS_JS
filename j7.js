const cajaNumero = document.getElementById("num_e6");
const boton = document.getElementById("boton6");
const titulo = document.getElementById("titulo6");

boton.addEventListener("click", () => {
    let n = parseInt(cajaNumero.value);

    if (isNaN(n)) {
        titulo.innerHTML = "Por favor, ingrese un número válido.";
        return;
    }

    let resultado = "Tabla del " + n + ":<br>";
    for (let i = 1; i <= 10; i++) {
        resultado += n + " x " + i + " = " + (n * i) + "<br>";
    }

    titulo.innerHTML = resultado;
});