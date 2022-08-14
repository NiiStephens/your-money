import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

const initialState = {
    IncomeTransactions: [
        {id:1, incomeText: "Salary", incomeAmount: 5000},
        {id:2, incomeText: "Allowance", incomeAmount: 500},
        {id:3, incomeText: "FringeBenefits", incomeAmount: 7000},
    ],

    ExpenditureTransactions: [
        {id:4, expenditureText: "Rent", expenditureAmount: 500},
        {id:5, expenditureText: "Loans", expenditureAmount: 200},
        {id:6, expenditureText: "Clothes", expenditureAmount: 200},
        
    ]
}

export const GlobalContext = createContext (initialState)

export const GlobalContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState )

    return (
        <GlobalContext.Provider value = {{
            IncomeTransactions: state.IncomeTransactions,
            ExpenditureTransactions: state.ExpenditureTransactions,
        }}>
            {children}
        </GlobalContext.Provider>
    )
    }
    
