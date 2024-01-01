import { createSlice } from "@reduxjs/toolkit";
import { getBikes, addBike, updateBike, deleteBike, getStats } from "./operations";

const initialState = {
    bikes: [],
    stats: {},
    isLoading: false,
    error: null
};

const bikesSlice = createSlice({
    name: 'bikes',
    initialState,
    extraReducers: (builder) => {
        builder
        // GET ALL
            .addCase(getBikes.pending, (state) => {                
                state.isLoading = true;
            })
            .addCase(getBikes.fulfilled, (state, action) => {
                state.bikes = action.payload;                    
                state.isLoading = false;
                state.error = null;                
            })
            .addCase(getBikes.rejected, (state, action) => {                
                state.isLoading = false;
                state.error = action.payload;
            })
        
        // ADD
            .addCase(addBike.pending, (state) => {                
                state.isLoading = true;
            })
            .addCase(addBike.fulfilled, (state, action) => {                                    
                state.isLoading = false;
                state.error = null;       
                state.bikes.push(action.payload);
            })
            .addCase(addBike.rejected, (state, action) => {                
                state.isLoading = false;
                state.error = action.payload;
            })
        // UPDATE
            .addCase(updateBike.pending, (state) => {                
                state.isLoading = true;
            })
            .addCase(updateBike.fulfilled, (state, action) => {                                    
                state.isLoading = false;
                state.error = null;       
                const index = state.bikes.findIndex(bike => bike._id === action.payload._id);
                index !== -1 && state.bikes.splice(index, 1, action.payload);
            })
            .addCase(updateBike.rejected, (state, action) => {                
                state.isLoading = false;
                state.error = action.payload;
            })
        // DELETE
            .addCase(deleteBike.pending, (state) => {                
                state.isLoading = true;
            })
            .addCase(deleteBike.fulfilled, (state, action) => {                                    
                state.isLoading = false;
                state.error = null;       
                const index = state.bikes.findIndex(bike => bike._id === action.payload._id);
                index !== -1 && state.bikes.splice(index, 1);
            })
            .addCase(deleteBike.rejected, (state, action) => {                
                state.isLoading = false;
                state.error = action.payload;
            })
        // GET STATS
        .addCase(getStats.pending, (state) => {                
                state.isLoading = true;
            })
            .addCase(getStats.fulfilled, (state, action) => {
                state.stats = action.payload;                    
                state.isLoading = false;
                state.error = null;                
            })
            .addCase(getStats.rejected, (state, action) => {                
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const bikesReducer = bikesSlice.reducer;