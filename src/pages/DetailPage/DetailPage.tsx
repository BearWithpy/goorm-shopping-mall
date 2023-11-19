import React, { useEffect, useState } from "react"
import styles from "./detailpage.module.css"
import Loading from "pages/Loading/Loading"
import useProductStore from "apps/productStore"
import { useLocation, useNavigate } from "react-router-dom"
import AlreadyAddButton from "components/AddButton/AlreadyAddButton"
import Product from "models/product"
import useCartStore from "apps/cartStore"

const DetailPage = () => {
    const [loading, setLoading] = useState(true)
    const { detailProduct, setSelectedProduct } = useProductStore()
    const navigate = useNavigate()

    const [picked, setPicked] = useState(true)

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const queryValue = searchParams.get("id")

    const { cartItems, setCarts, total, calculateTotal } = useCartStore()

    const addToCart = (product: Product) => {
        setCarts(product)
        calculateTotal()
    }

    const loadData = async (id: string) => {
        setLoading(true)
        try {
            await setSelectedProduct(id)
        } catch (error) {
            console.error("Error loading data:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData(queryValue!)
    }, [])

    return (
        <section className={styles.section}>
            <div className={styles.page_title}>Products</div>

            <div className={styles.products_section}>
                {loading ? (
                    <Loading />
                ) : (
                    <div>
                        <div className={styles.product_container}>
                            <div className={styles.product_picture}>
                                <img
                                    src={detailProduct.image}
                                    alt={detailProduct.title}
                                />
                            </div>
                            <div className={styles.product_title_container}>
                                <div className={styles.product_title}>
                                    {detailProduct.title}
                                </div>
                            </div>
                            {picked ? (
                                <button
                                    className={`${styles.add_to_cart}`}
                                    onClick={() => {
                                        addToCart(detailProduct)
                                        setPicked(false)
                                    }}
                                >
                                    장바구니에 담기
                                </button>
                            ) : (
                                <AlreadyAddButton />
                            )}

                            <button
                                className={`${styles.add_to_cart}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    navigate("/cart")
                                }}
                            >
                                장바구니로 이동
                            </button>
                            <div className={styles.product_price}>
                                ${detailProduct.price}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default DetailPage
