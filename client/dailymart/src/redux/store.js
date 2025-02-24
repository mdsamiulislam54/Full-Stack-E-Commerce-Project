import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './features/loginSlice'
import registerReducer from './features/registerSlice'
import userReducer from './features/userSlice'
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

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
    user: persistedUserReducer  // Use persisted reducer here
  },
});

const persistor = persistStore(store);

export { persistor };
export default store;
