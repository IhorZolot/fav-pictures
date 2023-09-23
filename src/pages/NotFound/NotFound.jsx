import { NotFoundLinkStyled, NotFoundStyled } from './NotFound.styled'

export const NotFound = () => {
	return (
		<NotFoundStyled>
			<h1>Page not found..</h1>
			<NotFoundLinkStyled to='/'>Go Home</NotFoundLinkStyled>
		</NotFoundStyled>
	)
}
