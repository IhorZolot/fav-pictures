import styled from 'styled-components'

export const BackgroundModal = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	/* top:0%;
	left:0;
	right: 0;
	bottom: 0; */
	//Inset Замінює всі 4 властивості
	inset: 0;
	background: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(5px);
`
export const Content = styled.div`
	background: white;
	width: 90vw;
`
export const OptionMenu = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 5px 25px;
`
