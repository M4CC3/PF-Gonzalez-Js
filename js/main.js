/*---------------------------------------------*/
///*PROMPT: SELECCION DE NACIONALIDAD*/
//let nacionalidades = Number(prompt("Seleccione Nacionalidad: 1.Argentinx, - 2.//Brasilerx - 3.Uruguayx"));
//switch (nacionalidades) {
//    /*NACIONALIDAD ARGENTINA*/
//    case 1:
//        alert("Ha seleccionado la opcion para pagar mas impuestos");
//        console.log("Es Argentinx");
//        break;
//    /*NACIONALIDAD BRASILEÑA*/
//    case 2:
//        alert("Parabéns, você não tem impostos");
//        console.log("Es Brasileñx");
//        break;
//    /*NACIONALIDAD URUGUAYA*/
//    case 3:
//        alert("Felicitaciones Vo, no tenes tantos impuestos");
//        console.log("Es Uruguayx");
//        break;
//    /*NO INGRESO NACIONALIDAD*/
//    default:
//        alert("me quede corto con los paises, perdon");
//}
/*---------------------------------------------*/
/* CLASS CONSTRUCTOR*/
class Monedas {
    constructor(nombre, valor, origen, simbolo) {
        this.nombre = nombre;
        this.valor = valor;
        this.origen = origen;
        this.simbolo = simbolo;
    }
}
/*---------------------------------------------*/
/*SELECCIONAR NACIONALIDAD*/
let nacionalidad = [{
    gentilicio: "Argentinx", paisOrigen: "Argentina", idioma: "Español"
}, {
    gentilicio: "Brasileñx", paisOrigen: "Brasil", idioma: "Portugues"
}, {
    gentilicio: "Uruguayx", paisOrigen: "Uruguay", idioma: "Español"
},]
/*---------------------------------------------*/
/*SELECCIONAR MONEDA*/
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
    /*---------------------------------------------*/
    /*DOLAR OFICIAL*/
    let moneda1 = new Monedas("Dolar", 384, "Estados Unidos", "US$");
    /*REAL OFICIAL*/
    let moneda2 = new Monedas("Real", 76, "Brasil", "R$");
    /*PESO URUGUAYO OFICIAL*/
    let moneda3 = new Monedas("Peso Uruguayo", 9, "Uruguay", "N$")
    /*---------------------------------------------*/
    /*ARGENTINX CAMBIA A DOLARES*/
    if (document.getElementById("one").checked && document.getElementById("uno").checked) {
        resultado = moneda / moneda1.valor;
        devolucion.innerText = ("Al valor blue serian: US$" + resultado.toFixed(2) + " " + "Dolares");
        blues.forEach((_nombreM) => console.log("Es Argentinx. Ha ingresado: $" + moneda + " Pesos Argentinos. " + "Elige cambiar a " + blues[0].nombreM + " y el total es: US$" + resultado.toFixed(2) + " " + "Dolares"));
    }
    /*--------------*/
    /*ARGENTINX CAMBIA A DOLARES*/
    if (document.getElementById("one").checked && document.getElementById("dos").checked) {
        resultado = moneda / moneda1.valor;
        devolucion.innerText = ("Al valor blue serian: US$" + resultado.toFixed(2) + " " + "Dolares");
        blues.forEach((_nombreM) => console.log("Es Argentinx. Ha ingresado: $" + moneda + " Pesos Argentinos. " + "Elige cambiar a " + blues[0].nombreM + " y el total es: US$" + resultado.toFixed(2) + " " + "Dolares"));
    }
    /*--------------*/
    /*CAMBIO A REALES*/
    else if (document.getElementById("dos").checked) {
        resultado = moneda / moneda2.valor;
        devolucion.innerText = ("Al valor blue serian: R$" + resultado.toFixed(2) + " " + "Reales");
        blues.forEach((_nombreM) => console.log("Ha ingresado: $" + moneda + " Pesos Argentinos. " + "Elige cambiar a " + blues[1].nombreM + " y el total es: R$" + resultado.toFixed(2) + " " + "Reales"));
    }
    /*--------------*/
    /*CAMBIO A PESOS URUGUAYOS*/
    else if (document.getElementById("tres").checked) {
        resultado = moneda / moneda3.valor;
        devolucion.innerText = ("Al valor blue serian: N$ " + resultado.toFixed(2) + " " + "Pesos Uruguayos");
        blues.forEach((_nombreM) => console.log("Ha ingresado: $" + moneda + " Pesos Argentinos. " + "Elige cambiar a " + blues[2].nombreM + " y el total es: N$" + resultado.toFixed(2) + " " + "Pesos Uruguayos"))
    }
    /*--------------*/
    /*NO INGRESA TIPO DE DIVISA*/
    else {
        devolucion.innerText = ("Por favor, selecciona Nacionalidad y un tipo de cambio. ");
    }
}
/*---------------------------------------------*/
