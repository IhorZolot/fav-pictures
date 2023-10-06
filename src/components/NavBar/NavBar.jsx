import { NavLink } from 'react-router-dom'
import { NavBarStyled, LinkStyled } from './NavBar.styled.js'

export const NavBar = () => {
	return (
		<NavBarStyled>
			<LinkStyled to='/'>Gallary</LinkStyled>
			<LinkStyled to='/favorite'>Favorite</LinkStyled>
		</NavBarStyled>
	)
}
