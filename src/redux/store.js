import { configureStore } from '@reduxjs/toolkit'
import { imageReducer } from './slicePic'

export const store = configureStore({ reducer: { imageList: imageReducer } })
