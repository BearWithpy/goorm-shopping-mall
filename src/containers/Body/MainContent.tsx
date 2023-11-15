import React from "react"
import styles from "./maincontent.module.css"

const MainContent = () => {
    return (
        <section className={styles.section}>
            <div className={styles.page_title}>Products</div>
            <div className={styles.buttons_section}>
                <button className={styles.buttons}>모두</button>
                <button className={styles.buttons}>전자기기</button>
                <button className={styles.buttons}>쥬얼리</button>
                <button className={styles.buttons}>남성의류</button>
                <button className={styles.buttons}>여성의류</button>
            </div>
            <div className={styles.products_section}></div>
        </section>
    )
}

export default MainContent
