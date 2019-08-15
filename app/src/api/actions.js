//Lo que retorna un action SIEMPRE!!! es un objeto que como minimo tiene que tener la propiedad type, la cual tiene que contener el tipo de acción que queremos despachar al reducer.
let url = "https://jsonplaceholder.typicode.com/"

export let aumentarContador = () => ({type:"CONTADOR_AUMENTAR"})

export let disminuirContador = () => ({type:"CONTADOR_DISMINUIR"})

export let resetearContador = () => ({type:"CONTADOR_RESETEAR"})

export let handleSubmit = e => {
    e.preventDefault()
    return {type:"FORM_SUBMIT"}
}

export let handleChange = e => ({type:"FORM_CHANGE",payload:e.target.value})

export let mostrarFormulario = () => ({type:"FORM_MOSTRAR"})

export let pedirUsuarios = () => {
    return dispatch => {
        
        dispatch({type:"USUARIOS_FETCHING"})

        fetch(`${url}users`)
        .then(res=>res.json())
        .then(res=>{
            dispatch({type:"USUARIOS_FETCH",payload:res})
        })
        .catch(()=>{
            dispatch({type:"USUARIOS_ERROR"})
        })

    }

}