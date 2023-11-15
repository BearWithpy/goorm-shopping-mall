import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react"

import useStore from "../../../apps/store"
import React from "react"

function TodoListItems(): React.JSX.Element {
    const store = useStore((state) => state)

    return (
        <>
            {store.todos.map((todo) => (
                <Flex pt={2} key={todo.id}>
                    <Checkbox
                        onClick={() => store.toggleTodo(todo.id)}
                        checked={todo.done}
                    />
                    <Input
                        mx={2}
                        value={todo.text}
                        onChange={(evt) =>
                            store.updateTodo(todo.id, evt.target.value)
                        }
                    />
                    <Button onClick={() => store.removeTodo(todo.id)}>
                        Delete
                    </Button>
                </Flex>
            ))}
        </>
    )
}

function TodoList() {
    return (
        <>
            <Heading>Todo List</Heading>
            <TodoListItems />
        </>
    )
}

export default TodoList
