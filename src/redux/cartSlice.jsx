import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const itemIndex = state.products.find(item => item.id === newItem.id)
            if (itemIndex) {
                itemIndex.quantity++;
                itemIndex.subTotal += newItem.price;
            } else {
                state.products.push({
                    id: newItem.id,
                    image: newItem.image,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    subTotal: newItem.price,
                });
            }
            state.totalQuantity++;
            state.totalPrice += newItem.price;
        },
        addQuantityToCart(state, action) {
            const newItem = action.payload;
            const itemIndex = state.products.find(item => item.id === newItem.id)
            if (itemIndex) {
                itemIndex.quantity += newItem.quantity;
                itemIndex.subTotal += newItem.price * newItem.quantity;
            } else {
                state.products.push({
                    id: newItem.id,
                    image: newItem.image,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    subTotal: newItem.price * newItem.quantity,
                });
            }
            state.totalQuantity++;
            state.totalPrice += newItem.price * newItem.quantity;
        },
        removeFromCart(state, action) {
            const itemToRemove = action.payload;
            const itemIndex = state.products.find(item => item.id === item.id)
            if (itemIndex.quantity === 1) {
                state.products = state.products.filter((item => item.id !== itemToRemove.id));
            } else {
                itemIndex.quantity--;
                itemIndex.totalPrice -= itemToRemove.price;
                itemIndex.subTotal -= itemToRemove.price;
            }
            state.totalQuantity--;
            state.totalPrice -= itemToRemove.price;
        },
        deleteFromCart(state, action) {
            const itemToRemove = action.payload;
            state.products = state.products.filter((item => item.id !== itemToRemove.id));
            state.totalQuantity -= itemToRemove.quantity;
            state.totalPrice -= itemToRemove.subTotal;
        }
    }
})
export const { addToCart, removeFromCart, deleteFromCart, addQuantityToCart } = cartSlice.actions;
export default cartSlice.reducer;