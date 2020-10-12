import React from "react";
// import Slider from 'react-slick'
// import slideData from "../data/slideData";

export default function Services() {
	// const settings = {
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	infinite: true,
	// 	arrows: true,
	// }
	return (
		// const slideComponent = slideData.map(item => <Slide />)
		<section id="services">
			<div className="container">
				<div className="services-content"><h3>Services</h3>
					<h1>Commercial, industrial and retail</h1>
					<p>Carried out by our team of highly skilled 
					and experienced professionals, all of our services are totally bespoke and can be fully tailored to ensure that they meet 
					your exact requirements.
					</p>
					<button className="btn btn--yellow-border">Find out more</button>
				</div>
				<div className="servSlide">slide 1</div>
				<div className="servSlide">slide 2</div>
				<div className="servSlide">slide 3</div>
				{/* <Slider {...settings}>{slideComponent}</Slider> */}
			</div>
		</section>
	);
}
