let estadoInicial = {
    contador : 0
}

let reducer = (estado=estadoInicial,action) => {
    switch(action.type){
        case "CONTADOR_AUMENTAR" : 
            return {...estado , contador : estado.contador + 1}
        case "CONTADOR_DISMINUIR" : 
            return {...estado , contador : estado.contador - 1}
        case "CONTADOR_RESETEAR" : 
            return {...estado , contador : 0}
        default : 
            return estado 
    }
}

export default reducer