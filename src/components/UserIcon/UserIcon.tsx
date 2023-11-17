import React from "react"

import { ReactComponent as User } from "assets/icons/user.svg"
import { IconButton } from "@mui/material"

const UserIcon = () => {
    return (
        <div className="mixed-button">
            <IconButton
                aria-label="delete"
                size="large"
                color="inherit"
                onClick={() => {
                    alert(`uh uh oh... access denied!`)
                }}
            >
                <User width="35px" height="35px" />
            </IconButton>
        </div>
    )
}

export default UserIcon
