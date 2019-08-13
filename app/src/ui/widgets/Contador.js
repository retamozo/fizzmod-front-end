import React, { Component } from 'react'
import { connect } from "react-redux"
import { aumentarContador , disminuirContador , resetearContador } from "../../api/actions"
import { bindActionCreators } from "redux"

class Contador extends Component {
    render() {
        let {contador,aumentarContador,disminuirContador,resetearContador} = this.props
        return (
            <div>
                <p>Contador : {contador}</p>
                <button onClick={aumentarContador}>+</button>
                <button onClick={disminuirContador}>-</button>
                <button onClick={resetearContador}>resetear</button>
            </div>
        )
    }
}

let mapStateToProps = store => ({contador : store.contador})

/*

let mapDispatchToProps = () => ({aumentarContador:aumentarContador})
 
let mapDispatchToProps = dispatch => ({
    aumentarContador : ()=>dispatch({aumentarContador()})
})

*/

let mapDispatchToProps = dispatch => ({
    aumentarContador : bindActionCreators(aumentarContador,dispatch),
    resetearContador : bindActionCreators(resetearContador,dispatch),
    disminuirContador : bindActionCreators(disminuirContador,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Contador)