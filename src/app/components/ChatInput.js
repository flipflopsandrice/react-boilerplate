import React from 'react';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleChange(e) {
    this.setState({message: e.target.value});
  }

  handleSend(e) {
    e.preventDefault();
    this.props.onSend({message: this.state.message});
    this.setState({message: ''});
  }

  render() {
    return (<div>
      {this.name}
      <form onSubmit={this.handleSend}>
        <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <button type="submit">Send</button>
      </form>
    </div>);
  }
}

export default ChatInput;
