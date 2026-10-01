function calcularMayor(){
    let n1 = parseFloat(document.getElementById("num1_e2").value) || 0;
    let n2 = parseFloat(document.getElementById("num2_e2").value) || 0;
    let n3 = parseFloat(document.getElementById("num3_e2").value) || 0;
    
    let mayor = Math.max(n1, n2, n3);
    
    let titulo = document.getElementById("titulo2");
    titulo.textContent = "El mayor es: " + mayor;
}

let boton = document.getElementById("boton2");
boton.addEventListener("click", calcularMayor);