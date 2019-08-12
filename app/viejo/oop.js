//OOP : Paradigma de Prototipos 
//Prototipo : Es un objeto. Se visualiza a traves de la propiedad de lectura __proto__. Si un objeto no puede encontrar una propiedad en su interior, va a bajar tantos prototipos como haya en su cadena hasta encontrarla o arrojar error. 
//Object - Function 
//Funciones : Objetos especiales con la habilidad de ser ejecutados, de orden superior, variadicas con ambito(scope) y contexto. 
/* 
function foo(a){} 
foo()
 */
function foo(){
    console.log(arguments)
}
//foo(1,"Hola")

//Scope : El alcance que tiene una funcion para llegar dentro del programa (Global+Local+Closure)
//Closure : Es un espacio reservado de memoria que se genera entre una funcion definida adentro de otra funcion. Todas las variables intermedias quedan "atrapas" en este ambito y son "intocables". 
/* 
function externa(){
    
    let a = 10

    let interna = () => {
        console.log(a)
    }

    return interna
}

let resultado = externa()
//Acá pasa el garbage collector y borra los punteros de todas las variables locales de la misma 
resultado() */


function MiClase(){
    
    let x = true
    let mi_propiedad_privada = 10

    let getter = () => {
        console.log(mi_propiedad_privada)
    }

    let setter = valor => {
        mi_propiedad_privada = valor
        console.log(mi_propiedad_privada)
    }

    return {getter,setter}
}

let instancia = MiClase()

//Contexto : Es una referencia al objeto que contiene a la misma funcion (default) y se puede encontrar en la variable "this". No es estatico y puede cambiar dependiendo la ejecucion de la misma o del dev. 

//window.bar = function(){}
//var bar = function(){}
function bar(){
    console.log(this)
}
//bar()

let obj = {
    a : 1,
    fn : function(){
        console.log(this)
        //let self = this
        //setTimeout(function(){
        setTimeout(()=>{
            console.log(this)
            //console.log(self)
        },0)
    }
}

//obj.fn()

function ctx(a,b){
    console.log("Params",a,b)
    console.log("Ctx",this)
    console.log("***********************")
}

ctx(1,2) //1 2 window{}
// bind - call - apply - new
ctx.call("call",10,20) //Ejecuta
ctx.apply("apply",[100,200]) //Ejecuta
/* 
let copia = ctx.bind("bind",10,20) //No Ejecuta
copia() 
*/
console.clear()

function conParametros(a,e){
    console.log(a,e)
}

document.addEventListener("click",conParametros.bind(null,10))
/*  
document.addEventListener("click",(e)=>{
    conParametros(10)
}) 
*/

//OPERADOR NEW : Ejecuta la funcion que tiene al lado PERO le reasigna su contexto con un objeto nuevo y vacio. Cuando termina la ejecucion, retorna ese objeto. 
/* 
let Persona = class {

}

Persona.call() 
*/
//Funcion Constructora : Cualquier funcion que pueda usarse con el operador new 
function Test(x){
    //let this = {}
    this.x = x
    //return this
}

let uno = new Test(1)
let diez = new Test(10)

Test.prototype.nuevo = true

console.dir(Test)
/* 
let nuevo = {}
test.call(nuevo)
return nuevo  
*/

function bax(a,b){
    let copia = Array.prototype.slice.call(arguments,0)
    /* 
    let a = 1
    let b = 2 
    */
   console.log(a,b)
   console.log(arguments[0],arguments[1])

   a = 10

   console.log(a,b)
   console.log(arguments[0],arguments[1])

   arguments[1] = 200

   console.log(a,b)
   console.log(arguments[0],arguments[1])
   console.log(copia)
}

bax(1,2)



//let nombre = "horacio" 
//nombre.length
//nombre[0]
//console.dir(new String("Horacio"))