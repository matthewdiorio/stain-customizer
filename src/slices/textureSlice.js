import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'oak',
  texture: '/oak.png',
};

const textureSlice = createSlice({
  name: 'texture',
  initialState,
  reducers: {
    setTexture: (state, action) => {
      state.name = action.payload.name;
      state.texture = action.payload.texture ;

    },
  },
});

export const { setTexture } = textureSlice.actions;

export default textureSlice.reducer;
