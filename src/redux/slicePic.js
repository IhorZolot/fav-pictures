import { createSlice } from '@reduxjs/toolkit'
import { featchImgThunk } from './operations'

const slice = createSlice({
	name: 'Pictures',
	initialState: {
		images: [],
		isLoading: false,
	},
	reducers: {
		clearData: state => {
			state.images = []
		},
	},
	extraReducers: builder => {
		builder.addCase(featchImgThunk.fulfilled, (state, { payload }) => {
			state.images = [...state.images, ...payload.photos]
		})
	},
})

export const imageReducer = slice.reducer
export const { clearData } = slice.actions
