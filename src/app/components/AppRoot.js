import React from 'react';
import ChatScreen from './ChatScreen';

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Henk',
    };
  }

  render() {
    return (<div>
      <h1>Chat</h1>
      <ChatScreen name={this.state.name} />
    </div>);
  }
}

// AppRoot.propTypes = {
//   state: React.PropTypes.object.isRequired,
// };

export default AppRoot;
