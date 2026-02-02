
import React, { useEffect, useRef } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {searchChats} from "../../Redux/chatSlice.jsx";

import './chatWindow.css';

const ChatMessage = () => {

  const bottomRef = useRef(null);
  const dispatch=useDispatch();

  const {messages,chats,currentChatId,isSearching,searchQuery,searchResults}   = useSelector(
    (state) => state.chat);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // search mode UI
  if(isSearching){
    return(
        <div className="search-heading">
            <input type='text'className="search-input" placeholder="searching" value={searchQuery} onChange={(e)=>dispatch(searchChats(e.target.value))}/>
            {searchResults.length === 0 && searchQuery && ( <p>No matching chats</p>)}
            {searchResults.map(chat=>(
                <div key={chat.id} className="search-result">
                    <h4>{chat.title}</h4>
                    {chat.messages.map((msg,index)=>(
                        <p key={index}>{msg.text}</p>
                    ))}
                </div>
            ))}
        </div>
    );
  }
   const currentChat= chats.find(c=>c.id === currentChatId);

  
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
      {currentChat?.messages.map((msg,index)=>(
        <p key={index}>{msg.text}</p>
      ))}

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatMessage;
