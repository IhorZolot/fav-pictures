import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { imageReducer } from './slicePic'
import { favoriteReducer } from './sliceFav'

const persistConfig = {
	key: 'favorite',
	version: 1,
	storage,
}
const persistedReducer = persistReducer(persistConfig, favoriteReducer)

export const store = configureStore({
	reducer: { imageList: imageReducer, favoriteList: persistedReducer },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})
export const persistor = persistStore(store)

// СТворення стору, черзе configureStore, в котрий передаємо об'єкт налаштувань
// Приходить ключ reducer: - весь наш стейт, розбитий на маленькі частини
// Складається також з об'єкта , котрий має ключі - це наші маленькі частини стейту

// export const store = configureStore({ reducer: { imageList: imageReducer, favoriteList: favoriteReducer } })
