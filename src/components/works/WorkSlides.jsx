import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import './swiperjs.scss';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function App() {
	return (
		<>
			<Swiper
			
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				watchSlidesProgress
				slidesPerView={1}
				grabCursor={true}
				loop={true}
				pagination={{
					clickable: true,
				}}
				// navigation={true}
				modules={[Pagination, Navigation, Autoplay]}
				className="mySwiper two curve"
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
			</Swiper>
		</>
	);
}
