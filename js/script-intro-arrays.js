//ARREGLOS DE JAVASCRIPT
//Arreglo: Un conjunto de elementos definidos de una estructura
//DEFINICIONES
//Arreglo de Strings
var privincias = ['Cotopaxi',' Azuay',' Guayas',' EL Oro'];
//Arreglo de varios tipos de datos
var combinado = [20,' Dennis', true,' 2021-05-31'];
//Definir un arreglo por la longitud de elementos
var numeros_primos = new Array(11);
//Definir un arreglo por el constructor con sus elementos
var serie_fibonacci = new Array(1, 1, 2, 3, 5, 8, 13, 21);
//Definir un areeglo vacio
var figuras_geometricas = new Array();

//Funcion que imprime los arreglos 
function imprimirArreglos(){
    setTimeout(function(){
        document.getElementById('arrProvincias').innerText=privincias;
        document.getElementById('arrCombinado').innerText=combinado;
        document.getElementById('arrNumPrimos').innerText=numeros_primos;
        document.getElementById('arrSerieFib').innerText=serie_fibonacci;
        document.getElementById('arrFigGeo').innerText=figuras_geometricas;
    },2000);    
}

function imprimirCadaProvincia(){
    //con forEach se va a reconocer cada elemento del arreglo
    privincias.forEach((x) => {
        var li = document.createElement('li'); //Crea un nuevo elemento por su etiqueta HTML //<li></li>
        li.innerText = x;
        document.getElementById('ulProvincias').append(li);
    }); //El metodo forEach es un callback, lo que quiere decir es que impoemnta una funcion
}

function imprimirFibonacci(){
    serie_fibonacci.forEach((y) => {
        var li = document.createElement('li'); 
        li.innerText = y;
        document.getElementById('ulSerieFib').append(li);
    });
}

function agregrarFigura(){
    var nombre = document.getElementById('txtFigura').value;
    figuras_geometricas.push(nombre);
    document.getElementById('arrFigGeo').innerText=figuras_geometricas;
    document.getElementById('txtFigura').value = '';
}

function agregrarProvincia(){
    var agregar = document.getElementById('txtProvincias').value;
    privincias.push(agregar);
    document.getElementById('arrProvincias').innerText=privincias;
    document.getElementById('txtProvincias').value = '';
}

function cargarNumerosPrimos(){
    numeros_primos[0] = 1;
    numeros_primos[1] = 2;
    numeros_primos[2] = 3;
    numeros_primos[3] = 5;
    numeros_primos[4] = 7;
    numeros_primos[5] = 11;
    numeros_primos[6] = 13;
    numeros_primos[7] = 17;
    numeros_primos[8] = 19;
    numeros_primos[9] = 23;
    document.getElementById('arrPrimos').innerText = numeros_primos;
    document.getElementById('arrPrimos').append(" el arreglo tiene " + numeros_primos.length + " elementos");
}



