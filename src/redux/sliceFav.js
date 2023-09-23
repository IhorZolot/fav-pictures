import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'favorite',
	initialState: {
		images: [],
	},
	reducers: {
		addToFav: (state, { payload }) => {
			state.images.push(payload)
		},
		deleteFromFav: (state, { payload }) => {
			state.images = state.images.filter(image => image.id !== payload.id)
		},
	},
})

export const favoriteReducer = slice.reducer
export const { addToFav, deleteFromFav } = slice.actions
