import { useEffect } from 'react'
import { BackgroundModal, Content, OptionMenu } from './Modal.styled'

export const Modal = ({ children, onClose }) => {
	const onBackdropClick = event => {
		if (event.target === event.currentTarget) {
			onClose()
		}
	}

	useEffect(() => {
		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				onClose()
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [onClose])

	return (
		<BackgroundModal onClick={onBackdropClick}>
			<Content>
				<OptionMenu>
					<button onClick={onClose}>Close</button>
				</OptionMenu>
				{children}
			</Content>
		</BackgroundModal>
	)
}
