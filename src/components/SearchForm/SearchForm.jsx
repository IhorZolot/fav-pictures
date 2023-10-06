import { useState } from 'react'
import { Button } from '../Button/Button'

export const SearchForm = ({ setQueryStr }) => {
	const [value, setValue] = useState('')

	const onSubmit = e => {
		e.preventDefault()
		setQueryStr(value)
	}

	return (
		<form onSubmit={onSubmit}>
			<input value={value} onChange={e => setValue(e.target.value)} />
			<Button>Find</Button>
		</form>
	)
}
