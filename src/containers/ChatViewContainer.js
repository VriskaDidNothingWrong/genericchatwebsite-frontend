import React, { PureComponent } from 'react';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import ChatView from 'components/ChatView';

class ChatViewContainer extends PureComponent {
  render () {
    return (
      <div>
        <ChatView messages={this.props.messages}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  messages: []
  // chat: chatActions.getChat(ownProps.match.params.chat_name, state),
  // messages: chatActions.getMessages(ownProps.match.params.chat_name, state)
});

export default withRouter(connect(
  mapStateToProps,
  { /* pass */ }
)(ChatViewContainer));
