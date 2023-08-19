export const cartReducer=(state,action)=>{
    switch (action.type) {
        case 'add_to_cart':
            
            // console.log(lp);
            return {...state,cart:[...state.cart,{...action.payload}]};
        
    
        default:
            return state;
    }
    
}