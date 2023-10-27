import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

// import './styles.css';
import swiperCardsInfo from "../../assets/data/swiperCard.json"
import { CardTitle, HighlightSpan, ImageStyled, InfoBox, LinkStyled, SliderContainer, TextStyled } from './HomeSwiper.styled';
import { scrollToTop } from 'assets/helpers/scrollToTop';
import Button from 'components/Button/Button';

import img01 from '../../assets/images/slider/01-great-outdoor.png'
import img02 from '../../assets/images/slider/02-unwind.png'
import img03 from '../../assets/images/slider/03-upgrade-vacation.png'
import img04 from '../../assets/images/slider/04-scenic-curves.png'
import img05 from '../../assets/images/slider/05-try-before-buy.png'
import img06 from '../../assets/images/slider/06-errand-day.png'

export default function HomeSwiper() {

	const imgArr = [img01,img02,img03,img04,img05,img06];

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
				<SwiperSlide key={subtitle}>				
					<SliderContainer>
					<ImageStyled src={imgArr[idx]} alt={subtitle} />
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





// import Swiper from 'swiper';
// import { Navigation} from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// // init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation],

// 	 // Optional parameters
// 	 direction: 'horizontal',
// 	 loop: true,
  
// 	 // Navigation arrows
// 	 navigation: {
// 		 nextEl: '.swiper-button-next',
// 		 prevEl: '.swiper-button-prev',
// 	 },
 
// });


