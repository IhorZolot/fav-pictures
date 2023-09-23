import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { featchImgThunk } from './redux/operations'
import { selectImages } from './redux/selectors'
import { clearData } from './redux/slicePic'
import { SearchForm } from './components/SearchForm/SearchForm'
import styled from 'styled-components'
import { addToFav } from './redux/sliceFav'
import { Favorite } from './components/Favorite/Favorite'

export default function App() {
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
	const error = useSelector(state => state.imageList.error)

	const addToFavorite = item => {
		dispatch(addToFav(item))
	}

	return (
		<>
			<SearchForm setQueryStr={setQueryStr} />
			{error && <h1>{error}</h1>}
			<StyledGallary>
				{images.map(image => (
					<li key={image.id}>
						<div>
							<img src={image.src.landscape} alt={image.alt} />
						</div>
						<button onClick={() => addToFavorite(image)}>Add to fav</button>
					</li>
				))}
			</StyledGallary>
			<button onClick={loadMoreImages}>Load more</button>
			<Favorite />
		</>
	)
}

export const StyledGallary = styled.ul`
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(3, 1fr);
	max-width: 95vw;
	& li {
		padding: 5px;
		border: 1px solid black;
		width: 100%;
		overflow: hidden;
		& img {
			width: 100%;
			height: 100%;
		}
	}
`
