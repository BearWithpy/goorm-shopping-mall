import React from "react"
import useCartStore from "apps/cartStore"
import styles from "./cartcontent.module.css"
import Counter from "components/Counter/Counter"

import { ReactComponent as TrashBin } from "assets/icons/bin.svg"
import { IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"

const CartContent = () => {
    const { cartItems, total, clearCarts, deleteOneFromCarts, calculateTotal } =
        useCartStore()

    const navigate = useNavigate()
    return (
        <div>
            <div className={styles.page_title}>장바구니</div>
            {cartItems.map((item) => (
                <li key={item.id}>
                    <div>{item.category}</div>
                    <div onClick={() => navigate(`/detail?id=${item.id}`)}>
                        {item.title}
                    </div>
                    <div>
                        {item.price}x{item.quantity} = $
                        {parseFloat((item.price * item.quantity).toFixed(2))}
                    </div>
                    <Counter count={item.quantity} productId={item.id} />
                    <IconButton
                        aria-label="cart"
                        size="large"
                        color="inherit"
                        onClick={() => {
                            deleteOneFromCarts(item.id)
                            calculateTotal()
                        }}
                    >
                        <TrashBin width="35px" height="35px" />
                    </IconButton>
                </li>
            ))}
            <div>Total: ${total}</div>
            <button
                className={`${styles.calc_cart}`}
                onClick={(e) => {
                    e.preventDefault()
                    clearCarts()
                }}
            >
                계산하기
            </button>
        </div>
    )
}

export default CartContent
