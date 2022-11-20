export const initialState = {
    cart: [],
    user: null
}

const reducer = (state, action) => {
    // console.log(reducer)
switch (action.type){
    case "ADD_TO_CART":
        return{
            ...state, 
            cart: [...state.cart, action.item],
        };

       case 'EMPTY_CART':
        return{
            ...state,
            cart: [],
        };

        case "REMOVE_FROM_CART":
            // Get the index item you want to remove by comparing the item id in the cart and the item id you clicked 
           const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)
        let newCart = [...state.cart]
         if(index >= 0){
            newCart.splice(index, 1);
         }else{
            console.warn(`Can't remove product (id:${action.id}) as it's not in cart`);
         }
            return{
                ...state, 
                cart: newCart,
            };

            case "SET_USER":
                return {
                  ...state,
                  user: action.user,
                };
            

        default:
        return state;
}
}
export default reducer;