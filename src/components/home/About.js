import React, { Component } from "react";
import ReactDOM from "react-dom";
import baffle from "baffle";

export default class About extends Component {
	constructor(props) {
		super(props);

		this.state = {
			intervalGlitch: null,
			glitched: false,
			scrolledTo: false,
		};
	}

	componentDidMount() {
		const intervalGlitch = setInterval(this.glitch, Math.floor(Math.random() * 25000) + 5000);
		this.setState({ intervalGlitch });

		this.scrollReveal();
		window.addEventListener("scroll", this.scrollReveal);
	}

	componentWillUnmount() {
		const { intervalGlitch } = this.state;
		clearInterval(intervalGlitch);
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

	glitch = () => {
		this.setState({ glitched: true });
		setTimeout(() => {
			this.setState({ glitched: false });
		}, Math.floor(Math.random() * 1500) + 500);
	};

	doBaffle = () => {
		baffle(".about-baffle", {
			characters: "█▓▒░",
			speed: 150,
			duration: 1500,
		}).reveal(1500);
		baffle(".about-baffle-long", {
			characters: "█▓▒░",
			speed: 150,
			duration: 2500,
		}).reveal(2500);
	};

	render() {
		const { glitched } = this.state;

		return (
			<section id="About">
				<span className="anchor" id="about"></span>
				<h2 className="about-baffle">About</h2>
				<div>
					<div className="aboutText">
						<h3>
							I am <span className="about-baffle-long bold">Max Altena</span>
						</h3>
						<p>A student living in Best, The Netherlands</p>
						<p>Currently studying ICT & Media Design at Fontys</p>
						<p>Full-stack web developer with 3 years of experience</p>
						<p>Passionate about learning new things and improving</p>
						<p>Focused on creating experiences through user interaction</p>
						<p>Busy most of the time with personal or team projects</p>
						<p>
							Some people call me a &quot;
							<span className={glitched ? "glitch" : ""} onMouseOver={() => this.glitch()}>
								Robot
							</span>
							&quot;
						</p>
					</div>
					<div className={`image${glitched ? " glitch" : ""}`}>
						{glitched ? (
							<img
								src={require("../../assets/images/picture_robot.jpg")}
								title="Max Altena as a robot"
								alt="Photo of Max Altena with a robot emoji over his face"
							/>
						) : (
							<img
								src={require("../../assets/images/picture_max.jpg")}
								title="Max Altena"
								alt="Photo of Max Altena"
							/>
						)}
					</div>
				</div>
			</section>
		);
	}
}
