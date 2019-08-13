import React, { Component } from 'react'
import Usuario from "./Usuario"

export default class ListadoUsuarios extends Component {
    render() {
        let {usuarios} = this.props
        return (
            <ul>
            {usuarios.length
            ? usuarios.map((usuario,i)=>
                <Usuario key={i} usuario={usuario}/>
            )
            : <li>No tenes usuarios</li> }
            </ul>
        )
    }
}
