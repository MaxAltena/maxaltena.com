import React, { Component } from "react";

export default class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = { elements: [] };
  }

  componentDidMount() {
    const amount = Math.floor(Math.random() * 6) + 8;
    const shapes = ["circle", "square", "half-circle"];
    const sizes = [1, 2, 3, 4, 5];
    const rotations = [1, 2, 3, 4, 5, 6, 7, 8];
    const colors = [
      "maroon",
      "red",
      "purple",
      "fuchsia",
      "green",
      "lime",
      "olive",
      "yellow",
      "navy",
      "blue",
      "teal",
      "aqua",
      "orange"
    ];
    let elements = [];

    // Loop amount of times for elements
    for (let i = 0; i < amount; i++) {
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const rotation = rotations[Math.floor(Math.random() * rotations.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];

      // Get random positions
      const x = Math.floor(Math.random() * 105) - 10;
      const y = Math.floor(Math.random() * 85) - 10;

      elements.push({ id: i, shape, size, rotation, color, x, y });
    }

    this.setState({ elements });
  }

  renderShapes = () => {
    const { elements } = this.state;

    return elements.map(element => {
      const { id, shape, color, size, rotation, x, y } = element;
      const rotationClass =
        shape === "half-circle" ? `rotation${rotation}` : "";
      return (
        <div
          key={id}
          className={`${shape} size${size} ${rotationClass}`}
          style={{ left: `${x}vw`, top: `${y}vh`, backgroundColor: color }}
        />
      );
    });
  };

  render() {
    return <div id="background">{this.renderShapes()}</div>;
  }
}
