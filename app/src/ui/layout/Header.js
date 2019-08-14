import React, { Component } from 'react'
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

class Header extends Component {
    render() {
        let {links} = this.props
        return (
            <header>
                <NavLink to="/" exact>
                    <h1>SPA</h1>
                </NavLink>
                <nav>
                {links.map((link,i)=>
                    <NavLink to={`/${link}`} key={i} >{link}</NavLink>
                )}
                </nav>
            </header>
        )
    }
}

export default connect(store=>({
    links : store.links
}))(Header)