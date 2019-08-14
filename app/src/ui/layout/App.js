import React , {Fragment} from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Formulario from "../widgets/Formulario"

let App = () =>
    <Fragment>
        <Header/>
        <Formulario/> 
        <Main />
        <Footer/>
    </Fragment>


export default App 

