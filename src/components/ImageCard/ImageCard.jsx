import React from 'react'
import styled from 'styled-components'

export const ImageCard = ({ item }) => {
	const { largeImageURL, tags, user } = item
	return (
		<>
			<li>
				<StyledImageWraper>
					<img src={largeImageURL} alt={tags} />
				</StyledImageWraper>
				<h3>{user}</h3>
				<p>{tags}</p>
			</li>
		</>
	)
}

const StyledImageWraper = styled.div`
	overflow: hidden;
	height: 700px;
	img {
		width: 100%;
		object-fit: cover;
	}
`
