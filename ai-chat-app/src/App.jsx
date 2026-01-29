
import React from 'react';
import ChatMessage from './Components/Chats/chatWindow.jsx';
import ChatInput from './Components/Chats/chatInput.jsx';
import Sidebar from './Components/Sidebar/sidebar.jsx';
import './App.css';

function App() {
 return (
    <div className="app-layout">
      <Sidebar />
      
     <div className="chat-area">
       <ChatMessage />
        <ChatInput />
       
       
      </div>
    
  </div>
   

   
  )
}

export default App;
