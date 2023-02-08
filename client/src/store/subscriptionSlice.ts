// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Product } from "./productsApi";
//
// //Typed properties
// export interface BasketState {
//   basket: Array<Product & { quantity: number }>;
//   order: {
//     firstName?: string;
//   };
// }
//
// //Sets basket array to empty initially
// const initialState = { basket: [], order: {} } as BasketState;
// /*Stores user inputted data.
// Handles the user adding and removing products to/from their basket.
//  */
// const basketSlice = createSlice({
//   name: "basket",
//   initialState,
//   reducers: {
//     //Handles the user adding a product to their basket
//     addToBasket(state, action: PayloadAction<Product>) {
//       const indexOfItem = state.basket.findIndex(
//         (product) => product.product_id === action.payload.product_id
//       );
//       if (indexOfItem >= 0) {
//         state.basket[indexOfItem].quantity += 1;
//       } else {
//         state.basket = state.basket.concat({ ...action.payload, quantity: 1 });
//       }
//     },
//     //Handles the user removing a product from their basket by its index
//     removeFromBasketByIndex(state, action: PayloadAction<number>) {
//       state.basket.splice(action.payload, 1);
//     },
//     //Handles the user removing a product from their basket by its id
//     removeFromBasketById(state, action: PayloadAction<number>) {
//       state.basket = state.basket.filter(
//         (product) => product.product_id !== action.payload
//       );
//     },
//     changeQuantity(
//       state,
//       action: PayloadAction<{ id: number; quantity: number }>
//     ) {
//       const indexOfItem = state.basket.findIndex(
//         (product) => product.product_id === action.payload.id
//       );
//       if (indexOfItem >= 0) {
//         state.basket[indexOfItem].quantity = action.payload.quantity;
//       }
//     },
//   },
// });
//
// export const {
//   addToBasket,
//   removeFromBasketById,
//   removeFromBasketByIndex,
//   changeQuantity,
// } = basketSlice.actions;
// export default basketSlice.reducer;
