import { createSlice } from '@reduxjs/toolkit'
import { featchImgThunk, loadImageThunk } from './operations'

const slice = createSlice({
	name: 'Pictures',
	initialState: {
		images: [],
		isLoading: false,
		page: 2,
	},
	reducers: {
		setPages: (state, { payload }) => {
			state.page = state.page + 1
		},
	},
	extraReducers: builder => {
		builder
			.addCase(featchImgThunk.fulfilled, (state, { payload }) => {
				state.images = payload.photos
			})
			.addCase(loadImageThunk.fulfilled, (state, { payload }) => {
				state.images = [...state.images, ...payload.photos]
			})
	},
})

export const imageReducer = slice.reducer
export const { setPages } = slice.actions
