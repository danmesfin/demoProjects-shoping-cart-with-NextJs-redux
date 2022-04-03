import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart: [],
    total: 0
}

  function calculateCartPrice(cartt,) {
    const t =0 ;
    cartt.forEach(element => t += element.price) ;
    return t;
}
function removerCartPrice(cartt) {
   const t =0 ;
    cartt.forEach(element => t += element.price) ;
    return t;
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        loadCart: (state, action) => {

            return { ...state, cart: [...state.cart, action.payload] }

        },
        addToCart: (state, action) => {

            return { ...state, cart: [...state.cart, action.payload] }

        },
        removeFromCart: (state, action) => {
            return { ...state, cart: state.cart.filter(element => element.id !== action.payload.id) };
        },
        totalAmount: (state) => {
            return {...state, total:calculateCartPrice(state.cart)};
        }

    }
})

export const { loadCart, addToCart, removeFromCart, totalAmount } = cartSlice.actions;
export default cartSlice.reducer