function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 185;/*ACTUALIZAR DOLAR*/
    let euro = 193;/*ACTUALIZAR EURO*/
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar;
        alert("El cambio de Pesos a Dolares es: US$ " + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        alert("El cambio de Pesos a Euros es: € " + resultado.toFixed(2))
    }
    else {
        alert("Por favor, selecciona un tipo de cambio. ")
    }
}
console.log(resultado)
