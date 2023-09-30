import { useCallback, useEffect } from 'react'

export const Modal = (children, onClose) => {
  const onBackdropClick = e => {
    if (e.target === e.carrentTarget){
      onClose()
    }
  }
  const handleKeyDown = useCallback(
		e => {
			if (e.key === 'Escape') {
				onClose()
			}
		},
		[onClose]
	)
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
	}, [onClose, handleKeyDown])

  return (
    <div onClick={onBackdropClick} >
      <div>{children}</div>
    </div>
  )
}
