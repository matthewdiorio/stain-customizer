import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOnHomePage: true,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setOnHomePage: (state, action) => {
      state.isOnHomePage = action.payload;
    },
  },
});

export const { setOnHomePage } = navigationSlice.actions;

export default navigationSlice.reducer;
