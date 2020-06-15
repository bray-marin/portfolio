import React, { Component } from "react";
import "./Board.scss";

export default class Board extends Component {
  state = {
    boardIsVisible: true,
  };

  componentDidMount() {
    this.setState(this.state, (prevState, props) => {
      prevState = props;
    });
  }

  render() {
    if (this.state.boardIsVisible) {
      // document.getElementById("body").style.overflow = "hidden";
      // document.getElementById("root").style.overflow = "hidden";
    }
    return (
      <div id="board" className="slides__container">
        <section className="slide" id="slide1">
          <div className="slide__info">
            <h1>Lorem.</h1>
          </div>
          <button className="nav_button right">---{">"}</button>
          <button className="nav_button bottom">---{">"}</button>
        </section>
        <section className="slide" id="slide2">
          <div className="slide__info">
            <h1>Lorem.</h1>
          </div>
          <button className="nav_button left">{"<"}---</button>
          <button className="nav_button bottom">---{">"}</button>
        </section>
        <section className="slide" id="slide3">
          <div className="slide__info">
            <h1>Lorem.</h1>
          </div>
          <button className="nav_button right">---{">"}</button>
          <button className="nav_button top">---{">"}</button>
        </section>
        <section className="slide" id="slide4">
          <div className="slide__info">
            <h1>Lorem.</h1>
            <button className="special_button">Continuar</button>
          </div>
          <button className="nav_button left">{"<"}---</button>
          <button className="nav_button top">---{">"}</button>
        </section>
      </div>
    );
  }
}
