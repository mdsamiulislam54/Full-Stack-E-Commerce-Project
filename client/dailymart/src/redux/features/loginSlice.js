import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginModalOpen: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = loginSlice.actions;
export default loginSlice.reducer;
