import React, { Component } from "react";
import "./App.scss";
import { Switch } from "@material-ui/core";

class App extends Component {
  state = {
    checked: false
  };

  handleChange = () => {
    this.testFunc();
    this.setState({ checked: !this.state.checked });
  };

  testFunc = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };

  render() {
    return (
      <div
        className={
          !this.state.checked
            ? "container-wrapper-light"
            : "container-wrapper-dark"
        }
      >
        <div className="container">
          <h1>Light / Dark mode</h1>
          <div className="toggler-container">
            <Switch onChange={this.handleChange} className="custom" />
          </div>
          <p>
            Ex do proident sit et tempor proident aliquip fugiat aliquip sint
            quis. Voluptate occaecat ut adipisicing esse laborum veniam
            occaecat. Cupidatat eu ea dolor voluptate fugiat minim sit deserunt
            reprehenderit duis duis voluptate cillum. Pariatur consequat
            reprehenderit adipisicing Lorem cillum enim voluptate ipsum
            cupidatat fugiat fugiat ut pariatur eu. Excepteur anim commodo in
            Lorem et cillum cillum culpa ad. Occaecat labore cillum et laborum
            amet culpa. Amet eu aute veniam commodo voluptate nostrud magna
            dolore.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
