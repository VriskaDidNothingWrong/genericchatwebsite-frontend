import React from 'react';

import { withRouter } from 'react-router';

const ChatList = ({ chats, history }) => {
  if (!chats || chats.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <div className='chats'>
      <h1> chats list </h1>
    </div>
  );
};

export default withRouter(ChatList);
