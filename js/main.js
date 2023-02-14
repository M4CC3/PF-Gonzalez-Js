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
/* CAMBIAR MODO NOCTURNO*/
/*id="cambiar-fondo"*/
const colorFondoButton = document.querySelector("#cambiar-fondo");
const body = document.body;
colorFondoButton.addEventListener("click", cambiaFondo);
function cambiaFondo() {
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-white");
    if (body.classList.contains("bg-dark")) {
        colorFondoButton.innerText = "Claro ";
    }
    else {
        colorFondoButton.innerText = "Oscuro"
    }
}
/*---------------------------------------------*/
setTimeout(() => {
    Swal.fire({
        title: 'Bienvenidx!',
        text: 'Acepta aprobar esta entrega?',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3F72AF',
        background: '#DBE2EF',
        allowOutsideClick: false,
        allowEscapeKey: false,
    })
}, 1500);

/*---------------------------------------------*/
/*SELECCIONAR NACIONALIDAD*/
let nacionalidad = [{
    gentilicio: "Argentinx", paisOrigen: "Argentina", idioma: "Español"
}, {
    gentilicio: "Brasileñx", paisOrigen: "Brasil", idioma: "Portugues"
}, {
    gentilicio: "Uruguayx", paisOrigen: "Uruguay", idioma: "Español"
},
]
/*STORAGE + JSON*/
const nacionalidadJSON = JSON.stringify(nacionalidad);
localStorage.setItem("nacionalidad", nacionalidadJSON,);
const nacionalidadEnLocalStorage = localStorage.getItem("nacionalidad");

/*PARSE*/
const nacionalidadParse = JSON.parse(nacionalidadEnLocalStorage);

