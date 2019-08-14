import React, { Component } from 'react'
import {Route,Switch} from "react-router-dom"
import Home from "../paginas/Home"
import Perfil from "../paginas/Perfil"
import Portfolio from "../paginas/Portfolio"
import Contacto from "../paginas/Contacto"

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" children={(props)=><Home {...props} />} exact/>
                    <Route path="/perfil" component={Perfil}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contacto" component={Contacto}/>
                </Switch>
            </main>
        )
    }
}
