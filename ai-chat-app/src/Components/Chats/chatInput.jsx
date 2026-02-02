import React, {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { addUserMessages,fetchGeminiReply} from '../../Redux/chatSlice.jsx';
import './chatInput.css';
const ChatInput =()=>{
    const[text,setText]=useState('');
    const dispatch=useDispatch();
    const {loading} =useSelector((state)=>state.chat);
    const handleSend=()=>{
        if(!text.trim())return;
        dispatch(addUserMessages(text))
        dispatch(fetchGeminiReply(text));
      
        
        setText('');
    }
    return(
        <div className="chat-input">
        
            <input className="input" type="text" placeholder="Ask something" value={text} onChange={(e)=>setText(e.target.value)} style={{flex:1,padding:'8px'}} disabled={loading}/>
            <button  className="button" onClick ={handleSend} disabled={loading}>
               {loading ? 'Thinking...':'Send'}
            </button>

            
           
           

        </div>
    )
}
export default ChatInput;
