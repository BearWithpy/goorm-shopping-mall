import React from "react"

import { ChakraProvider, Box, theme } from "@chakra-ui/react"
import TopBar from "components/Demo/Todo/TopBar"
import TodoList from "components/Demo/Todo/TodoList"
import TodoAdd from "components/Demo/Todo/TodoAdd"

const TodoApps = () => {
    return (
        <ChakraProvider theme={theme}>
            <Box maxWidth="8xl" margin="auto" p={5}>
                <TopBar />
                <TodoList />
                <TodoAdd />
            </Box>
        </ChakraProvider>
    )
}

export default TodoApps
