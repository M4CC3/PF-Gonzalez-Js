function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 185;/*ACTUALIZAR DOLAR*/
    let real = 34;/*ACTUALIZAR REAL*/
    let pesoUruguayo = 4.53;/*ACTUALIZAR URU*/
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar;
        alert("Con el cambio oficial serian: US$ " + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked) {
        resultado = valore / real;
        alert("Con el cambio oficial serian: R$ " + resultado.toFixed(2))
    }
    else if (document.getElementById("tres").checked) {
        resultado = valore / pesoUruguayo;
        alert("Con el cambio oficial serian: $ " + resultado.toFixed(2))
    }
    else {
        alert("Por favor, selecciona un tipo de cambio. ")
    }
}


let diaDeLaSemana = Number(prompt("Seleccione Nacionalidad: 1.Argentinx - 2.Brasilerx - 3.Uruguayx"));
switch (diaDeLaSemana) {
    case 1:
        alert("Ha seleccionado la opcion para pagar mas impuestos");
        break;
    case 2:
        alert("Parabéns, você não tem impostos");
        break;
    case 3:
        alert("Felicitaciones Vo, no tenes tantos impuestos");
        break;
    default:
        alert("me quede corto con los paises, perdon");
        break;
}