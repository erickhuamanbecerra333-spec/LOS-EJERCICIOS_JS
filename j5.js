const cajaNumero = document.getElementById("num_e5");
const boton = document.getElementById("boton5");
const titulo = document.getElementById("titulo5");

boton.addEventListener("click", () => {
    let n = parseInt(cajaNumero.value);

    if (isNaN(n) || n < 0) {
        titulo.textContent = "Por favor, ingrese un número válido mayor o igual a 0.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    titulo.textContent = "El factorial es: " + factorial;
});