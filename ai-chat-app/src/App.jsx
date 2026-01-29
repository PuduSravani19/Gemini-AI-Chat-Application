
import React from 'react';
import ChatInput from './Components/Chats/chatInput.jsx';
import ChatMessage from './Components/Chats/chatWindow.jsx';
import Sidebar from './Components/Sidebar/sidebar.jsx';
import './App.css';

function App() {
 return (
    <div className="app-layout">
      <Sidebar />
      
     <div className="chat-area">
        <ChatInput />
        <ChatMessage />
      </div>
    
  </div>
   

   
  )
}

export default App;
