import React from 'react';
import { Link } from 'react-router-dom';

let WazzupRow = props => (
  <li className="wazzup-container">
    <p className="wazzup-text">{props.wazzup.content}</p>
    <div className="wazzup-author">{'posted by ' + props.wazzup.user}</div>
    <Link to={'/wazzups/' + props.wazzup.id} className="more">Show me more!</Link>
  </li>
);

export default WazzupRow;