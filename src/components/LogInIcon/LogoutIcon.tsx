import React from "react"
import { IconButton } from "@mui/material"
import { ReactComponent as Logout } from "assets/icons/logout.svg"

const LogoutIcon = () => {
    return (
        <div className="mixed-button">
            <IconButton
                aria-label="delete"
                size="large"
                color="inherit"
                onClick={() => {}}
            >
                <Logout width="35px" height="35px" />
            </IconButton>
        </div>
    )
}

export default LogoutIcon
