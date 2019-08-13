import React, { Component } from 'react'
import {connect} from "react-redux"

class Contador extends Component {
    render() {
        return (
            <div>
                {/* <p>Contador : {contador}</p>
                <button onClick={this.aumentarContador}>+</button> */}
            </div>
        )
    }
}

let mapStateToProps = store => ({contador : store.contador})


export default connect(mapStateToProps,null)(Contador)