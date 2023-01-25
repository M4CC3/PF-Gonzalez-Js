/*SELECCION DE NACIONALIDAD*/
let nacionalidades = Number(prompt("Seleccione Nacionalidad: 1.Argentinx - 2.Brasilerx - 3.Uruguayx"));
switch (nacionalidades) {
    /*NACIONALIDAD ARGENTINA*/
    case 1:
        alert("Ha seleccionado la opcion para pagar mas impuestos");
        break;
    /*NACIONALIDAD BRASILEÑA*/
    case 2:
        alert("Parabéns, você não tem impostos");
        break;
    /*NACIONALIDAD URUGUAYA*/
    case 3:
        alert("Felicitaciones Vo, no tenes tantos impuestos");
        break;
    /*NO INGRESO NACIONALIDAD*/
    default:
        alert("me quede corto con los paises, perdon");
}
/*---------------------------------------------*/
/*FUNCION PARA CONVERTIR MONEDA*/
let convertir = function () {
    let moneda = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 185;/*DOLAR OFICIAL*/
    let real = 34;/*REAL OFICIAL*/
    let pesoUruguayo = 4.53;/*PESO URUGUAYO OFICIAL*/

    /*CAMBIO A DOLARES*/
    if (document.getElementById("uno").checked) {
        resultado = moneda / dolar;
        alert("Con el cambio oficial serian: US$ " + resultado.toFixed(2) + " " + "Dolares");
    }
    /*CAMBIO A REALES*/
    else if (document.getElementById("dos").checked) {
        resultado = moneda / real;
        alert("Con el cambio oficial serian: R$ " + resultado.toFixed(2) + " " + "Reales")
    }
    /*CAMBIO A PESOS URUGUAYOS*/
    else if (document.getElementById("tres").checked) {
        resultado = moneda / pesoUruguayo;
        alert("Con el cambio oficial serian: $ " + resultado.toFixed(2) + " " + "Pesos Uruguayos")
    }
    /*NO INGRESO TIPO DE DIVISA*/
    else {
        alert("Por favor, selecciona un tipo de cambio. ");
    }
    /*CONSERVAR EL VALOR DE PESOS INGRESADOS*/
    console.log("Ha ingresado" + " " + moneda + " " + "pesos argentinos")
}
/*---------------------------------------------*/
