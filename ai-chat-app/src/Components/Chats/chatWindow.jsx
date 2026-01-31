
import React, { useEffect, useRef } from 'react';
import { useSelector} from 'react-redux';

import './chatWindow.css';

const ChatMessage = () => {

  const bottomRef = useRef(null);

  const messages  = useSelector(
    (state) => state.chat.messages
  );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  
return (
    <div className="chat-window">
      {messages.length === 0 && (
        <p className="empty-cart">Start a conversation</p>
      )}

      {messages.map((msg, index) => (
        <div
          key={index}
          className={msg.role === 'user' ? 'right' : 'left'}
        >
          <p
            className={`chat-bubble ${
              msg.role === 'user' ? 'you' : 'ai'
            }`}
          >
            {msg.text}
          </p>
        </div>
      ))}

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatMessage;
