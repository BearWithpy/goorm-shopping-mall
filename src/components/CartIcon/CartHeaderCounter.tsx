import React from "react"

interface CountProps {
    count: number
}
const CartHeaderCounter = ({ count }: CountProps): React.JSX.Element => {
    let counterClass

    if (count >= 99) {
        counterClass = "counter-number-over99"
    } else if (count > 9) {
        counterClass = "counter-number-over9"
    } else {
        counterClass = "counter-number"
    }

    return (
        <div className="header-count">
            {count > 0 && (
                <div className={counterClass}>
                    {count >= 99 ? "99+" : count}
                </div>
            )}
        </div>
    )
}

export default CartHeaderCounter
