import React, { useEffect, useState } from "react"
import styles from "./maincontent.module.css"
import Category from "models/category"
import useProductStore from "apps/productStore"
import Loading from "pages/Loading/Loading"
import { Grid } from "@mui/material"

const MainContent = () => {
    const store = useProductStore((state) => state)
    // const store = useProductStore()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadCategoryData(Category.ALL)
    }, [])

    const loadCategoryData = async (category: Category) => {
        setLoading(true)
        try {
            await store.setProducts(category)
        } catch (error) {
            console.error("Error loading data:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className={styles.section}>
            <div className={styles.page_title}>Products</div>
            <div className={styles.buttons_section}>
                <button
                    onClick={() => loadCategoryData(Category.ALL)}
                    className={styles.buttons}
                >
                    모두
                </button>
                <button
                    onClick={() => loadCategoryData(Category.ELECTRONICS)}
                    className={styles.buttons}
                >
                    전자기기
                </button>
                <button
                    onClick={() => loadCategoryData(Category.JEWELRY)}
                    className={styles.buttons}
                >
                    쥬얼리
                </button>
                <button
                    onClick={() => loadCategoryData(Category.MENS_CLOTHING)}
                    className={styles.buttons}
                >
                    남성의류
                </button>
                <button
                    onClick={() => loadCategoryData(Category.WOMENS_CLOTHING)}
                    className={styles.buttons}
                >
                    여성의류
                </button>
            </div>
            <div className={styles.products_section}>
                {loading ? (
                    <Loading />
                ) : (
                    // store.products.map((product) => (
                    //     <div
                    //         className={styles.product_container}
                    //         key={product.id}
                    //     >
                    //         <div className={styles.product_picture}>
                    //             <img src={product.image} alt={product.title} />
                    //         </div>
                    //         <div className={styles.product_title_container}>
                    //             <div className={styles.product_title}>
                    //                 {product.title}
                    //             </div>
                    //         </div>
                    //         <div className={styles.product_container_bottom}>
                    //             <button className={`${styles.add_to_cart}`}>
                    //                 장바구니에 담기
                    //             </button>
                    //             <div className={styles.product_price}>
                    //                 ${product.price}
                    //             </div>
                    //         </div>
                    //     </div>
                    // ))

                    <div>
                        Showing:{store.products.length} items
                        <Grid container spacing={3}>
                            {store.products.map((product) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                    key={product.id}
                                >
                                    <div className={styles.product_container}>
                                        <div className={styles.product_picture}>
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                            />
                                        </div>
                                        <div
                                            className={
                                                styles.product_title_container
                                            }
                                        >
                                            <div
                                                className={styles.product_title}
                                            >
                                                {product.title}
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                styles.product_container_bottom
                                            }
                                        >
                                            <button
                                                className={`${styles.add_to_cart}`}
                                            >
                                                장바구니에 담기
                                            </button>
                                            <div
                                                className={styles.product_price}
                                            >
                                                ${product.price}
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                )}
            </div>
        </section>
    )
}

export default MainContent
