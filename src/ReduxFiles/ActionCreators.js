export const addAction = (transaction) => {
    return{
        type:'ADD',
        element: transaction
    }
}

export const deleteAction = (id) => {
    return{
        type:'DELETE',
        element: id
    }
}