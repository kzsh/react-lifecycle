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
    console.log(this.state.render);
    return (
      <div className="App">
        <Instrumented name={`Instrumented ${this.state.render}`}>
          <Instrumented name="inner 1" />
        </Instrumented>
      </div>
    );
  }
}

export default App;
