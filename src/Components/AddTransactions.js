import React, {useState} from 'react'
import { addAction } from '../ReduxFiles/ActionCreators';
import { connect } from 'react-redux'

const AddTransactions = ({ AddTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) =>{
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random()* 100000000),
            text,
            amount: parseInt(amount)
        }
        AddTransaction(newTransaction)
        
        setText('');
        setAmount(0);
    }

    
    return (
        <div className='addTransactions'>
            <h3>Add AddTransactions</h3>

            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange = {(e) => setText(e.target.value)} 
                    placeholder="Enter text..." required/>
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br /> 
                    </label>
                    <input type="number" value={amount} onChange = {(e) => setAmount(e.target.value)} 
                    placeholder="Enter amount..."  required/>
                </div>

                <button className="btn">Add transaction</button>

            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        AddTransaction: (transaction) => dispatch(addAction(transaction))
    }
}

export default connect(null, mapDispatchToProps)(AddTransactions)
