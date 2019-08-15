import React, { Component , Fragment } from 'react'
import ListadoUsuarios from "./ListadoUsuarios"
import { connect } from 'react-redux'
import {bindActionCreators} from "redux"
import {handleChange,handleSubmit,mostrarFormulario,pedirUsuarios} from "../../api/actions"

class Formulario extends Component {

    componentDidMount(){
        if(this.props.fetched) return;
        this.props.pedirUsuarios()
    }

    render() {
        let {handleSubmit,handleChange,usuario,usuarios,mostrar,mostrarFormulario,usuarios_fetch , fetching , fetched } = this.props
        return (
            <Fragment>
                {mostrar 
                ?<form onSubmit={handleSubmit} >
                    <div>
                        <input onChange={handleChange} type="text" placeholder="Usuario" value={usuario}/>
                    </div>
                    <div>
                        <input onChange={handleChange} type="text" placeholder="Contraseña" value={usuario}/>
                    </div>
                    <button>Guardar</button>
                </form>
                :null}
                <button onClick={mostrarFormulario}>mostrar</button>
                <ListadoUsuarios usuarios={usuarios}/>
                {fetching ? <p>Pidiendo usuarios...</p> : null }
                {fetched ? <p>Se recibieron todos los usuarios!</p> : null }
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
        usuarios_fetch : store.usuarios_fetch,
        fetched : store.fetched , 
        fetching : store.fetching
    }),

    dispatch => ({
        handleChange : bindActionCreators(handleChange,dispatch),
        handleSubmit : bindActionCreators(handleSubmit,dispatch),
        mostrarFormulario : bindActionCreators(mostrarFormulario,dispatch),
        pedirUsuarios : bindActionCreators(pedirUsuarios,dispatch)
    })

)(Formulario)