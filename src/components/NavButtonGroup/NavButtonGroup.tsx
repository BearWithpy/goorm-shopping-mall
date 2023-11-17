import React, { useEffect, useState } from "react"

import "components/NavButtonGroup/styles/navbuttongroup.css"

import CartIcon from "components/CartIcon/CartIcon"
import LoginIcon from "components/LogInIcon/LoginIcon"
import LogoutIcon from "components/LogInIcon/LogoutIcon"
import UserIcon from "components/UserIcon/UserIcon"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"

const NavButtonGroup = (): React.JSX.Element => {
    const auth = getAuth()
    const [logined, setLogined] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLogined(!!currentUser)
        })

        return () => unsubscribe()
    }, [auth])

    return (
        <div className="nav-btn-group">
            <CartIcon />
            <UserIcon />
            {logined ? <LogoutIcon /> : <LoginIcon />}
        </div>
    )
}

export default NavButtonGroup
