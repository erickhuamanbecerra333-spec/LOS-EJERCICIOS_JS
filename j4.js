const cajaDia = document.getElementById("dia_e4");
const boton = document.getElementById("boton4");
const titulo = document.getElementById("titulo4");

boton.addEventListener("click", () => {
    let dia = cajaDia.value;
    let nombreDia;

    switch (dia) {
        case "1":
            nombreDia = "Lunes";
            break;
        case "2":
            nombreDia = "Martes";
            break;
        case "3":
            nombreDia = "Miércoles";
            break;
        case "4":
            nombreDia = "Jueves";
            break;
        case "5":
            nombreDia = "Viernes";
            break;
        case "6":
            nombreDia = "Sábado";
            break;
        case "7":
            nombreDia = "Domingo";
            break;
        default:
            nombreDia = "Número no válido (ingrese del 1 al 7)";
    }

    titulo.textContent = nombreDia;
});