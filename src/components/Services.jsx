import React from "react";
import Slider from "react-slick";
// import slideData from "../data/slideData";

export default function Services() {
	const settings = {
		slidesToShow: 3,
		slidesToScroll: 1,
	}
	return (
		// const slideComponent = slideData.map(item => <Slide />)
		<section id="services">
			<div className="container">
				<div className="services-content">
					<div style={{display: "none"}} className="pagination"> {/*connect with custom arrow components*/}
						<button className="prev"><i class="fas fa-angle-left"></i></button>
						<button className="next"><i class="fas fa-angle-right"></i></button>
					</div>
					<h3>Services</h3>
					<h1>Commercial, industrial and retail</h1>
					<p>Carried out by our team of highly skilled 
					and experienced professionals, all of our services are totally bespoke and can be fully tailored to ensure that they meet 
					your exact requirements.
					</p>
					<button className="btn btn--yellow-border">Find out more</button>
				</div>
				<div className="services-slider">
					<Slider {...settings}>
						<div className="servSlide">
						<h1>Industrial & Commercial Installations</h1></div>
						<div className="servSlide"><h1>Specialist Lighting Design and Install</h1></div>
						<div className="servSlide"><h1>Plant Rooms & Boiler Houses</h1></div>
						<div className="servSlide"><h1>Plant Rooms & Boiler Houses</h1></div>
						{/*same as hero carousel: set up slide data and apply*/}
					</Slider>
				</div>
			</div>
		</section>
	);
}
