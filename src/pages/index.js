import { Navigation, Splash, Background, About, Skills, Projects, Contact } from "../components/home";
import { SEO, Borders } from "../components/common";

import React, { Component } from "react";

import "../scss/App.scss";

export default class Home extends Component {
	render() {
		return (
			<>
				<SEO />
				<Borders />
				<Navigation />
				<Background />
				<main>
					<Splash />
					<About />
					<Skills />
					<Projects />
					<Contact />
				</main>
			</>
		);
	}
}
