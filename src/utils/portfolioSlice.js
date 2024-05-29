import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        holding: []
    },
    reducers:{
        addHolding: (state, action) => {
            state.holding.push(action.payload);
        },
        removeHolding: (state, action) => {
            const index = action.payload;
            state.holding.splice(index, 1);
        }
    }
})

export const {addHolding, removeHolding} = portfolioSlice.actions;
export default portfolioSlice.reducer;