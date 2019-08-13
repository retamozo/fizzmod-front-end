import React from "react"
import ReactDOM from "react-dom"
import App from "./ui/layout/App"
import {Provider} from "react-redux"
import store from "./api/store"

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)