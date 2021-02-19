import React from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ id, title, category, theme }) {
  console.log('List - ',id)
  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`https://images.pexels.com/photos/56865/adler-bird-bird-of-prey-raptor-56865.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      {<Link to={`/cards/${id}`}  className={`card-open-link`} />}
      {/* to={`cards/${id}`} */}
    </li>
  );
}

export function List({selectedId}) {
  return (
    <ul className="card-list">
      {items.map(card => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
