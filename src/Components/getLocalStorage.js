export const getLocalStorage = () => {
    let transactions = localStorage.getItem('transactions')
    if(transactions){
        return JSON.parse(localStorage.getItem('transactions'))
    }
    else{
        return []
    }
}