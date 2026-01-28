import React from 'react';
import './sidebar.css';
import {useDispatch} from 'react-redux';
import {startNewChat}  from '../../Redux/chatSlice.jsx';

 const Sidebar=()=>{
    const dispatch=useDispatch();
    return(
        <div className="sidebar">
            <button className="new-chat-btn" onClick={()=>dispatch(startNewChat())}>+ New Chat</button>
            <div className="chat-history">
                <p className="history-title">Chat History</p>
                <ul>
                    <li className="chat-item">How to use gemini api</li>
                    <li className="chat-item">what is redux concepts</li>
                    <li className="chat-item">why used redux nowdays than class based components</li>
                </ul>
            </div>

        </div>
    )
 }
 export default Sidebar;
