import { createSlice } from '@reduxjs/toolkit'
import { featchImgThunk } from './operations'

const slice = createSlice({
	name: 'Pictures',
	initialState: {
		images: [],
		isLoading: false,
		error: null,
	},
	// Для локальної роботи екшени
	reducers: {
		clearData: state => {
			state.images = []
		},
	},
	// Для роботи з сервером
	extraReducers: builder => {
		builder
			.addCase(featchImgThunk.fulfilled, (state, { payload }) => {
				state.images.push(...payload.hits)
				// state.images = [...state.images, ...payload.photos] - однакові операції
			})
			.addCase(featchImgThunk.rejected, (state, { payload }) => {
				state.error = payload
				// state.images = [...state.images, ...payload.photos] - однакові операції
			})
	},
})

export const imageReducer = slice.reducer
export const { clearData } = slice.actions
