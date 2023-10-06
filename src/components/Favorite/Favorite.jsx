import { useDispatch, useSelector } from 'react-redux'
import { selectFavorite } from '../../redux/selectors'
import { deleteFromFav } from '../../redux/sliceFav'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { MyContext } from '../../context/ContextProvider'
import { FavoriteStyled } from './Favorite.styled'
import { Button } from '../Button/Button'

export const Favorite = () => {
	const imagesFavorite = useSelector(selectFavorite)
	const dispatch = useDispatch()
	const { openWithContent } = useContext(MyContext)

	const imagesDeleteFavorite = id => {
		dispatch(deleteFromFav({ id }))
		toast.error('Removed from favorites!', {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
		})
	}

	return (
		<FavoriteStyled>
			{imagesFavorite.map(image => (
				<li key={image.id}>
					<div>
						<img src={image.webformatURL} alt={image.tags} onClick={() => openWithContent(image)} />
					</div>
					<Button onClick={() => imagesDeleteFavorite(image.id)}>Delete from fav</Button>
				</li>
			))}
		</FavoriteStyled>
	)
}
