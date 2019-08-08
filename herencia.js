//Modelo Clasico

//Super Clase
function Persona(nombre,edad){
    this.nombre = nombre
    this.edad = edad
    Persona.prototype.saludo = function(){
        console.log("Hola")
    }
}

let juan = new Persona("Juan",30)


//Sub Clase
function Empleado(sueldo,nombre,edad){
    this.sueldo = sueldo
    //COMPOSICION
    //SuperClass.{apply|call}(this,...arg)
    //Persona() aca el this es window {}
    //new Persona() aca el this es nuevo {}
    //Persona.call(this,nombre,edad)
    Persona.apply(this,[nombre,edad])

    Empleado.prototype.trabajar = function(){
        console.log("Trabajo muy duro, como un esclavo...")
    }
}

//HERENCIA
//Subclass.prototype = Object.create(Superclass.prototype)
//Subclass.prototype.constructor = Subclass
Empleado.prototype = Object.create(Persona.prototype)
Empleado.prototype.constructor = Empleado

let pedro = new Empleado(1,"Pedro",30)

