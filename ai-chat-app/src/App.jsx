
import React from 'react';
import ChatMessage from './Components/Chats/chatWindow.jsx';
import ChatInput from './Components/Chats/chatInput.jsx';
import Sidebar from './Components/Sidebar/sidebar.jsx';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import './App.css';

function App() {
  const chats=useSelector((state)=>state.chat.chats);
  useEffect(()=>{
    localStorage.setItem('chats',JSON.stringify(chats));
  },[chats]);
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
