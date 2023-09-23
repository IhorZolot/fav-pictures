import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavorite } from '../../redux/selectors'
import { StyledGallary } from '../../App'
import { deleteFromFav } from '../../redux/sliceFav'

export const Favorite = () => {
	const imagesFavorite = useSelector(selectFavorite)
	const dispatch = useDispatch()

	const imagesDeleteFavorite = id => {
		dispatch(deleteFromFav({ id }))
	}

	return (
		<StyledGallary>
			{imagesFavorite.map(image => (
				<li key={image.id}>
					<div>
						<img src={image.src.landscape} alt={image.alt} />
					</div>
					<button onClick={() => imagesDeleteFavorite(image.id)}>Delete from fav</button>
				</li>
			))}
		</StyledGallary>
	)
}
