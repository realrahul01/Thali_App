import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addCart: [],
  }
  
  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      thaliList:(state,action)=>{
        state.addCart.push(action.payload)
    }
  },
})

export const { thaliList} = counterSlice.actions

export default counterSlice.reducer;