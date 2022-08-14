import React from "react"

function Balance () {
    return(
     <div className = "balance">
        <h2>Current Balance</h2>
        <h3>GHS 0.00</h3>
        <div className = "income-expenditure">
            <div className = "plus">
                <h2>Income</h2>
                 <h4> +GHS 0.00</h4>
            </div>
            <div className = "minus">
                <h2>Expenditure</h2>
                <h4> -GHS 0.00</h4>
            </div>

        </div>
     </div>

    )
}
export default Balance