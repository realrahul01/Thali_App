import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addCart: [],
  }
  
  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      thaliList:(state,action)=>{
        const existingItem = state.addCart.find((x)=>x.id == action.payload.id)
        if(existingItem){
          state.addCart = state.addCart.map((x)=>{
            return {...x, quantity: x.quantity + 1}
          })
        }
        else{
          state.addCart.push({ ...action.payload, quantity: 1 });
        }
    },
    removeItem:(state,action)=>{
      state.addCart = state.addCart.filter((x)=>{
        return x.id !== action.payload
      })
    },
    incrementItem:(state)=>{
      state.addCart = state.addCart.map((x)=>{
        return {...x, quantity:x.quantity + 1}
      })
    },
    decrementItem:(state)=>{
      state.addCart = state.addCart.map((x)=>{
        return {...x, quantity: x.quantity - 1}
      })
    }   
  },
})

export const { thaliList,removeItem,incrementItem,decrementItem} = counterSlice.actions

export default counterSlice.reducer;