import React from 'react'
import Balance from './Balance'
import Header from './Header'
import IncomeExpense from './IncomeExpense'
import TransactionList from './TransactionList'

function Main() {
    return (
        <div>
            <Header/>
            <Balance/>
            <IncomeExpense/>
            <TransactionList/>
        </div>
    )
}

export default Main
