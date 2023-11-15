import React from "react"

import "components/NavButtonGroup/styles/navbuttongroup.css"

import CartIcon from "components/CartIcon/CartIcon"
import LoginIcon from "components/LogInIcon/LoginIcon"
import LogoutIcon from "components/LogInIcon/LogoutIcon"
import UserIcon from "components/UserIcon/UserIcon"

const NavButtonGroup = (): React.JSX.Element => {
    return (
        <div className="nav-btn-group">
            <CartIcon />
            <UserIcon />
            <LoginIcon />
            <LogoutIcon />
        </div>
    )
}

export default NavButtonGroup