console.log(nacionalidadEnLocalStorage);
console.log(nacionalidadParse);
/*---------------------------------------------*/
/*SELECCIONAR MONEDA*/
let blues = [{
    nombreM: "Dolar Blue", valorM: 378
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
    /*ARGEN=DOLARES*/
    if (document.getElementById("one").checked && document.getElementById("uno").checked) {
        resultado = moneda / moneda1.valor;
        devolucion.innerText = ("Son: US$" + resultado.toFixed(2) + " " + "Dolares");
        blues.forEach((_nombreM) => console.log("Es Argentinx. Ha ingresado: $" + moneda + " Pesos Argentinos. " + "Elige cambiar a " + blues[0].nombreM + " y el total es: US$" + resultado.toFixed(2) + " " + "Dolares"));
    }
    /*--------------*/
    /*ARGEN=REALES*/
    else if (document.getElementById("one").checked && document.getElementById("dos").checked) {
        resultado = moneda / moneda2.valor;
        devolucion.innerText = ("Son: R$" + resultado.toFixed(2) + " " + "Reales");
        blues.forEach((_nombreM) => console.log("Es Argentinx. Ha ingresado: $" + moneda + " Pesos Argentinos. " + "Elige cambiar a " + blues[1].nombreM + " y el total es: R$" + resultado.toFixed(2) + " " + "Reales"));
    }
    /*--------------*/
    /*ARGEN=PESOS URUGUAYOS*/
    else if (document.getElementById("one").checked && document.getElementById("tres").checked) {
        resultado = moneda / moneda3.valor;
        devolucion.innerText = ("Son: N$" + resultado.toFixed(2) + " " + "Pesos Uruguayos");
        blues.forEach((_nombreM) => console.log("Es Argentinx. Ha ingresado: $" + moneda + " Pesos Argentinos. " + "Elige cambiar a " + blues[2].nombreM + " y el total es: N$" + resultado.toFixed(2) + " " + "Pesos Uruguayos"));
    }
    /*--------------*/
    /*BRASILEÑX=DOLARES*/
    else if (document.getElementById("two").checked && document.getElementById("uno").checked) {
        resultado = moneda / moneda1.valor;
        devolucion.innerText = ("Os resultados da troca são: US$" + resultado.toFixed(2) + " " + "Dolares");
        blues.forEach((_nombreM) => console.log("Es Brasileñx. Ha ingresado: $" + moneda + " Pesos Argentinos. " + "Elige cambiar a " + blues[0].nombreM + " y el total es: US$" + resultado.toFixed(2) + " " + "Dolares"));
    }
    /*--------------*/
    /*BRASILEÑX=REALES*/
    else if (document.getElementById("two").checked && document.getElementById("dos").checked) {
        resultado = moneda / moneda2.valor;
        devolucion.innerText = ("Os resultados da troca são: R$" + resultado.toFixed(2) + " " + "Reales");
        blues.forEach((_nombreM) => console.log("Es Brasileñx. Ha ingresado: $" + moneda + " Pesos Argentinos. " + "Elige cambiar a " + blues[1].nombreM + " y el total es: R$" + resultado.toFixed(2) + " " + "Reales"));
    }
    /*--------------*/
    /*BRASILEÑX=PESOS URUGUAYOS*/
    else if (document.getElementById("two").checked && document.getElementById("tres").checked) {
        resultado = moneda / moneda3.valor;
        devolucion.innerText = ("Os resultados da troca são: N$" + resultado.toFixed(2) + " " + "Pesos Uruguaios");
        blues.forEach((_nombreM) => console.log("Es Brasileñx. Ha ingresado: $" + moneda + " Pesos Argentinos. " + "Elige cambiar a " + blues[2].nombreM + " y el total es: N$" + resultado.toFixed(2) + " " + "Pesos Uruguayos"));
    }
    /*--------------*/
    /*URUGUAYX=DOLARES*/
    else if (document.getElementById("three").checked && document.getElementById("uno").checked) {
        resultado = moneda / moneda1.valor;
        devolucion.innerText = ("Son: US$" + resultado.toFixed(2) + " " + "Dolares");
        blues.forEach((_nombreM) => console.log("Es Uruguayx. Ha ingresado: $" + moneda + " Pesos Argentinos. " + "Elige cambiar a " + blues[0].nombreM + " y el total es: US$" + resultado.toFixed(2) + " " + "Dolares"));
    }
    /*--------------*/
    /*URUGUAYX=REALES*/
    else if (document.getElementById("three").checked && document.getElementById("dos").checked) {
        resultado = moneda / moneda2.valor;
        devolucion.innerText = ("Son: R$" + resultado.toFixed(2) + " " + "Reales");
        blues.forEach((_nombreM) => console.log("Es Uruguayx. Ha ingresado: $" + moneda + " Pesos Argentinos. " + "Elige cambiar a " + blues[1].nombreM + " y el total es: R$" + resultado.toFixed(2) + " " + "Reales"));
    }
    /*--------------*/
    /*URUGUAYX=PESOS URUGUAYOS*/
    else if (document.getElementById("three").checked && document.getElementById("tres").checked) {
        resultado = moneda / moneda3.valor;
        devolucion.innerText = ("Son: N$" + resultado.toFixed(2) + " " + "Pesos Uruguayos");
        blues.forEach((_nombreM) => console.log("Es Uruguayx. Ha ingresado: $" + moneda + " Pesos Argentinos. " + "Elige cambiar a " + blues[2].nombreM + " y el total es: N$" + resultado.toFixed(2) + " " + "Pesos Uruguayos"));
    }
    /*--------------*/
    /*NO INGRESA NACIONALIDAD O TIPO DE DIVISA*/
    else {
        devolucion.innerText = ("Por favor, selecciona Nacionalidad y un tipo de cambio. ");
    }
    /*---------------------------------------------*/
    /*LOCAL STORAGE*/
    localStorage.setItem("Pesos AR", moneda,);
    localStorage.setItem("Resultado", resultado,);
}
/*---------------------------------------------*/
