import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './features/loginSlice'
import registerReducer from './features/registerSlice'
import userReducer from './features/userSlice'
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import productsReducer from './features/productsSlice'
import cartReducer from "./features/cartSlice";
import checkoutReducer from "./features/checkoutSlice";
import filteredProductsReducer from './features/filteredProducts'
import buynowReducer from './features/BuynowSlice'
import shippingAddressReducer from './features/shippingAddressSlices'
import uiSliceReducer from './features//UiComponatsSlice'
import CheckLoginReducer from './features//LoginCheck'

// Redux Persist Configuration
const persistConfig = {
  key: 'user', // Only persist the user state
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    user: persistedUserReducer,  
    products : productsReducer,
    cart : cartReducer,
    checkout : checkoutReducer,
    filteredProducts : filteredProductsReducer,  
    buynow : buynowReducer,
    shippingAddress : shippingAddressReducer, 
    ui : uiSliceReducer,  
    loginCheck : CheckLoginReducer,  
  },
});

const persistor = persistStore(store);

export { persistor };
export default store;
