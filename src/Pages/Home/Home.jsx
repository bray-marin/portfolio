import React, { Component } from "react";
import "./Home.scss";
import Board from "../../Components/Board/Board";

export default class Home extends Component {
  render() {
    return (
      <main>
        <Board />
      </main>
    );
  }
}
