import React from 'react'
import { connect } from 'react-redux'
import Transaction from './Transaction'

const TransactionList = ({ transactions }) => {
    return (
        <div>
            <h3>History</h3>
            <ul className='list'>
                {transactions.map((transaction) => (
                     <Transaction key = {transaction.id} transaction = 
                     { transaction }  />
                 ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        transactions: state.transactions
    }
}

export default connect(mapStateToProps)(TransactionList)
