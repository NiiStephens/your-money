import React, {useContext} from "react"
import { GlobalContext } from "../context/GlobalState"

function IncomeList () {
    const {IncomeTransactions} = useContext(GlobalContext)

    console.log(IncomeTransactions)
    
    
    return(
        
     <div className = "transactions transactions-income">
        <h2>Transaction History</h2>
        <ul className = "transaction-list">
        {IncomeTransactions.map(IncomeTransaction => (
            <li className = "transaction" key={IncomeTransaction.id}>
            <span className = "transaction-text">
                {IncomeTransaction.incomeText}
            </span>
            <span className = "transaction-amount">
                {IncomeTransaction.incomeAmount}
            </span>
            <button className = "delete-btn"> 
            <i className = "fas fa-trash"></i>
            </button>
        </li>
         
 ))}     
        
        </ul>
     </div>

    )
}
export default IncomeList