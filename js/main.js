/*SELECCION DE NACIONALIDAD*/
let nacionalidades = Number(prompt("Seleccione Nacionalidad: 1.Argentinx, - 2.Brasilerx - 3.Uruguayx"));
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
/*SELECCIONAR TRANSACCION*/
let blues = [{
    nombreM: "Dolar Blue", valorM: 384
}, {
    nombreM: "Real Blue", valorM: 76
}, {
    nombreM: "Peso Uruguayo", valorM: 9
}]
/*---------------------------------------------*/
/*FUNCION PARA CONVERTIR MONEDA*/
let convertir = function () {
    let moneda = parseInt(document.getElementById("valor").value);
    let resultado = 0;

    /*CONSTRUCTOR*/
    class Monedas {
        constructor(nombre, valor, origen, simbolo) {
            this.nombre = nombre;
            this.valor = valor;
            this.origen = origen;
            this.simbolo = simbolo;
        }
    }
    /*---------------------------------------------*/
    /*DOLAR OFICIAL*/
    let moneda1 = new Monedas("Dolar", 384, "Estados Unidos", "US$");
    /*REAL OFICIAL*/
    let moneda2 = new Monedas("Real", 76, "Brasil", "R$");
    /*PESO URUGUAYO OFICIAL*/
    let moneda3 = new Monedas("Peso Uruguayo", 9, "Uruguay", "N$")
    /*---------------------------------------------*/
    /*CAMBIO A DOLARES*/
    if (document.getElementById("uno").checked) {
        resultado = moneda / moneda1.valor;
        alert("Al valor blue serian: US$ " + resultado.toFixed(2) + " " + "Dolares");
        blues.forEach(( _nombreM ) =>console.log("El usuario selecciono el "+blues[0].nombreM));
    }
    
    /*CAMBIO A REALES*/
    else if (document.getElementById("dos").checked) {
        resultado = moneda / moneda2.valor;
        alert("Al valor blue serian: R$ " + resultado.toFixed(2) + " " + "Reales");
        blues.forEach(( _nombreM ) =>console.log("El usuario selecciono el "+blues[1].nombreM));
    }
    /*CAMBIO A PESOS URUGUAYOS*/
    else if (document.getElementById("tres").checked) {
        resultado = moneda / moneda3.valor;
        alert("Al valor blue serian: N$ " + resultado.toFixed(2) + " " + "Pesos Uruguayos");
        blues.forEach(( _nombreM ) =>console.log("El usuario selecciono el "+blues[2].nombreM));
    }
    /*SINO INGRESA TIPO DE DIVISA*/
    else {
        alert("Por favor, selecciona un tipo de cambio. ");
    }
    /*CONSERVAR EL VALOR DE PESOS INGRESADOS*/
    console.log("Y ha ingresado para convertir:" + " " + moneda + " " + "pesos argentinos")
}
/*---------------------------------------------*/

