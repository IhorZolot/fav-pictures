import styled from 'styled-components'

export const ButtonStyled = styled.button`
	display: inline-block;
	font-size: 16px;
	width: 200px;
	height: 48px;
	border: 0;
	background-color: red;
	opacity: 0.6;
	transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	outline: none;
	&:hover {
		opacity: 1;
	}
`
