import React, { Component } from 'react'

export default class Usuario extends Component {
    render() {
        let {usuario} = this.props
        return (
            <li>{usuario}</li>
        )
    }
}
