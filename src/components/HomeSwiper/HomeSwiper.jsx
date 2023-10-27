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



export default function HomeSwiper() {
	return (
		<div>
			{/* <div>
				{swiperCardsInfo.map((card, idx)=>(
					<div key={idx}>
					<img src={card.img} alt="" />
					</div>
				))}
			</div> */}
			<Swiper 
			modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
			speed={300}
			navigation
			loop>
				{swiperCardsInfo.map(({img, subtitle, description}) =>(
				<SwiperSlide key={subtitle}>				
					<SliderContainer>
					<ImageStyled src={`/images/${img}`} alt={subtitle} />
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
			<img src="/images/img.png" alt="" />
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


