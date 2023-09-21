import React from 'react';

import './Card.css';

/* props -> the a react object has by default properties (className: holds class names passed with card component when using it as a wrapper , children: holds every JSX element inside card wrapper) */
const Card = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
