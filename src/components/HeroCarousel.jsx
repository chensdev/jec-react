import React, { Component } from "react";
import Slider from "react-slick";
import HeroSlide from "./HeroSlide";
import slideData from "../data/slideData";

export class HeroCarousel extends Component {
	render() {
		/*mapping out slide data to pass down to slide as props*/
		const slideComponent = slideData.map(item => <HeroSlide slide={item} />);
		/*Slick carousel settings*/
		const settings = {
			dots: false,
			infinite: true,
			autoplay: true,
			arrows: false,
			fade: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		return (
			<section className="carousel">
				<Slider {...settings}>{slideComponent}</Slider>
			</section>
		);
	}
}

export default HeroCarousel;
