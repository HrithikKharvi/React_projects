import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    toggle : false
}

const counterSlice = createSlice({
    name : "counter",
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        toggle(state) {
            state.toggle = !state.toggle
        }
    }
})

export default counterSlice;