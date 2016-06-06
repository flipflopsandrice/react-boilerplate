import React from 'react';

class ChatLog extends React.Component {
  render() {
    const rows = [];
    this.props.lines.forEach((row) => {
      rows.push(<li>{row}</li>);
    });
    return <ul>{rows}</ul>;
  }
}

export default ChatLog;
