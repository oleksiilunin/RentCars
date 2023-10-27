import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

// import './styles.css';


export default function HomeSwiper() {
	return (
		<div>
			<Swiper 
			modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}			
			navigation={true}>
				<SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
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


