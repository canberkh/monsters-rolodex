/* eslint react/prop-types: 0 */
import "./card-list.styles.css";

import React, { useEffect, useState } from "react";

import { Card } from "../card/card.component";

export const CardList = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
