import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Нлаштовуємо запит на бек
//Вказати ключ авторизації
axios.defaults.headers.common['Authorization'] = 'tzrYPMWCkMl8QJ7RTOvCGFHY6cja6hKkGAxLf7onkhboy65dgPc6bURG'
// Дефолт паам
axios.defaults.params = {
	orientation: 'landscape',
	per_page: 3,
}

axios.defaults.baseURL = 'https://api.pexels.com/v1'

// СТворення санки, для запитів. Всі запити йдуть через санки
// Структура санки
// Назва = createAsyncTHunk("НАЗВА ТІЛЬКИ ДЛЯ ДЕВТУЛЗ", асинхронний колбек , котрий приймає два аргумента)
// Перший - те, що прийде з компонента . Може бути (id, body, login, params, todo, будь який тип даних)
// Другий - те, що ми можемо використати додатково thunkAPI (dispatch, rejectWithValue, getState())
export const featchImgThunk = createAsyncThunk('featch/images', async (params, thunkApi) => {
	try {
		const { data } = await axios.get('search', {
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
