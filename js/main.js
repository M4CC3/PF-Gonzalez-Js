class Producto {
    constructor(descripcion, precio, precioConversion) {
        this.descripcion = descripcion.toUpperCase();
        this.precio = parseFloat(precio);
        this.precioConversion = precioConversion;
        this.retencion = 0;
        this.impuesto = 0;
        this.totalImpuesto = 0;
    }
    retenciones() {
        this.retencion = this.precioConversion * valorRetencion;
    }
    impuestoPais() {
        this.impuesto = this.precioConversion * valorImpuesto;
    }
    valorConImpuestos() {
        this.totalImpuesto = this.precioConversion + this.retencion + this.impuesto;
    }
}

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

        /*CONSTRUCTOR*/
    function Monedas(nombre, valor, origen, simbolo){
        this.nombre = nombre;
        this.valor = valor;
        this.origen = origen;
        this.simbolo = simbolo;


    }
    /*DOLAR OFICIAL*/
    let moneda1 = new Monedas ("Dolar", 185, "Estados Unidos", "US$");

    /*REAL OFICIAL*/
    let moneda2 = new Monedas ("Real", 34, "Brasil", "R$");

    /*PESO URUGUAYO OFICIAL*/
    let moneda3 = new Monedas ("Peso Uruguayo", 4.71, "Uruguay", "N$")


    /*CAMBIO A DOLARES*/
    if (document.getElementById("uno").checked) {
        resultado = moneda / moneda1.valor;
        alert("Con el cambio oficial serian: US$ " + resultado.toFixed(2) + " " + "Dolares");
    }
    /*CAMBIO A REALES*/
    else if (document.getElementById("dos").checked) {
        resultado = moneda / moneda2.valor;
        alert("Con el cambio oficial serian: R$ " + resultado.toFixed(2) + " " + "Reales")
    }
    /*CAMBIO A PESOS URUGUAYOS*/
    else if (document.getElementById("tres").checked) {
        resultado = moneda / moneda3.valor;
        alert("Con el cambio oficial serian: N$ " + resultado.toFixed(2) + " " + "Pesos Uruguayos")
    }
    /*SINO INGRESA TIPO DE DIVISA*/
    else {
        alert("Por favor, selecciona un tipo de cambio. ");
    }
    /*CONSERVAR EL VALOR DE PESOS INGRESADOS*/
    console.log("Ha ingresado" + " " + moneda + " " + "pesos argentinos")
}
/*---------------------------------------------*/


//console.log(moneda1.valor)
/*---------------------------------------------*/
