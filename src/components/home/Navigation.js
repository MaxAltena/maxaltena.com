import React, { Component } from "react";
import Measure from "react-measure";
import { Sidebar } from "../common";

export default class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dimensions: {
				width: 0,
				height: 0
			},
			sidebarOpen: false
		};
	}

	render() {
		const { dimensions, sidebarOpen } = this.state;
		const { width } = dimensions;

		return (
			<Measure
				bounds
				onResize={contentRect => {
					this.setState({ dimensions: contentRect.bounds });
				}}
			>
				{({ measureRef }) => (
					<nav ref={measureRef}>
						{width >= 900 ? (
							<div id="menuLarge">
								<div className="logo">
									<a href="#">
										<img
											src={require("../../assets/vectors/logo.svg")}
											title="Logo"
											alt="Logo of Max Altena"
										/>
									</a>
								</div>
								<div className="divider-v" />
								<div className="items">
									<div className="item">
										<a href="#about">About</a>
									</div>
									<div className="divider-v" />
									<div className="item">
										<a href="#skills">Skills</a>
									</div>
									<div className="divider-v" />
									<div className="item">
										<a href="#projects">Projects</a>
									</div>
									<div className="divider-v" />
									<div className="item">
										<a href="#contact">Contact</a>
									</div>
								</div>
								<div className="divider-v" />
								<div className="socials">
									<div className="social">
										<a
											href="https://github.com/MaxAltena"
											target="_blank"
											rel="noopener noreferrer"
										>
											<img
												src={require("../../assets/icons/github.svg")}
												title="GitHub"
												alt="GitHub"
											/>
										</a>
									</div>
									<div className="divider-v" />
									<div className="social">
										<a
											href="https://www.linkedin.com/in/maxaltena/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<img
												src={require("../../assets/icons/linkedin.svg")}
												title="LinkedIn"
												alt="LinkedIn"
											/>
										</a>
									</div>
								</div>
							</div>
						) : (
							<Sidebar
								sidebar={
									<div id="menuSmall-burger" onClick={() => this.setState({ sidebarOpen: true })}>
										<div className="row" />
										<div className="row" />
										<div className="row" />
									</div>
								}
								open={sidebarOpen}
								onSetOpen={state => this.setState({ sidebarOpen: state })}
								sidebarId="menuSmall"
							>
								<div className="row">
									<div id="close" onClick={() => this.setState({ sidebarOpen: false })} tabIndex="0">
										<span />
									</div>
									<div className="divider-v" />
									<a href="#" id="logo" onClick={() => this.setState({ sidebarOpen: false })}>
										<img
											src={require("../../assets/vectors/logo.svg")}
											title="Logo"
											alt="Logo of Max Altena"
										/>
									</a>
								</div>
								<div className="divider-h" />
								<div>
									<div>
										<a href="#about" onClick={() => this.setState({ sidebarOpen: false })}>
											About
										</a>
									</div>
									<div className="divider-h" />
									<div>
										<a href="#skills" onClick={() => this.setState({ sidebarOpen: false })}>
											Skills
										</a>
									</div>
									<div className="divider-h" />
									<div>
										<a href="#projects" onClick={() => this.setState({ sidebarOpen: false })}>
											Projects
										</a>
									</div>
									<div className="divider-h" />
									<div>
										<a href="#contact" onClick={() => this.setState({ sidebarOpen: false })}>
											Contact
										</a>
									</div>
									<div className="divider-h" />
									<div className="row">
										<a
											href="https://github.com/MaxAltena"
											className="social"
											target="_blank"
											rel="noopener noreferrer"
											onClick={() => this.setState({ sidebarOpen: false })}
										>
											<img
												src={require("../../assets/icons/github.svg")}
												title="GitHub"
												alt="GitHub"
											/>
										</a>
										<div className="divider-v" />
										<a
											href="https://www.linkedin.com/in/maxaltena/"
											className="social"
											target="_blank"
											rel="noopener noreferrer"
											onClick={() => this.setState({ sidebarOpen: false })}
										>
											<img
												src={require("../../assets/icons/linkedin.svg")}
												title="LinkedIn"
												alt="LinkedIn"
											/>
										</a>
									</div>
								</div>
							</Sidebar>
						)}
					</nav>
				)}
			</Measure>
		);
	}
}
