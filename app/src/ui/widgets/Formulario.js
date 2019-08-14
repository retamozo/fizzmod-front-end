import React, { Component , Fragment } from 'react'
import ListadoUsuarios from "./ListadoUsuarios"
import { connect } from 'react-redux'
import {bindActionCreators} from "redux"
import {handleChange,handleSubmit,mostrarFormulario,pedirUsuarios} from "../../api/actions"

class Formulario extends Component {

    componentDidMount(){
        this.props.pedirUsuarios()
    }

    render() {
        let {handleSubmit,handleChange,usuario,usuarios,mostrar,mostrarFormulario,usuarios_fetch} = this.props
        return (
            <Fragment>
                {mostrar 
                ?<form onSubmit={handleSubmit} >
                    <input onChange={handleChange} type="text" placeholder="Usuario" value={usuario}/>
                    <button>Guardar</button>
                </form>
                :null}
                <button onClick={mostrarFormulario}>mostrar</button>
                <ListadoUsuarios usuarios={usuarios}/>
                <ul>
                    {usuarios_fetch.length
                    ? usuarios_fetch.map((usuario,i)=>
                        <li key={i}>{usuario.name}</li>
                    )
                    :<li>No hay usuarios</li>}
                </ul>
            </Fragment>
        )
    }
}

export default connect(
    
    store => ({
        usuario : store.usuario,
        usuarios : store.usuarios,
        mostrar : store.mostrar,
        error : store.error , 
        usuarios_fetch : store.usuarios_fetch
    }),

    dispatch => ({
        handleChange : bindActionCreators(handleChange,dispatch),
        handleSubmit : bindActionCreators(handleSubmit,dispatch),
        mostrarFormulario : bindActionCreators(mostrarFormulario,dispatch),
        pedirUsuarios : bindActionCreators(pedirUsuarios,dispatch)
    })

)(Formulario)