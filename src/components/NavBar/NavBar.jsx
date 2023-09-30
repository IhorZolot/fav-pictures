import { NavLink } from 'react-router-dom'

export const NavBar = () => {
	return <nav>
		<NavLink to='/'>Gallary</NavLink>
		<NavLink to='/favorite'>Favorite</NavLink>
	</nav>
}
