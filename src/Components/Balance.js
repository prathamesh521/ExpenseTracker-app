import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Balance = ({ Balance }) => {
    useEffect(() => {
        return localStorage.setItem('transactions', JSON.stringify(Balance))
    }, [Balance])

    console.log(Balance)
    const Amount = Balance.map(value => value.amount)
    const Total = Amount.reduce((acc,item) => (acc += item),0).toFixed(2)

    return(
        <div className='balance'>
            <div>
                <h4>Your Balance</h4>
                <h1>${Total}</h1>
            </div>
            
        </div>
    )
    
}

const mapStateToProps = (state) => {
    return{
        Balance: state.transactions
    }
}
export default connect(mapStateToProps)(Balance)