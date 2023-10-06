import React, { useState } from 'react'

export const ImageCounter = ({ setCountToLoad }) => {
	const [value, setValue] = useState('')

	const handleSetCounte = () => {
		if (value === '13') {
			alert('error')
		}
		setCountToLoad(value)
	}

	return (
		<>
			<input placeholder='View by value 1 to 12' onChange={e => setValue(e.target.value)} value={value} />
			<button onClick={handleSetCounte}>Set</button>
		</>
	)
}
