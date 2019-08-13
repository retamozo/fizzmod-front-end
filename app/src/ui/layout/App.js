import React , {Component,Fragment} from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Formulario from "../widgets/Formulario"
import Contador from "../widgets/Contador"

class App extends Component {

    constructor(){
        super()
        this.state = {
            links : [ "perfil" , "portfolio" , "contacto" ],
            mostrar : false,
            usuario : "",
            usuarios : []
        }
        this.mostrarFormulario = this.mostrarFormulario.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    mostrarFormulario(){
        this.setState({ mostrar : !this.state.mostrar })
    }

    handleChange(e){
        this.setState({ usuario : e.target.value })
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({ 
            usuarios : [...this.state.usuarios,this.state.usuario] ,
            usuario : ""
        })
    }

    render(){
        let {links,contador,mostrar,usuario,usuarios} = this.state
        return (
            <Fragment>
                <Header links={links}/>
                <Contador/>
                {mostrar ? 
                    <Formulario 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        usuario={usuario}
                        usuarios={usuarios}
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

