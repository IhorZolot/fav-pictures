import React from 'react'
import { useModal } from '../hooks/useModal'

export const MyContext = React.createContext()

export const ContextProvider = ({ children }) => {
	const { content, isOpen, togleModal, openWithContent } = useModal()
	const contextValue = { content, isOpen, togleModal, openWithContent }
	return <MyContext.Provider value={contextValue}> {children}</MyContext.Provider>
}
