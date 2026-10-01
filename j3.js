const boton = document.getElementById("boton3");

boton.addEventListener("click", () => {
    let letra = document.getElementById("letra_e3").value.toLowerCase().trim();
    let titulo = document.getElementById("titulo3");

    // Si es alguna vocal, muestra que es vocal; de lo contrario, muestra que es consonante
    if (["a", "e", "i", "o", "u"].includes(letra)) {
        titulo.textContent = "Es una vocal";
    } else {
        titulo.textContent = "Es una consonante";
    }
});