import {
    Button,
    Container,
    Grid,
    IconButton,
    TextField,
    Typography,
} from "@mui/material"
import React from "react"

import Modal from "react-modal"
import CloseIcon from "@mui/icons-material/Close"
import styles from "./cartmodal.module.css"
import { Link, useNavigate } from "react-router-dom"
import CartPage from "pages/CartPage/CartPage"
import ModalContents from "./ModalContents"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
}

Modal.setAppElement("#root")

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
    content: {
        width: "570px",
        top: "420px",
        left: "1000px",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        marginBottom: "0",
        transform: "translate(-50%, -50%)",
    },
}

const CartModal = ({ isOpen, onClose }: ModalProps) => {
    const navigate = useNavigate()
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
            <IconButton onClick={onClose}>
                <CloseIcon />
            </IconButton>
            <Container
                component="main"
                maxWidth="xl"
                style={{ marginTop: "5%" }}
            >
                <Grid item xs={12} style={{ margin: "20px" }}>
                    {/* <Typography component="h1" variant="h5">
                        Cart Modal창입니다ㅏㅏㅏ
                    </Typography> */}
                </Grid>
                <ModalContents />
                {/* <CartPage /> */}
                <div className={`${styles.move_to_cart}`}>
                    <button
                        className={`${styles.move_to_cart}`}
                        onClick={(e) => {
                            e.preventDefault()
                            navigate("/cart")
                            onClose()
                        }}
                    >
                        장바구니로 이동
                    </button>
                </div>
            </Container>
        </Modal>
    )
}

export default CartModal
