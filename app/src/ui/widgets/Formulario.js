import React, { Component , Fragment } from 'react'
import ListadoUsuarios from "./ListadoUsuarios"

export default class Formulario extends Component {
    render() {
        let {handleSubmit,handleChange,usuario,usuarios} = this.props
        return (
            <Fragment>
                <form onSubmit={handleSubmit} >
                    <input onChange={handleChange} type="text" placeholder="Usuario" value={usuario}/>
                    <button>Guardar</button>
                </form>
                <ListadoUsuarios usuarios={usuarios}/>
            </Fragment>
        )
    }
}
