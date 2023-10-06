import React from 'react'

export const ImageCard = ({ item }) => {
	const { src, alt, photographer, photographerId, onClose } = item
	return (
		<li>
			<img src={src.landscape} alt={alt} />
			<h3>{photographer}</h3>
			<p>{alt}</p>
		</li>
	)
}
