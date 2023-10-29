import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

// import './styles.css';
import swiperCardsInfo from "../../assets/data/swiperCard.json"
import SliderImage from './SliderImage';
import { CardTitle, HighlightSpan, InfoBox, LinkStyled, SliderContainer, TextStyled } from './HomeSwiper.styled';
import Button from 'components/Button/Button';
import { scrollToTop } from 'assets/helpers/scrollToTop';

export default function HomeSwiper() {
	return (
		<div>
			<Swiper 
			modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
			speed={700}
			navigation
			loop>
				{swiperCardsInfo.map(({img, subtitle, description}, idx) =>(
				<SwiperSlide key={idx}>				
					<SliderContainer>
					<SliderImage img={img} subtitle={subtitle} />
					<InfoBox>
						<CardTitle>Find the perfect car <HighlightSpan>{subtitle}</HighlightSpan></CardTitle>
						<TextStyled>{description}</TextStyled>
						<LinkStyled to="/catalog" onClick={scrollToTop}>
        			<Button $swiperCardButton type="button" label="Browse car"/>
      			</LinkStyled>
					</InfoBox>
					</SliderContainer>
				</SwiperSlide>)
			)}
			</Swiper>
		</div>
	)
}
