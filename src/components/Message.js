import React from 'react';

import './Message.css';

const Message = ({ message, senderChange, lastSender, _key, dispatch }) => {
  let prependedExtras = [];

  return <div className='message' key={_key}>
    {prependedExtras}
    <span className='created'>{message.created}</span>
    <span className='content'>{message.content}</span>
  </div>;
};

export default Message;
