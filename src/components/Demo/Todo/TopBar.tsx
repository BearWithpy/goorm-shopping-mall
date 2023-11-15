import React from "react"
import { Button, Grid } from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ModeSwitcher"

import useStore, { Todo } from "../../../apps/store"

function TopBar(): React.JSX.Element {
    const store = useStore()
    const onLoad = () => {
        fetch(
            "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
        )
            .then((resp) => resp.json())
            .then((tds: Todo[]) => store.setTodos(tds))
    }

    return (
        <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
            <ColorModeSwitcher />
            <Button onClick={onLoad}>Load</Button>
        </Grid>
    )
}

export default TopBar
