import React from "react";
import "./App.css"
import Balance from "./components/Balance"
import Header from "./components/Header"
import AddTransaction from "./components/AddTransaction"
import IncomeList from "./components/IncomeList";
import ExpenditureList from "./components/ExpenditureList"
import { GlobalContextProvider } from "./context/GlobalState"



function App() {
  return (
    <GlobalContextProvider>
    <div className="container">
      <div className="card">
      <Header />
      <Balance />
      <AddTransaction />
      <IncomeList />
      <ExpenditureList />
      </div>
    </div>
    </GlobalContextProvider>
    
  );
}

export default App;
