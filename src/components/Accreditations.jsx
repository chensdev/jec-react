import React from "react";
import Slider from "react-slick";

export default function Accreditations() {
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		arrows: false,
		speed: 1000,
		slidesToShow: 4,
	};
	return (
		<section id="accreditations">
			<div className="container--sm">
				<h1>Accreditations</h1>
				<Slider {...settings}>
					<div>one</div>
					<div>two</div>
					<div>three</div>
					<div>four</div>
				</Slider>
			</div>
		</section>
	);
}
