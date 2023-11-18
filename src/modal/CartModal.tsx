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
import { useNavigate } from "react-router-dom"

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
        top: "15%",
        left: "75%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
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
                maxWidth="xs"
                style={{ marginTop: "5%", marginBottom: "10%" }}
            >
                <Grid item xs={12} style={{ margin: "20px" }}>
                    <Typography component="h1" variant="h5">
                        Cart Modal창입니다ㅏㅏㅏ
                    </Typography>
                </Grid>
                <button
                    className={`${styles.add_to_cart}`}
                    onClick={(e) => {
                        e.preventDefault()
                        navigate("/cart")
                        onClose()
                    }}
                >
                    장바구니로 이동
                </button>
            </Container>
        </Modal>
    )
}

export default CartModal
