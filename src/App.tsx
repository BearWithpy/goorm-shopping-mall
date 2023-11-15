import axios from "axios"

import { MainContent, NavBar } from "containers"
import Category from "models/category"
import Product from "models/product"
import React from "react"

function App() {
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
        <div className="App">
            <NavBar />
            <hr className="horizon-line" />
            <MainContent />
        </div>
    )
}

export default App
