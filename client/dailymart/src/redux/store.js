import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './features/loginSlice'
import registerReducer from './features/registerSlice'
import userReducer from './features/userSlice'

const store = configureStore({
  reducer: {
    login: loginReducer,
    register:registerReducer,
    user : userReducer
  },
});

export default store;
