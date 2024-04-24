// import { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  // console.log(this.props.monsters);
  // console.log("render from CardList");

  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
