import React from 'react';
import ChatLog from './ChatLog';
import ChatInput from './ChatInput';

class ChatScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lines: [],
    };
    this.handleSend = this.handleSend.bind(this);
  }

  handleSend(data) {
    const lines = this.state.lines;
    lines.push(data.message);
    this.setState({lines: lines});
  }

  render() {
    return (<div>
        <ChatLog lines={this.state.lines} />
        <ChatInput name={this.props.name} onSend={this.handleSend}/>
      </div>);
  }
}

export default ChatScreen;
