import React from 'react';
import './sidebar.css';
import {useDispatch,useSelector} from 'react-redux';
import {startNewChat,addChatHistory}  from '../../Redux/chatSlice.jsx';

 const Sidebar=()=>{
    const dispatch=useDispatch();
    const chats=useSelector((state)=>state.chat.chats);
    const handleNewChat=()=>{
        dispatch(addChatHistory());
        dispatch(startNewChat());
    }
    
    return(
        <div className="sidebar">
            <button className="new-chat-btn" onClick={handleNewChat}>+ New Chat</button>
            <div className="chat-history">
              
              
                
                <p className="history-title">Chat History</p>
                <ul>
                  {chats.map((chat)=>(
                    <li key={chat.id} className="chat-item">{chat.title}</li>
                  ))}
                  
                </ul>
            </div>

        </div>
    )
 }
 export default Sidebar;
