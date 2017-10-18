import React, { PureComponent } from 'react';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import ChatView from '../components/ChatView';

class ChatViewContainer extends PureComponent {
  componentWillMount () {
    // pass
  }

  render () {
    return (
      <div>
        <ChatView messages={this.props.messages}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

});

export default withRouter(connect(
  mapStateToProps,
  { /* pass */ }
)(ChatViewContainer));
