import React, { Component } from "react";
import "./App.css";

import Instrumented from "./Instrumented";

class App extends Component {
  state = { render: 1 };

  componentDidMount() {
    this.setState({
      render: 2
    });
  }
  render() {
    return (
      <div className="App">
        <Instrumented name="-1">
          <Instrumented name="----1" stateTransitions={[1, 2]} />
          <Instrumented name="----2" stateTransitions={[1, 2]}>
            <Instrumented name="--------1" stateTransitions={[1, 2]} />
          </Instrumented>
        </Instrumented>
      </div>
    );
  }
}

export default App;
