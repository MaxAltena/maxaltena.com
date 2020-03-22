import React, { Component } from "react";
import ReactDOM from "react-dom";
import Measure from "react-measure";
import baffle from "baffle";
import Draggable from "react-draggable";

export default class Skills extends Component {
	constructor(props) {
		super(props);

		// TODO: Redo Skills
		// TODO: Create descriptions for each skill to expand on the topic
		// TODO: check for negative skills
		// TODO: sub list
		// TODO: icon

		this.state = {
			scrolledTo: false,
			dimensions: {
				width: 0,
				height: 0
			},
			skills: [
				{
					title: "Languages",
					items: [
						{
							name: "HTML",
							image: require("../../assets/images/skills/html.png"),
							x: 0,
							y: 0
						},
						{
							name: "CSS",
							image: require("../../assets/images/skills/css.png"),
							x: 0,
							y: 0
						},
						{
							name: "SASS",
							image: require("../../assets/images/skills/sass.png"),
							x: 0,
							y: 0
						},
						{
							name: "JavaScript",
							image: require("../../assets/images/skills/javascript.png"),
							x: 0,
							y: 0
						},
						{
							name: "PHP",
							image: require("../../assets/images/skills/php.png"),
							x: 0,
							y: 0
						},
						{
							name: "Swift",
							image: require("../../assets/images/skills/swift.png"),
							x: 0,
							y: 0
						},
						{
							name: "Java",
							image: require("../../assets/images/skills/java.png"),
							x: 0,
							y: 0
						}
					]
				},
				{
					title: "Databases",
					items: [
						{
							name: "MySQL",
							image: require("../../assets/images/skills/mysql.png"),
							x: 0,
							y: 0
						},
						{
							name: "MongoDB",
							image: require("../../assets/images/skills/mongodb.png"),
							x: 0,
							y: 0
						},
						{
							name: "Firebase",
							image: require("../../assets/images/skills/firebase.png"),
							x: 0,
							y: 0
						}
					]
				},
				{
					title: "Frameworks",
					items: [
						{
							name: "Gatsby",
							image: require("../../assets/images/skills/gatsby.png"),
							x: 0,
							y: 0
						},
						{
							name: "React Native",
							image: require("../../assets/images/skills/reactnative.png"),
							x: 0,
							y: 0
						}
					]
				},
				{
					title: "Libraries",
					items: [
						{
							name: "React",
							image: require("../../assets/images/skills/react.png"),
							x: 0,
							y: 0
						},
						{
							name: "Redux",
							image: require("../../assets/images/skills/redux.png"),
							x: 0,
							y: 0
						}
					]
				},
				{
					title: "Programs",
					items: [
						{
							name: "Figma",
							image: require("../../assets/images/skills/figma.png"),
							x: 0,
							y: 0
						},
						{
							name: "Sketch",
							image: require("../../assets/images/skills/sketch.png"),
							x: 0,
							y: 0
						},
						{
							name: "Adobe Suite",
							image: require("../../assets/images/skills/adobe.png"),
							x: 0,
							y: 0
						}
					]
				},
				{
					title: "Websites",
					items: [
						{
							name: "GitHub",
							image: require("../../assets/images/skills/github.png"),
							x: 0,
							y: 0
						},
						{
							name: "CircleCI",
							image: require("../../assets/images/skills/circleci.png"),
							x: 0,
							y: 0
						},
						{
							name: "Heroku",
							image: require("../../assets/images/skills/heroku.png"),
							x: 0,
							y: 0
						}
					]
				},
				{
					title: "Tools",
					items: [
						{
							name: "CSS frameworks",
							x: 0,
							y: 0
						},
						{
							name: "Git",
							image: require("../../assets/images/skills/git.png"),
							x: 0,
							y: 0
						},
						{
							name: "Node",
							image: require("../../assets/images/skills/node.png"),
							x: 0,
							y: 0
						},
						{
							name: "Yarn",
							image: require("../../assets/images/skills/yarn.png"),
							x: 0,
							y: 0
						},
						{
							name: "APIs",
							x: 0,
							y: 0
						}
					]
				}
			]
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
		baffle(".skills-baffle", {
			characters: "█▓▒░",
			speed: 150,
			duration: 1500
		}).reveal(1500);
		baffle(".skills-baffle-long", {
			characters: "█▓▒░",
			speed: 150,
			duration: 2500
		}).reveal(2500);
	};

	renderSkills = () => {
		return this.state.skills.map(skill => {
			return skill.items.map((item, i) => {
				return (
					<Draggable key={i} bounds="parent" grid={[5, 5]}>
						<div className={`drag cat-${skill.title}`}>
							{item.image && <img src={item.image} title={item.name} alt={item.name} />}
							{item.name && <span>{item.name}</span>}
						</div>
					</Draggable>
				);
			});
		});
	};

	renderList = () => {
		return this.state.skills.map(skill => {
			return skill.items.map((item, i) => {
				return (
					<div key={i} className={`skill-item cat-${skill.title}`}>
						{item.image && <img src={item.image} title={item.name} alt={item.name} />}
						{item.name && <span>{item.name}</span>}
					</div>
				);
			});
		});
	};

	render() {
		const { width, height } = this.state.dimensions;

		// ALL DEVICES:
		// TODO: Search in skills
		// TODO: Filter on category externally (under skills above grid)
		// TODO: Filter on tags (frontend, backend etc.)
		// TODO: Add logos/icons to skills
		// TODO: Random order of skills
		// TODO: Create cards from drags

		// DESKTOP + TABLET:
		// TODO: Refresh

		const dragHeight = height / 5 - height / 25 <= 80 ? height / 5 - height / 25 : 80;

		return (
			<section id="Skills">
				<a className="anchor" id="skills" />
				<h2 className="skills-baffle">Skills</h2>
				{/* <div className="options">
          <div className="left">search // tags</div>
          <div className="right">showall // refresh</div>
        </div> */}
				<Measure
					bounds
					onResize={contentRect => {
						this.setState({ dimensions: contentRect.bounds });
					}}
				>
					{({ measureRef }) => (
						<div className="skills-container" ref={measureRef}>
							<style>{`#Skills > div.skills-container > .drag {
                width:${width / 5 - width / 25}px;
                margin-left: ${width / 50}px;
                margin-right: ${width / 50}px;
                max-height: 100px;
                height: ${dragHeight}px;
                margin-top: ${height / 50}px;
                margin-bottom: ${height / 50}px;
              };`}</style>
							{width > 750 ? this.renderSkills() : this.renderList()}
						</div>
					)}
				</Measure>
			</section>
		);
	}
}
