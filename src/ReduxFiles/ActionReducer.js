import { getLocalStorage } from "../Components/getLocalStorage"


const initialState = {
    transactions: getLocalStorage()
}

const ActionReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                transactions: [...state.transactions, action.element]
            }
        case 'DELETE':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.element)
            }
        default:
            return state
    }
}


export default ActionReducer