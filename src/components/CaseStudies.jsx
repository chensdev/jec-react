import React from "react";

export default function CaseStudies() {
	return (
		<section id="case-studies">
			<div className="container--sm">
				<div className="cs-content">
						<div className="cs-content__left">
							<h1>Case Studies</h1>
							<p>Projects we've worked on.</p>
						</div>
						<button className="btn btn--yellow-border">Find out more</button>
				</div>
				<div className="grid">
					<div className="grid__item grid__item--a"></div>
					<div className="grid__item grid__item--b"></div>
					<div className="grid__item grid__item--c"></div>
				</div>
			</div>
		</section>
	);
}
