/**
 * 
 * TIPOS DE DATOS 
 * 
 * 
 * - undefined : una variable sin valor
 * - NULL : "refenrecia" a ningun objeto
 * 
 * Primitivos : Se pasan por valor
 * - String  : "" - '' - ``
 * - Boolean : true ó false
 *  
 *  {TRUE|any!FALSE} ó {FALSE|0|NULL|""|undefined}
 *  
 * - Number : 1 , -2  , 9.9
 * 
 * Objetos : Se pasan por referencia. Todos son matrices indexada asociativas
 * - Object
 * - Array (+indexada secuiencial)
 * - Function (+ejecutable)
 * 
 */

//Desasignacion 
var a = 1;
//a = undefined; NO
a = null;

//Por Valor
var a = 1;
var b = a;
b = 2;

//Por Referencia
var a = {x:1};
var b = a;
b.x = 10;

var a = [1,2,3];
a.x = true;

//API WEB : 
//https://developer.mozilla.org/es/docs/Web/API
//Window = BOM = Browser Object Model = window = Objeto global 
//window.foo = function foo(){}
//var foo = function(){}
function foo(){}
//var foo = () => {}
foo.x = true;

/**
 * outer{Width|Height} => Number - medidas en pixeles del navegador
 * inner{Width|Height} => Number - medidas en pixeles del DOM
 * screen.{width|height} => Number - medidas de hardware
 * 
 * location => Object - Nos permite jugar con la barra de direccion 
 * 
 * history => Object - Nos permite jugar con el historial de la sesion   
 * 
 */
//console.table(Any) => Nos muestra una variable en formato tabular
//console.dir(Any) => Nos muestra una variable en formato JSON
/* 
console.time("Contador")
for (let index = 0; index < 1000000; index++) {
}
console.timeEnd("Contador")

function uno(){dos()}
function dos(){tres()}
function tres(){cuatro()}
function cuatro(){
    console.warn("Error")
    console.error("Error")
}

uno()
*/

//DOM = Document Object Model 

//Seleccion de Nodo
var titulo = document.getElementById("titulo");
var titulo = document.getElementsByClassName("titulo");
var titulo = document.getElementsByTagName("h1");

var titulo = document.querySelector("#titulo");
var titulo = document.querySelector(".titulo");
var titulo = document.querySelector("h1");
var titulos = document.querySelectorAll("#titulo");
var titulos = document.querySelectorAll(".titulo");
var titulos = document.querySelectorAll("h1");


//Creacion de Nodo 
var a = document.createElement("a");
a.innerText = "lo que sea";
a.href = "http://google.com";
//a.innerHTML = "<p>lo que sea</p>";

var a_copia = a.cloneNode(true);

//NodoTarget.appendChild(nuevoNodo);
document.body.appendChild(a);
titulos[0].appendChild(a_copia);

//XSS = Cross-Site Scripting 

var ul = document.querySelector("ul");
let f = document.createDocumentFragment();

for (let index = 0; index < 5; index++) {
    var li = document.createElement("li");
    li.innerText = `Item ${index}`;
    //ul.appendChild(li);
    f.appendChild(li);
}

ul.appendChild(f);

/**
 * 
 * La mayoria de las m,anipulaciones del DOM activan un relayout : 
 * 
 * - rendering : Es lo que tarda el interprete de HTML en calcular la geometria de cada nodo
 * - painting : Es lo que tarda el interprete de CSS en pintar lo que se cambio en el rendering 
 * 
 */

//Eventos
let btn = document.querySelector("button")
//btn.onclick = console.log('Hola Mundo')
/* 
btn.onclick = bar;
btn.onclick = function(){
    console.log("Segundo Callback")
}

function bar(){
    console.log("Hola Mundo")
} 
*/

/* document.body.addEventListener("click",e=>{
    e.stopPropagation();
    console.log("Click del body")
},true);

btn.addEventListener("click",e=>{
    e.stopPropagation();
    console.log("Hola Mundo")
},true); */

btn.addEventListener("click",e=>{
    e.stopPropagation();
    console.log("Hola Mundo 2");
    var btn_nuevo = document.createElement("button");
    btn_nuevo.id = "nuevo"
    btn_nuevo.innerText = "Nuevo Boton"
    //btn_nuevo.addEventListener("··")
    document.body.appendChild(btn_nuevo)
}/*,true*/);

/**
 * Propagacion de Eventos : 
 * 
 * - Bubbling : (Burbujeo) Propaga desde adentro hacia afuera 
 * 
 * - Capturing : El inverso al bubbling 
 * 
 */

//var nuevo = document.getElementById("nuevo")
//nuevo.addEventListener("click",()=>{})

document.body.addEventListener("click",e=>{
   if (e.target.id == "nuevo") {
       console.log("Click del boton nuevo")
   }
})


/**
 * 
 * form : submit
 * 
 * a : click
 * 
 */

var a = document.querySelector("a")
a.addEventListener("click", e => {
    e.preventDefault();
    //Usamos prevent default porque hay algunos elementos en la sesion que vienen con comportamientos predefinidos y en algunos casos no queremos que eso pase, entonces para cancelar eso, desde el objeto Event ejecutamos su metodo Event.preventDefault()
    console.log("Click")
})

/**
 * Subir todo el trabajo en un branch nuevo y pushearlo a un repo en GitHub 
 * 
 * 1) Hacer una etiqueta <a> en HTMl
 * 2) Agarrarla con JS
 * 3) Asignarle un evento de "click"
 * 4) El callback del click tiene que poder crear un elemento <p> y dos <button>, todo adentro de un <div> (Se crean con JS)
 * 5) El <p> tiene que decir "Esta seguro que quiere abandonar la página" y los botones "aceptar" y "cancelar", respectivamente
 * 6) Si se hace click en aceptar , se tiene que redirigir al usuario al href del <a>
 * 7) Si se hace click en cancelar, se tiene que borrar el mensaje 
 * 
 * 
 */