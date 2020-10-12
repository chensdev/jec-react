import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import CaseStudies from "./components/CaseStudies";
import ContactUs from "./components/ContactUs";
import Accreditations from "./components/Accreditations";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<HeroCarousel />
			<Services />
			<AboutUs />
			<CaseStudies />
			<ContactUs />
			<Accreditations />
			<Footer />
		</div>
	);
}

export default App;
