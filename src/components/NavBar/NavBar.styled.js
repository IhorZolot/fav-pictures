import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavBarStyled = styled.nav`
	position: sticky;
	z-index: 1100;
	display: flex;
	box-shadow: 0px 2px 4px rgba(0, 0, 0.1, 0.5);
	gap: 25px;
	top: 0;
	left: 0;
	width: 100%;
	padding: 20px 0;
	justify-content: left;
	align-items: center;
`
export const LinkStyled = styled(NavLink)`
	margin-left: 40px;
	font-size: 20px;
	text-decoration: none;
	font-weight: bold;
`
