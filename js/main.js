let convertir = function() {
    let moneda = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 185;/*ACTUALIZAR DOLAR*/
    let real = 34;/*ACTUALIZAR REAL*/
    let pesoUruguayo = 4.53;/*ACTUALIZAR URU*/

    /*RESULTADO DE CAMBIO*/
    if (document.getElementById("uno").checked) {
        resultado = moneda / dolar;
        alert("Con el cambio oficial serian: US$ " + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked) {
        resultado = moneda / real;
        alert("Con el cambio oficial serian: R$ " + resultado.toFixed(2))
    }
    else if (document.getElementById("tres").checked) {
        resultado = moneda / pesoUruguayo;
        alert("Con el cambio oficial serian: $ " + resultado.toFixed(2))
    }
    else {
        alert("Por favor, selecciona un tipo de cambio. ")
    }
}

/*SELECCION DE NACIONALIDAD*/
let nacionalidades = Number(prompt("Seleccione Nacionalidad: 1.Argentinx - 2.Brasilerx - 3.Uruguayx"));
switch (nacionalidades) {
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