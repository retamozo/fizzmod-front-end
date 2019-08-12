/*
function Persona(nombre,edad){
    this.nombre = nombre
    this.edad = edad
    Persona.prototype.saludo = function(){}
}

function Empleado(){
    Persona.call(this,...args)
}
Empleado.prototype = Object.create(Persona.prototype)
Empleado.prototype.constructor = Empleado

*/

class Persona {

    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludo(){

    }

}

class Emleado extends Persona {

    constructor(sueldo,nombre,edad){
        super(nombre,edad)
        this.sueldo = sueldo
    }

    trabajar(){
        console.log("Trabajando...")
    }

}
