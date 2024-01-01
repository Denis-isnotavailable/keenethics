import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3001/api";



// GET STATS
export const getStats = createAsyncThunk("bikes/getStats", async (_, thunkAPI) => {
    try {        
        const { data } = await axios.get("/allStats");    

        return data.data[0];
    } catch (e) {
        console.error(e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
});

// GET BIKES
export const getBikes = createAsyncThunk("bikes/getBikes", async (_, thunkAPI) => {
    try {        
        const { data } = await axios.get("/allBikes");    

        return data.data;
    } catch (e) {
        console.error(e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
});

// ADD BIKE
export const addBike = createAsyncThunk("bikes/addBike", async (bike, thunkAPI) => {
    try {        
        const { data } = await axios.post("/addBike", bike);    

        return data.data;
    } catch (e) {
        console.error(e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
});

// UPDATE BIKE
export const updateBike = createAsyncThunk("bikes/updateBike", async ({ id, bike }, thunkAPI) => {
    try {        
        const { data } = await axios.put(`/updateBike/${id}`, bike);    

        return data.data;
    } catch (e) {
        console.error(e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
});

// DELETE BIKE
export const deleteBike = createAsyncThunk("bikes/deleteBike", async (id, thunkAPI) => {
    try {        
        const { data } = await axios.delete(`/deleteBike/${id}`);    

        return data.data;
    } catch (e) {
        console.error(e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
});