import React from 'react';
import WazzupForm from './WazzupForm';

class WazzupFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newWazzupText: '',
      newWazzupAuthor: '',
    }
  }
  render() {
    let resetWazzup = () => this.setState({
      newWazzupText: '',
      newWazzupAuthor: ''
    });
    let updateWazzupText = text => this.setState({
      newWazzupText: text
    });
    let updateWazzupAuthor = author => this.setState({
      newWazzupAuthor: author
    })
    let actions = { resetWazzup, updateWazzupAuthor, updateWazzupText }
    return <WazzupForm {...this.props}
      {...this.state}
      {...actions}
    />
  }
}

export default WazzupFormContainer;