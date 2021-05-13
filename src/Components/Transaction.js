import React from 'react'
import { connect } from 'react-redux'
import { deleteAction } from '../ReduxFiles/ActionCreators'

const Transaction = ({ DeleteTransaction, transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <div>
             <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text} 
                
                <span>{sign}${Math.abs(transaction.amount)}</span>

                <button onClick={() => DeleteTransaction(transaction.id)} 
                className="delete-btn">x</button>

            </li>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        DeleteTransaction: (id) => dispatch(deleteAction(id))
    }
}

export default connect(null, mapDispatchToProps)(Transaction)
