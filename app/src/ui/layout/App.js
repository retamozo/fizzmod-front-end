import React , {Component,Fragment} from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Formulario from "../widgets/Formulario"

class App extends Component {

    constructor(){
        super()
        this.state = {
            links : [ "perfil" , "portfolio" , "contacto" ],
            contador : 0,
            mostrar : false,
            usuario : ""
        }
        this.aumentarContador = this.aumentarContador.bind(this)
        this.mostrarFormulario = this.mostrarFormulario.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    aumentarContador(){
        this.setState({ contador : this.state.contador + 1 })
    }

    mostrarFormulario(){
        this.setState({ mostrar : !this.state.mostrar })
    }

    handleChange(e){
        this.setState({ usuario : e.target.value })
    }

    handleSubmit(e){
        e.preventDefault()
    }

    render(){
        let {links,contador,mostrar,usuario} = this.state
        return (
            <Fragment>
                <Header links={links}/>
                <p>Contador : {contador}</p>
                <button onClick={this.aumentarContador}>+</button>
                {mostrar ? 
                    <Formulario 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        usuario={usuario}
                    /> 
                    : null
                }
                <button onClick={this.mostrarFormulario}>mostrar</button>
                <Main/>
                <Footer/>
            </Fragment>
        )
    }
}

export default App 

