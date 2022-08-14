import React, {useContext} from "react"
import { GlobalContext } from "../context/GlobalState"

function ExpenditureList () {
    const {ExpenditureTransactions} = useContext(GlobalContext)

    console.log(ExpenditureTransactions)
    
    
    return(
        
     <div className = "transactions transactions-expenditure">
        <h2>Transaction History</h2>
        <ul className = "transaction-list">
        {ExpenditureTransactions.map(ExpenditureTransaction => (
            <li className = "transaction" key = {ExpenditureTransaction.id}>
            <span className = "transaction-text">
                {ExpenditureTransaction.expenditureText}
            </span>
            <span className = "transaction-amount">
                {ExpenditureTransaction.expenditureAmount}
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
export default ExpenditureList