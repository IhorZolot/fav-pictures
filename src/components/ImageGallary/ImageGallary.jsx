import  { useEffect, useState } from 'react'
import { StyledGallary } from './ImageGallary.styles '
import { useDispatch, useSelector } from 'react-redux'
import { selectImages } from '../../redux/selectors'
import { addToFav } from '../../redux/sliceFav'
import { clearData } from '../../redux/slicePic'
import { featchImgThunk } from '../../redux/operations'
import { SearchForm } from '../SearchForm/SearchForm'

export const ImageGallary = () => {
	const images = useSelector(selectImages)
	const [query, setQuery] = useState('cars')
	const [page, setPage] = useState(1)
	const dispatch = useDispatch()
	const [countToLoad, setCountToLoad] = useState(3)

	useEffect(() => {
		dispatch(featchImgThunk({ page, query, per_page: countToLoad }))
	}, [dispatch, page, query, countToLoad])

	useEffect(() => {
		dispatch(clearData())
	}, [dispatch, countToLoad])

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
			<select value={countToLoad} onChange={e => setCountToLoad(e.target.value)}>
				<option value='1'>1 Картинка</option>
				<option value='3'>3 Картинки</option>
				<option value='6'>6 Картинки</option>
			</select>
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
		</>
	)
}
