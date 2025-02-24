import {createSlice}  from '@reduxjs/toolkit'

const initialState ={
    isRegistretionmodalOpen : false,
}

const registerSlice = createSlice({
    name:"register",
    initialState,
    reducers:{
        openRegisterModal :(state)=>{
            state.isRegistretionmodalOpen = true
        },
        closeRgistermodal :(state)=>{
            state.isRegistretionmodalOpen= false;
        },
       
        
    }

})
export const {openRegisterModal,closeRgistermodal} = registerSlice.actions;
export default registerSlice.reducer;