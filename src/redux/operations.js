import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'tzrYPMWCkMl8QJ7RTOvCGFHY6cja6hKkGAxLf7onkhboy65dgPc6bURG'
axios.defaults.params = {
	orientation: 'landscape',
	per_page: 10,
}
axios.defaults.baseURL = 'https://api.pexels.com/v1'

export const featchImgThunk = createAsyncThunk('featch/images', async (_, thunkApi) => {
	try {
		const { data } = await axios.get('search?query=cars')
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
export const loadImageThunk = createAsyncThunk('loads/image', async (page, thunkApi) => {
	try {
		const { data } = await axios.get('search?query=cars', {
			params: {
				page,
			},
		})
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
