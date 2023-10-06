import { useDispatch, useSelector } from 'react-redux'
import { selectFavorite } from '../../redux/selectors'
import { deleteFromFav } from '../../redux/sliceFav'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { MyContext } from '../../context/ContextProvider'
import { FavoriteStyled } from './Favorite.styled'

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
						<img src={image.src.landscape} alt={image.alt} onClick={() => openWithContent(image)} />
					</div>
					<button onClick={() => imagesDeleteFavorite(image.id)}>Delete from fav</button>
				</li>
			))}
		</FavoriteStyled>
	)
}
