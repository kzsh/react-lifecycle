import React, { Component } from "react";
class Instrumented extends Component {
  name = null;
  constructor(props) {
    super(props);
    this.name = props.name;
    this.log("constructor");
  }
  componentDidMount() {
    this.log("componentDidMount");
  }
  componentDidUpdate() {
    this.log("componentDidUpdate");
  }
  render() {
    const { children } = this.props;
    this.log("render");
    return <div>{children}</div>;
  }

  log(...messages) {
    console.log(`${this.name}:`, ...messages);
  }
}

export default Instrumented;
