import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NotFoundStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: #f5f5f5;
`
export const NotFoundLinkStyled = styled(Link)`
	text-decoration: none;
	color: #007bff;
	font-weight: bold;
	margin-top: 20px;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`
