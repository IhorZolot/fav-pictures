import { useState } from 'react'

export const SearchForm = ({ setQueryStr }) => {
	const [value, setValue] = useState('')

	const onSubmit = e => {
		e.preventDefault()
		setQueryStr(value)
	}

	return (
		<form onSubmit={onSubmit}>
			<input value={value} onChange={e => setValue(e.target.value)} />
			<button>Find</button>
		</form>
	)
}
