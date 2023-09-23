import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { PageFavorite } from './pages/PageFavorite/PageFavorite'
import { PageGallary } from './pages/PageGallary/PageGallary'
import { NotFound } from './pages/NotFound/NotFound'

export default function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<PageGallary />} />
				<Route path='/favorite' element={<PageFavorite />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}
