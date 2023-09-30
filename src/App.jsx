import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { PageFavorite } from './pages/PageFavorite/PageFavorite'
import { PageGallary } from './pages/PageGallary/PageGallary'
import { NotFound } from './pages/NotFound/NotFound'
import { Modal } from './components/Modal/Modal'
import { ImageCard } from './components/ImageCard/ImageCard'
import { useModal } from './hooks/useModal'
import { useContext } from 'react'
import { MyContext } from './context/ContextProvider'

export default function App() {
	const {isOpen, togleModal, content}= useContext(MyContext)


	return (
		<>
			<NavBar />
			{isOpen && <Modal onClose={togleModal}>
				<ImageCard item={content}/>
				</Modal>}
			<Routes>
				<Route path='/' element={<PageGallary />} />
				<Route path='/favorite' element={<PageFavorite />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}
