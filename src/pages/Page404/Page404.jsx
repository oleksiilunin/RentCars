import { scrollToTop } from 'assets/helpers/scrollToTop'
import Button from 'components/Button/Button'
import React from 'react'
import { Link } from 'react-router-dom'

// import image404 from '../../assets/images/404_BLUE.jpg'
import { ImageStyled, LinkStyled, PageContainer } from './Page404.styled'
// import SectionWrapper from 'components/SectionWrapper'

export default function Page404() {
	return (
		// <SectionWrapper>
			<PageContainer>
				{/* <ImageStyled src={image404} alt="Page 404" /> */}
				<LinkStyled to="/" onClick={scrollToTop}>
					Back To Home
				</LinkStyled>
			</PageContainer>
		// </SectionWrapper>
	)	
}
