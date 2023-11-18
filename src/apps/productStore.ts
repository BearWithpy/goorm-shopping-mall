import axios from "axios"
import Category from "models/category"
import Product from "models/product"
import { create } from "zustand"

type ProductStore = {
    detailProduct: Product
    products: Product[]
    setSelectedProduct: (id?: string) => void
    setProducts: (category?: string) => void
}

// const getInitialData = async () => {
//     const url = "https://fakestoreapi.com/products"

//     const response = await axios.get<Product[]>(url)
//     const newProducts = response.data.map((product) => ({
//         id: product.id,
//         title: product.title,
//         price: product.price,
//         image: product.image,
//         category: product.category,
//         description: product.description,
//     }))

//     return newProducts
// }
// const initProduct = getInitialData()

const useProductStore = create<ProductStore>(
    (set): ProductStore => ({
        products: [],
        detailProduct: {
            id: 0,
            title: "",
            price: 0,
            category: Category.ALL,
            description: "",
            image: "",
        },
        setSelectedProduct: async (id?: string) => {
            const url = `https://fakestoreapi.com/products/${id}`
            const response = await axios.get<Product>(url)
            const detail = response.data

            set(() => ({
                detailProduct: detail,
            }))
        },

        setProducts: async (category?: string) => {
            let url = "https://fakestoreapi.com/products"
            if (category || category !== Category.ALL) {
                url += `/category/${category}`
            }

            const response = await axios.get<Product[]>(url)

            set(() => ({
                products: response.data,
            }))
        },
    })
)

export default useProductStore
