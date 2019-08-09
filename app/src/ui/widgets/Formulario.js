import React, { Component } from 'react'

export default class Formulario extends Component {
    render() {
        let {handleSubmit,handleChange,usuario} = this.props
        return (
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} type="text" placeholder="Usuario" value={usuario}/>
                <button>Guardar</button>
            </form>
        )
    }
}
