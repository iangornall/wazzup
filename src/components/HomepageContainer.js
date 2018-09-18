import React from 'react';
import Homepage from './Homepage';
import { initialWazzupData } from '../data/data';

class HomepageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.addWazzup = this.addWazzup.bind(this);
    this.getWazzups = this.getWazzups.bind(this);
    this.state = {
      wazzups: []
    }
  }
  addWazzup(newWazzup) {
    this.setState(prevState => ({
      wazzups: [...prevState.wazzups, newWazzup]
    }));
  }
  getWazzups() {  // Pass down to functions that need it!
    fetch('http://0.tcp.ngrok.io:11140/wassups.json')
    .then(res => res.json())
    .then(wazzups => {
      console.log(wazzups);
      this.setState({wazzups}) })
    .catch(err => {
      console.log(err);
      console.log('Loading backup data');
      this.setState({wazzups: initialWazzupData})
    })
  }
  componentDidMount() {
    this.getWazzups();
  }
  // separate code in render into another component
  render() {
    return (
      <Homepage addWazzup={this.addWazzup} wazzups={this.state.wazzups} />
    )
  }
}

export default HomepageContainer;