import React from 'react';
import classes from './Concepts.module.css';
import Card from '../UI/Card/Card';
function Concepts(props) {
  return (
    <ul className={classes.concepts}>
      {props.concepts.map((concept) => (
        <Card concept={concept} />
      ))}
    </ul>
  );
}

export default Concepts;
