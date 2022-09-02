import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';



const initialState = {
    data: [] as any[],
}
 
const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {}
});
 
export const {} = testSlice.actions
 
export default testSlice.reducer