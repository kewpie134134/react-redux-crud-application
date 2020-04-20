// JSXを使用する際は、Reactをインポートする必要がある
import React, { Component } from "react";

// JSX表記方法
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input
          type="text"
          onChange={() => {
            console.log("I am clicked!!");
          }}
        ></input>
      </React.Fragment>
    );
  }
}

export default App;
