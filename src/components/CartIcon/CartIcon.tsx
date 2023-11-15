import React, { useState } from "react"

import "components/CartIcon/styles/cartstyle.css"

import { IconButton } from "@mui/material"
import { ReactComponent as Cart } from "assets/icons/cart.svg"
import CartHeaderCounter from "./CartHeaderCounter"

const CartIcon = (): React.JSX.Element => {
    const [count, setCount] = useState(100)
    return (
        <div className="mixed-button">
            <IconButton
                aria-label="cart"
                size="large"
                color="inherit"
                onClick={() => {}}
            >
                <Cart width="35px" height="35px" />
                {count > 0 && <CartHeaderCounter count={count} />}
            </IconButton>
        </div>
    )
}

export default CartIcon
