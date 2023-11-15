import React from "react"

import "containers/Header/styles/navstyle.css"

import NavButtonGroup from "components/NavButtonGroup/NavButtonGroup"

const NavBar = (): React.JSX.Element => {
    return (
        <div className="navi">
            <h1 id="logo-title">SHOP</h1>
            <NavButtonGroup />
        </div>
    )
}

export default NavBar
