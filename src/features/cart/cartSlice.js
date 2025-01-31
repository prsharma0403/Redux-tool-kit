import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"

const initialState={
    cartItems:cartItems,
    amount:2,
    total:0,
    isLoading:true,
};
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        clearCart:(state)=>{
          state.cartItems=[];
          // return{cartItems:[]};
        },
        removeItem:(state,action)=>{
            const itemId=action.payload;
            state.cartItems=state.cartItems.filter((items)=>items.id!==itemId)
            console.log(action)
        },
        increase:(state,{payload})=>{
            const cartItems=state.cartItems.find((items)=>items.id===payload.id)
        cartItems.amount=cartItems.amount+1
        },
        decrease:(state,{payload})=>{
            const cartItems=state.cartItems.find((items)=>items.id===payload.id)
        cartItems.amount=cartItems.amount-1
        },
        calculateTotals:(state)=>{
            let amount=0;
            let total=0;
            state.cartItems.forEach((items)=>{
                amount+=items.amount;
                total+=items.amount * items.price;
            })
            state.amount=amount;
            state.total=total;
            
        }
    },
})
//console.log(cartSlice);
export const{clearCart,removeItem,calculateTotals,increase,decrease}=cartSlice.actions
export default cartSlice.reducer;
