import React, { Component } from "react";
import ReactDOM from "react-dom";
import Measure from "react-measure";
import baffle from "baffle";
import Draggable from "react-draggable";

export default class Skills extends Component {
  constructor(props) {
    super(props);

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
              x: 0,
              y: 0
            },
            {
              name: "CSS",
              x: 0,
              y: 0
            },
            {
              name: "SCSS",
              x: 0,
              y: 0
            },
            {
              name: "JavaScript",
              x: 0,
              y: 0
            },
            {
              name: "PHP",
              x: 0,
              y: 0
            },
            {
              name: "Swift",
              x: 0,
              y: 0
            },
            {
              name: "Java",
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
              x: 0,
              y: 0
            },
            {
              name: "MongoDB",
              x: 0,
              y: 0
            },
            {
              name: "Firebase",
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
              x: 0,
              y: 0
            },
            {
              name: "React Native",
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
              x: 0,
              y: 0
            },
            {
              name: "Redux",
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
              x: 0,
              y: 0
            },
            {
              name: "Sketch",
              x: 0,
              y: 0
            },
            {
              name: "Adobe Suite",
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
              x: 0,
              y: 0
            },
            {
              name: "CircleCI",
              x: 0,
              y: 0
            },
            {
              name: "Heroku",
              x: 0,
              y: 0
            }
          ]
        },
        {
          title: "Tools",
          items: [
            {
              name: "Git",
              x: 0,
              y: 0
            },
            {
              name: "Node",
              x: 0,
              y: 0
            },
            {
              name: "Yarn",
              x: 0,
              y: 0
            },
            {
              name: "APIs",
              x: 0,
              y: 0
            },
            {
              name: "Materialize",
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
    baffle(".skills-baffle", { characters: "█▓▒░", speed: 150 }).reveal(2500);
    baffle(".skills-baffle-longer", {
      characters: "█▓▒░",
      speed: 150,
      duration: 3000
    }).reveal(3000);
  };

  renderSkills = () => {
    return this.state.skills.map(skill => {
      return skill.items.map((item, i) => {
        return (
          <Draggable key={i} bounds="parent" grid={[5, 5]}>
            <div className={`drag cat-${skill.title}`}>{item.name}</div>
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
            {item.name}
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

    // DESKTOP + TABLET:
    // TODO: Refresh

    const dragHeight =
      height / 5 - height / 25 <= 100 ? height / 5 - height / 25 : 100;

    return (
      <div id="Skills">
        <a className="anchor" id="skills" />
        <h1 className="skills-baffle">Skills</h1>
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
      </div>
    );
  }
}
