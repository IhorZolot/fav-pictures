import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'tzrYPMWCkMl8QJ7RTOvCGFHY6cja6hKkGAxLf7onkhboy65dgPc6bURG'
axios.defaults.params = {
	orientation: 'landscape',
	per_page: 3,
}
axios.defaults.baseURL = 'https://api.pexels.com/v1'

export const featchImgThunk = createAsyncThunk('featch/images', async (params, thunkApi) => {
	try {
		const { data } = await axios.get('search', {
			params: {
				query: 'cars',
				page: 1,
				...params,
			},
		})
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
