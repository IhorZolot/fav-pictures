import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { featchImgThunk } from './redux/operations'
import { selectImages } from './redux/selectors'
import { clearData } from './redux/slicePic'
import { SearchForm } from './components/SearchForm/SearchForm'

export function App() {
	const images = useSelector(selectImages)
	const [query, setQuery] = useState('cars')
	const [page, setPage] = useState(1)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(featchImgThunk({ page, query }))
	}, [dispatch, page, query])

	const loadMoreImages = () => {
		setPage(page + 1)
	}
	const setQueryStr = q => {
		dispatch(clearData())
		setQuery(q)
	}

	return (
		<>
			<SearchForm setQueryStr={setQueryStr} />
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
