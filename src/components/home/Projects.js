import React, { Component } from "react";
import ReactDOM from "react-dom";
import baffle from "baffle";

import { Projects as ProjectList, GitHubRepos } from "../projects";

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrolledTo: false
		};
	}

	componentDidMount() {
		this.scrollReveal();
		window.addEventListener("scroll", this.scrollReveal);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollReveal);
	}

	scrollReveal = () => {
		const height = window.innerHeight;
		const scroll = window.scrollY;
		// eslint-disable-next-line react/no-find-dom-node
		const offsetTop = ReactDOM.findDOMNode(this).offsetTop;

		if (!this.state.scrolledTo && height + scroll > offsetTop) {
			this.doBaffle();
			this.setState({ scrolledTo: true });
		}
	};

	doBaffle = () => {
		baffle(".projects-baffle", {
			characters: "█▓▒░",
			speed: 150,
			duration: 1500
		}).reveal(1500);
	};

	render() {
		return (
			<section id="Projects">
				<a className="anchor" id="projects" />
				<h2 className="projects-baffle">Projects</h2>

				<ProjectList />
				<GitHubRepos username="MaxAltena" />
			</section>
		);
	}
}
