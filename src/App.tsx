import axios from "axios"
import TodoApps from "components/Demo/Todo/TodoApp"
import Category from "models/category"
import Product from "models/product"
import React from "react"

export default function App() {
    const func = async () => {
        const response = await axios.get<Product[]>(
            "https://fakestoreapi.com/products"
        )

        response.data.forEach(({ title, price, image }: Product) => {
            console.log({ title, price, image })
        })

        response.data
            .filter((item: Product) => item.category === Category.MensClothing)
            .forEach(({ title, price, image }: Product) => {
                console.log({ title, price, image })
            })

        response.data
            .filter((item: Product) => item.category === Category.Jewelry)
            .forEach(({ title, price, image }: Product) => {
                console.log({ title, price, image })
            })

        response.data
            .filter((item: Product) => item.category === Category.Electronics)
            .forEach(({ title, price, image }: Product) => {
                console.log({ title, price, image })
            })

        response.data
            .filter(
                (item: Product) => item.category === Category.WomensClothing
            )
            .forEach(({ title, price, image }: Product) => {
                console.log({ title, price, image })
            })
    }

    return (
        <>
            <button onClick={func}>res</button>
            <TodoApps />
        </>
    )
}
