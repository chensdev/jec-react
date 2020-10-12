import React from "react";

export default function HeroSlide(props) {
	const backgroundImage = {
		backgroundImage: props.slide.imgurl,
	};
	return (
		<div className="slide" style={backgroundImage}>
			<div className="container">
				<div className="hero-content">
					<h3>INDUSTRIAL SERVICES</h3>
					<h1>Professional Electrical Contractors</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Quas ut amet tempore distinctio doloremque iure
						ipsum? Voluptate at et commodi?
					</p>
					<button className="btn btn--yellow-border">
						Find out more
					</button>
				</div>
				<div className="btn-group">
					<button className="btn btn--grey">
						<i class="fas fa-map-marker-alt"></i>Treehouse Hotels
					</button>
					<button className="btn btn--frosted">
						View all case studies<i class="fas fa-long-arrow-alt-right"></i>
					</button>
				</div>
			</div>
		</div>
	);
}
