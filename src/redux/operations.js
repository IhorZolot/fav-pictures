import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// https://pixabay.com/api/?key=38168807-d28e71a0feea929e703b592b4&q=yellow+flowers&image_type=photo&pretty=true
// key=38168807-d28e71a0feea929e703b592b4

//Нлаштовуємо запит на бек
//Вказати ключ авторизації
// axios.defaults.headers.common['Authorization'] = 'tzrYPMWCkMl8QJ7RTOvCGFHY6cja6hKkGAxLf7onkhboy65dgPc6bURG'
// Дефолт паам
// axios.defaults.params = {
// 	orientation: 'landscape',
// 	per_page: 3,
// }
axios.defaults.params = {
	key: '38168807-d28e71a0feea929e703b592b4',
	per_page: 3,
}
// axios.defaults.baseURL = 'https://api.pexels.com/v1'
axios.defaults.baseURL = 'https://pixabay.com/api/'

// СТворення санки, для запитів. Всі запити йдуть через санки
// Структура санки
// Назва = createAsyncTHunk("НАЗВА ТІЛЬКИ ДЛЯ ДЕВТУЛЗ", асинхронний колбек , котрий приймає два аргумента)
// Перший - те, що прийде з компонента . Може бути (id, body, login, params, todo, будь який тип даних)
// Другий - те, що ми можемо використати додатково thunkAPI (dispatch, rejectWithValue, getState())
export const featchImgThunk = createAsyncThunk('featch/images', async (params, thunkApi) => {
	try {
		const { data } = await axios.get('', {
			params: {
				...params,
			},
		})
		return data
	} catch (error) {
		// Відправлює помилку якщо вона трапилась. Помилка попадє в payload
		return thunkApi.rejectWithValue(error.message)
	}
})
