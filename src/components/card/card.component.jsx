/* eslint react/prop-types: 0 */
import "./card.styles.css";

import React from "react";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x280`}
      />
      <h2 key={props.monster.id}>{props.monster.name}</h2>
      <p> {props.monster.email} </p>
    </div>
  );
};
