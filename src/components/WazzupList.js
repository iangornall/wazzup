import React from 'react';
import WazzupRow from './WazzupRow';

let WazzupList = props => (
  <div className="wazzzup-list-container">
    <h2 className="wazzup-list-title">Latest wazzups</h2>
    {(props.wazzups.length > 0) ?
      <ul className="wazzup-list">
        {props.wazzups.map((wazzup) => 
          <WazzupRow wazzup={wazzup} key={wazzup.id } />
        ) }
      </ul> :
      <p>Loading...</p>
    }
  </div>
);

export default WazzupList;