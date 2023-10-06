import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from '../Button/Button'

export const ImageCounter = ({ setCountToLoad }) => {
	const [value, setValue] = useState('')

	const handleSetCounte = () => {
		if (value <= '0' || value > '12') {
			toast.error('Enter a value from 1 to 12', {
				position: 'top-right',
				autoClose: 2000,
				hideProgressBar: false,
			})
			return
		}
		setCountToLoad(value)
	}

	return (
		<>
			<input placeholder='View by value 1 to 12' onChange={e => setValue(e.target.value)} value={value} />
			<Button onClick={handleSetCounte}>Set</Button>
		</>
	)
}
