//Lo que retorna un action SIEMPRE!!! es un objeto que como minimo tiene que tener la propiedad type, la cual tiene que contener el tipo de acción que queremos despachar al reducer.

export let aumentarContador = () => ({type:"CONTADOR_AUMENTAR"})

export let disminuirContador = () => ({type:"CONTADOR_DISMINUIR"})

export let resetearContador = () => ({type:"CONTADOR_RESETEAR"})