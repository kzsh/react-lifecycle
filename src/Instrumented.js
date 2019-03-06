import React, { Component } from "react";

let instanceCounter = 0;
class Instrumented extends Component {
  nthInstance = instanceCounter++;
  state = {};
  name = null;

  constructor(props) {
    super(props);
    this.name = props.name || "";
    this.ref = React.createRef();

    // TODO maybe set first state transition here instead of update?
    this.state.stateTransitions = props.stateTransitions || [];

    this.log("constructor");
  }

  componentDidMount() {
    this.log("componentDidMount");
  }

  componentDidUpdate() {
    this.log("componentDidUpdate");
    this.transition();
  }

  componentWillUnmount() {
    this.log("componentWillUnmount");
  }
  render() {
    const { children } = this.props;

    this.log("render");
    return <div ref={this.ref}>{children}</div>;
  }

  transition() {
    const { stateTransitions } = this.state;
    if (stateTransitions && stateTransitions.length) {
      this.setState({
        state: stateTransitions[0],
        stateTransitions: stateTransitions.slice(1)
      });
    }
  }
  // ${new Array(this.depth)
  //         .fill(1)
  //         .reduce(s => `${s}	`, "")}
  log(...messages) {
    console.log(
      `${this.name || this.nthInstance} [${messages}] : 				`
      // "\nProps: ",
      // this.props,
      // "\nState: ",
      // this.state
    );
  }
}

export default Instrumented;
