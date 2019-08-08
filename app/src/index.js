/**
 * React se separa en : react y react-dom 
 * 
 * 1 - Tiene que SIEMPRE estar la variable React en scopa
 * 2 - Un componente de React es una funcion. 
 * 3 - Todos los componentes de React TIENEN QUE retornar : React.Component - String - DomNode
 * 4 - Todos los componentes de React van en mayuscula
 * 5 - Los componentes, para ejecutarlos, se escriben en JSX : 
 * 
 *  function App(){}
 * 
 *  App()   ===     <App/>
 * 
 */
//ES6
import React from "react"
import ReactDOM from "react-dom"
//CommonJS
//const React = require("react")
let App = () => "Hola Mundo"

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)