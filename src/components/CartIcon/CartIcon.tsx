import React, { useState } from "react"

import "components/CartIcon/styles/cartstyle.css"

import { IconButton } from "@mui/material"
import { ReactComponent as Cart } from "assets/icons/cart.svg"
import CartHeaderCounter from "./CartHeaderCounter"
import useCartStore from "apps/cartStore"

interface CartIconProps {
    handleCartModalOpen: () => void
    handleCartModalClose: () => void
}

const CartIcon = ({
    handleCartModalOpen,
    handleCartModalClose,
}: CartIconProps): React.JSX.Element => {
    const { cartItems } = useCartStore()

    return (
        <div className="mixed-button">
            <IconButton
                // onMouseEnter={handleCartModalOpen}
                aria-label="cart"
                size="large"
                color="inherit"
                onClick={handleCartModalOpen}
            >
                <Cart width="35px" height="35px" />
                {cartItems.length > 0 && <CartHeaderCounter />}
            </IconButton>
        </div>
    )
}

export default CartIcon
