import React from 'react';
import { title, footerText } from '../data/data';
import WazzupTitle from './WazzupTitle';
import WazzupFormContainer from './WazzupFormContainer';
import WazzupList from './WazzupList';
import WazzupFooter from './WazzupFooter';

let Homepage = ({addWazzup, wazzups}) => (
  <div className="container">
    <WazzupTitle title={title} />
    <WazzupFormContainer addWazzup={addWazzup} />
    <WazzupList wazzups={wazzups} />
    <WazzupFooter footerText={footerText} />
  </div>
)

export default Homepage;