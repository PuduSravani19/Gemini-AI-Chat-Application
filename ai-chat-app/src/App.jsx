
import React from 'react';
import ChatInput from './Components/chatInput.jsx';
import ChatMessage from './Components/chatMessages.jsx';

import './App.css';



function App() {
 
  

  return (
    <div className="app-layout">
      
     <div className="chat-area">
        <ChatInput />
        <ChatMessage />
      </div>
    
  </div>
   

   
  )
}

export default App;
