import { createSlice } from "@reduxjs/toolkit";

const setLocalstorage = (state)=>{
    try{
        localStorage.setItem('shippingAddress',JSON.stringify(state.shippingAddress))
    }catch(error){
        console.error('Error saving cart to localStorage',error)
    }
}
const getLocalStorage = ()=>{
    try{
        return JSON.parse(localStorage.getItem('shippingAddress')) || {}
    }catch(error){
        console.error('Error getting cart from localStorage',error)
        return {}
    }
}

const initialState = {
    shippingAddress: getLocalStorage()
}

const shippingAddressSlice = createSlice({
    name: 'shippingAddress',
    initialState,
    reducers: {
        setShippingAddress: (state, action) => {
            state.shippingAddress = action.payload
            setLocalstorage(state)
        }
    }
})

export const { setShippingAddress } = shippingAddressSlice.actions

export default shippingAddressSlice.reducer