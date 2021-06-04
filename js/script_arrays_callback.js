const titulo = "ARRAYS"; //Constantes que no se van a modificar
var personas = ['Dennis','Lucas','Ronaldo','Valeria','Angelica','Saul','Grace']; //Variable global

function imprimirPersonas(){
    setTimeout(function(){
        document.getElementById('arrPersonas').innerText =personas;
    },1000);
}

function appendArrPersonas(){
    let text = document.getElementById('txtLetra').value; ///Variables locales
    document.getElementById('arrResultado').append(text);
}
function innerTextArrPersonas(){
    let text = document.getElementById('txtLetra').value; ///Variables locales
    document.getElementById('arrResultado').innerText = text;
}
function innerHTMLArrPersonas(){
    let text = document.getElementById('txtLetra').value; ///Variables locales
    document.getElementById('arrResultado').innerHTML = text;
    let div = document.createElement('div');
    div.innerHTML = "<p style='color:blue'> Hoy juega <b>Ecuador</b><p>";
    document.getElementById('arrResultado').append(div);
}

function forEachPersonas(){
    personas.forEach((x) => {
        console.log(x);
        console.log(x.length);
        let b = document.createElement('b');
        let br = document.createElement('br');
        b.innerText = x;
        document.getElementById('arrResultado').append(b);
        //Append: agregar contenido al final
        document.getElementById('arrResultado').append(br);
    });
}

function everyPersonas(filtro){
    //every, todos complen con la condicion
    var resultado = personas.every((x) => x.includes(filtro));
    document.getElementById('arrResultado').innerText = resultado;
    //document.getElementById('arrResultado').append(resultado);
}

function somePersonas(filtro){
    //every, todos complen con la condicion
    var resultado = personas.some((x) => x.includes(filtro));
    document.getElementById('arrResultado').innerText = resultado;
    //document.getElementById('arrResultado').append(resultado);
}

function filterPersonas(filtro){
    document.getElementById('arrResultado').innerText = "";
    var arrNuevo = personas.filter((x) => x.toLowerCase().includes(filtro));
    arrNuevo.forEach((x) => {
        let b = document.createElement('b');
        let br = document.createElement('br');
        b.innerText = x;
        document.getElementById('arrResultado').append(b);
        //Append: agregar contenido al final
        document.getElementById('arrResultado').append(br);
    });
}

function mapPersonas(){
    //let arrNuevo = personas.map((x) => x.toLowerCase());// toUppedCase convierte en mayusculas
    let arrNuevo = personas.map((x) => x.toLowerCase());
    document.getElementById('arrResultado').innerText = arrNuevo;
}

function findPersonas(filtro){
    let resultado = personas.find((x) => x == filtro);
    document.getElementById('arrResultado').innerText = resultado;
}

function findIndexPersonas(filtro){
    let resultado = personas.findIndex((x) => x == filtro);
    document.getElementById('arrResultado').innerText = resultado;
}

