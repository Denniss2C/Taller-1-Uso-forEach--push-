var personas = [];

function imprimirPersonas(){
    document.getElementById('arrPersonas').innerText = personas;
    document.getElementById('arrPersonas').append(" El arreglo tiene "+ personas.length + " elementos");
}

function imprimirNuevoPersonas(NuevoPersonas){
    document.getElementById('arrNuevoPersonas').innerText = nuevoPersonas;
    document.getElementById('arrNuevoPersonas').append(" El arreglo tiene "+ personas.length + " elementos");
}

function pushPersonas(){
    var input = document.getElementById('txtNombre');
    var nombre = input.value;
    var numero_elementos = personas.push(nombre);
    console.log("# de elementos en el arreglo = "+numero_elementos);
    input.value = "";
    imprimirPersonas();
}

function popPersonas(){
    var eliminado = personas.pop();
    console.log("Elemento eliminado = "+eliminado);
    imprimirPersonas();
}

function ushiftPersonas(){
    var input = document.getElementById('txtNombre');
    var nombre = input.value;
    var numero_elementos = personas.unshift(nombre);
    console.log("# de elementos en el arreglo = "+numero_elementos);
    input.value = "";
    imprimirPersonas();
}

function shiftPersonas(){
    var eliminado = personas.shift();
    console.log("Elemento eliminado = "+eliminado);
    imprimirPersonas();
}

function slicePersonas(){
    var strInicio = document.getElementById('txtInicio').value;
    var strFin = document.getElementById('txtFinal').value;
    var intInicio = parseInt(strInicio);
    var intFin = parseInt(strFin);
    var nuevoArregloPersonas = personas.slice(intInicio,intFin);
    imprimirNuevoPersonas(nuevoArregloPersonas);
    imprimirPersonas();

}

