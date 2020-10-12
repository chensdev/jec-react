import React from "react";

export default function CaseStudies() {
	return (
		<section id="case-studies">
			<div className="container--sm">
				<div className="cs-content">
						<div className="cs-content__left">
							<h3>Case Studies</h3>
							<h1>Projects we've worked on</h1>
						</div>
						<button className="btn btn--yellow-border">Find out more</button>
				</div>
				<div className="grid">
					<div className="grid__item grid__item--a"><div className="btn-group">
					<button className="btn btn--grey">
						<i class="fas fa-map-marker-alt"></i>Jalou
					</button>
					<button className="btn btn--frosted">
						Learn more<i class="fas fa-long-arrow-alt-right"></i>
					</button>
				</div></div>
					<div className="grid__item grid__item--b"><div className="btn-group">
					<button className="btn btn--grey">
						<i class="fas fa-map-marker-alt"></i>Lila Lilly's
					</button>
					<button className="btn btn--frosted">
					Learn more<i class="fas fa-long-arrow-alt-right"></i>
					</button>
				</div></div>
					<div className="grid__item grid__item--c"><div className="btn-group">
					<button className="btn btn--grey">
						<i class="fas fa-map-marker-alt"></i>Hilton Doubletree
					</button>
					<button className="btn btn--frosted">
					Learn more<i class="fas fa-long-arrow-alt-right"></i>
					</button>
				</div></div>
				</div>
			</div>
		</section>
	);
}
