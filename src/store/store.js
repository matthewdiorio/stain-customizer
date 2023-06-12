import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from '../slices/navigationSlice'
import stainReducer from '../slices/stainSlice'
import textureReducer from '../slices/textureSlice'

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    stain: stainReducer,
    texture: textureReducer,
    
  },
})