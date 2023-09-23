import { configureStore } from '@reduxjs/toolkit'
import { imageReducer } from './slicePic'
import { favoriteReducer } from './sliceFav'

// СТворення стору, черзе configureStore, в котрий передаємо об'єкт налаштувань
// Приходить ключ reducer: - весь наш стейт, розбитий на маленькі частини
// Складається також з об'єкта , котрий має ключі - це наші маленькі частини стейту
export const store = configureStore({ reducer: { imageList: imageReducer, favoriteList: favoriteReducer } })
