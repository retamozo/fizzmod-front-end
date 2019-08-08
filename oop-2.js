//SuperClass
function Persona(nombre,edad){
    //Atributos de configuracion de propiedades de objetos
    // value - writable - configurable - enumerable
    let n = nombre
    //Object.definePorperty()
    //Object.defineProperties()
    //Object.create()
    this.nombre = nombre
    /* Object.defineProperty(this,"nombre",{
        value : nombre,
         writable : false, //Permisos de escritura
        enumerable : false, //Permisos de iterabilidad
        configurable : false //Permisos de borrado 
    }) */
    this.edad = edad
    this.saludar = function(){
        console.log(`Hola soy ${n}`)
    }
    /* 
    Persona.prototype.saludar = function(){
        console.log(`Hola soy ${n}`)
    } 
    */
    //return this
}


//Instancia.__proto__ === Class.prototype
let juan = new Persona("Juan",30)
let ana = new Persona("Ana",30)

