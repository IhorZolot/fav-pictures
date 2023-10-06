import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectImages } from '../../redux/selectors'
import { addToFav } from '../../redux/sliceFav'
import { clearData } from '../../redux/slicePic'
import { featchImgThunk } from '../../redux/operations'
import { SearchForm } from '../SearchForm/SearchForm'
import { toast } from 'react-toastify'
import { MyContext } from '../../context/ContextProvider'
import { ImageCounter } from '../ImageCounter/ImageCounter'
import { StyledGallary } from './ImageGallary.styled'
import { Button } from '../Button/Button'

export const ImageGallary = () => {
	const images = useSelector(selectImages)
	const [query, setQuery] = useState('cars')
	const [page, setPage] = useState(1)
	const dispatch = useDispatch()
	const [countToLoad, setCountToLoad] = useState(3)
	const { openWithContent } = useContext(MyContext)

	useEffect(() => {
		dispatch(featchImgThunk({ page, q: query, per_page: countToLoad }))
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
		toast.success('Added to favorites!', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
		})
	}
	return (
		<>
			<SearchForm setQueryStr={setQueryStr} />
			<ImageCounter setCountToLoad={setCountToLoad} />
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
							<img src={image.webformatURL} alt={image.tags} onClick={() => openWithContent(image)} />
						</div>
						<Button onClick={() => addToFavorite(image)}>Add to fav</Button>
					</li>
				))}
			</StyledGallary>

			<Button onClick={loadMoreImages}>Load more</Button>
		</>
	)
}
