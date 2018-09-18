import React from 'react';

const WazzupPage = props => (
  <div class="container">
    <h1>Wazzup!</h1>
    <p>This is wazzup #{props.match.params.id}</p>
  </div>
)

export default WazzupPage;