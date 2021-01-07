export const initialState = {
    cartItems: [{}],
};

//Selector
export const getCartItemsTotal = (cartItems) => 
cartItems?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.item],
            };
        case 'REMOVE_FROM_CART':
            const index = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCartItems = [...state.cartItems];

            if(index >= 0) {
                newCartItems.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in the cart! `
                )
            }
            return {
                ...state,
                cartItems: newCartItems,
            }

        default:
            return state;
    }

}

export default reducer