import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { featchImgThunk, loadImageThunk } from './redux/operations'
import { selectImages, selectPages } from './redux/selectors'
import { setPages } from './redux/slicePic'

function App() {
	const images = useSelector(selectImages)
	const page = useSelector(selectPages)

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(featchImgThunk())
	}, [dispatch])

	const loadMoreImages = () => {
		dispatch(setPages())
		dispatch(loadImageThunk(page))
	}

	return (
		<>
			<ul>
				{images.map(image => (
					<li key={image.id}>
						<img src={image.src.landscape} alt={image.alt} />
					</li>
				))}
			</ul>
			<button onClick={loadMoreImages}>Load more</button>
		</>
	)
}

export default App
