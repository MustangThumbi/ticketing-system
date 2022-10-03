const addProductAction = (product)=>{
    
    return {
        type: "ADD_PRODUCT",
        product
    }
}
const addTicketAction = (parcel)=>{
    
    return {
        type: "ADD_TICKET",
        parcel
    }
}

export {
    addProductAction,addTicketAction
}