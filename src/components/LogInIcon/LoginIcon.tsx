import React from "react"

import { IconButton } from "@mui/material"
import { ReactComponent as Login } from "assets/icons/login.svg"

const LoginIcon = () => {
    return (
        <div className="mixed-button">
            <IconButton
                aria-label="delete"
                size="large"
                color="inherit"
                onClick={() => {}}
            >
                <Login width="35px" height="35px" />
            </IconButton>
        </div>
    )
}

export default LoginIcon
