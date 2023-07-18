import React from 'react';
import classes from './Card.module.css';

function Card(props) {
  return (
    <li className={classes.concept}>
      <img src={props.concept.image} alt={props.concept.title} />
      <h2>{props.concept.title}</h2>
      <p>{props.concept.description}</p>
    </li>
  );
}

export default Card;
