import { createSlice } from '@reduxjs/toolkit';

const initialProductState = {
    "products": [
        
        {
            "name": "sample1",
            "cost": 20,
            "description" : "Sample1 is a best dummy product"
        },

        {
            "name": "sample2",
            "cost": 25,
            "description" : "Sample2 is a best dummy product"
        },

        {
            "name": "sample3",
            "cost": 30,
            "description" : "Sample3 is a best dummy product"
        },

        {
            "name": "sample4",
            "cost": 35,
            "description" : "Sample4 is a best dummy product"
        },
        
        {
           "name" : "test",
            "cost": 30,
            "description" : "test is product for testing" 
        },

        {
           "name" : "tes",
            "cost": 6,
            "description" : "This is a dummy item!" 
        }
    ]
}

const productSlice = createSlice({
    "name": "product",
    "initialState": initialProductState,
    reducers: {
        
    }
})

export default productSlice;
