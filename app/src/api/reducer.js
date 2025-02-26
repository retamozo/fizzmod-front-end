let estadoInicial = {
    contador : 0,
    links : [ "perfil" , "portfolio" , "contacto" ],
    usuario : "",
    usuarios : [],
    mostrar : false,
    usuarios_fetch : [],
    error : null,
    fetching : false,
    fetched : false
}

let reducer = (estado=estadoInicial,action) => {
    switch(action.type){
        case "CONTADOR_AUMENTAR" : 
            return {...estado , contador : estado.contador + 1}
        case "CONTADOR_DISMINUIR" : 
            return {...estado , contador : estado.contador - 1}
        case "CONTADOR_RESETEAR" : 
            return {...estado , contador : 0}
        case "FORM_SUBMIT" : 
            return {...estado , usuarios : [...estado.usuarios,estado.usuario] , usuario : "" }
        case "FORM_CHANGE" :
            return {...estado , usuario : action.payload }
        case "FORM_MOSTRAR" :
            return {...estado , mostrar : !estado.mostrar }
        case "USUARIOS_FETCHING" :     
            return {...estado , fetching : true }
        case "USUARIOS_FETCH" : 
            return {...estado , usuarios_fetch : [...action.payload] , fetching : false , fetched : true }
        case "USUARIOS_ERROR" :
            return {...estado , error : "Hubo un error" , fetching : false}
        default : 
            return estado 
    }
}

export default reducer