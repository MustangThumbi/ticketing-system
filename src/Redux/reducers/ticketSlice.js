const initialState = {
    tickets: [],
    name: "TICKETS",
};

const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.product],
            };
        case "ADD_TICKET":
            return{
                ...state,
               tickets:[...state.tickets,action.ticket],
            };

        default:
            return state;
    }
};

export default ticketsReducer;