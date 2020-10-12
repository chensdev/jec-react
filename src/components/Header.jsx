import React from "react";
import MenuIcon from "../assets/img/menu.png";
import Logo from "../assets/img/logo.png";

export default function Header() {
	return (
		<header id="header" className="container">
			<div className="navbar">
				<img className="logo" src={Logo} alt="" />
				<span className="menu">
					<img src={MenuIcon} alt="menu button" />
					<span>MENU</span>
				</span>
			</div>
		</header>
	);
}
