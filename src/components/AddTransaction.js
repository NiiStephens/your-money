import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction () {
  const { addIncome, addExpenditure } = useContext(GlobalContext)

   const [income, setIncome] = useState({
     incomeText: "",
     incomeAmount: "",
   })

   const { incomeText, incomeAmount } = income

function onChangeIncome (event) {
     setIncome({ ...income, [event.target.name]: event.target.value })
     console.log (onChangeIncome)
   };

   

   function onSubmitIncome (event) {
     event.preventDefault()
     

     if (incomeText !== "") {
       const newIncomeTransaction = {
         id: uuidv4(),
         incomeText,
         incomeAmount: incomeAmount * 1,
       };

      function addIncome (newIncomeTransaction){
        return newIncomeTransaction
        
      }

      console.log(addIncome)

       setIncome({
         incomeText: "",
         incomeAmount: "",
       })
     }
   }

   const [expenditure, setExpenditure] = useState({
     expenditureText: "",
     expenditureAmount: "",
   })

   const { expenditureText, expenditureAmount } = expenditure;

function onChangeExpenditure (event) {
     setExpenditure({ ...expenditure, [event.target.name]: event.target.value })
   };

function onSubmitExpenditure (event) {
     event.preventDefault();

     if (expenditureText !== "") {
       const newExpenditureTransaction = {
         id: uuidv4(),
         expenditureText,
         expenditureAmount: expenditureAmount * 1
       }

       addExpenditure(newExpenditureTransaction)

       setExpenditure({
         expenditureText: "",
         expenditureAmount: 0,
       })
     }
   }
 

return(
<>
{/* Income Group Form */}
    <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
        <input
            type="text"
            name="incomeText"
            value={incomeText}
            placeholder="Add Income..."
            autoComplete="off"
            onChange={onChangeIncome}
       />
       <input
            type="number"
            name="incomeAmount"
            value={incomeAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
       />
       <input type="submit" value="Add Income" />
     </div>
   </form>
   
   {/* Expenditure Group Form */}
   <form onSubmit={onSubmitExpenditure}>
     <div className="input-group expenditure">
       <input
         type="text"
         name="expenditureText"
         value={expenditureText}
         placeholder="Add Expenditure..."
         autoComplete="off"
         onChange={onChangeExpenditure}
       />
       <input
         type="number"
         name="expenditureAmount"
         value={expenditureAmount}
         placeholder="Amount"
         autoComplete="off"
         onChange={onChangeExpenditure}
       />
       <input type="submit" value="Add Expenditure" />
     </div>
  </form>
</>
)

}           
export default AddTransaction;