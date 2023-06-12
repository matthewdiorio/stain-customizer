import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: '',
  name: '',
};

const stainSlice = createSlice({
  name: 'stain',
  initialState,
  reducers: {
    setStainColor: (state, action) => {
      state.color = action.payload.color;
      state.name = action.payload.name;

    },
  },
});

export const { setStainColor } = stainSlice.actions;

export default stainSlice.reducer;
