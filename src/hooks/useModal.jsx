import React, { useState } from 'react'

export const useModal = () => {
const [isOpen, setIsOpen] = useState(false)
const [content,setContent] = useState({})


const togleModal = () => {
  setIsOpen(prev => !prev) 
}
const openWithContent = (content) => {

  setContent(content)
  setIsOpen(true)
}
const closeModal = () => {
  setIsOpen(false) 
}
  return  {isOpen,content,togleModal,closeModal, openWithContent}
  
}
