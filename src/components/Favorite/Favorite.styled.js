import styled from 'styled-components'

export const FavoriteStyled = styled.ul`
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
