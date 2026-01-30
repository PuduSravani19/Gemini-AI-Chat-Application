import React,{useState} from 'react';
import './sidebar.css';
import {useDispatch,useSelector} from 'react-redux';
import {startNewChat,addChatHistory,loadChat,deleteChat,renameChat,togglePinChat}  from '../../Redux/chatSlice.jsx';


 const Sidebar=()=>{
    const dispatch=useDispatch();
    const chats=useSelector((state)=>state.chat.chats);
    const activeChatId=useSelector((state)=>state.chat.activeChatId);
    const [openMenuId, setOpenMenuId]=useState(null);
    const [editingId,setEditingId]=useState(null);
    const [tempTitle,setTempTitle]=useState('');
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
                    <li key={chat.id} className={`chat-item ${chat.id === activeChatId ?'active':''}`}>
                       {editingId === chat.id ? (
                        <input value={tempTitle} autoFocus onChange={(e)=>setTempTitle(e.target.value)} onBlur={()=>{
                            dispatch(renameChat({id:chat.id,title:tempTitle}));
                            setEditingId(null);
                        }}
                        onKeyDown={(e)=>{
                            if(e.key === 'Enter'){dispatch(renameChat({id:chat.id,title:tempTitle}));
                            setEditingId(null);
                        }
                        }}
                        />):( <span onClick={()=>dispatch(loadChat(chat.id))}>{chat.title}</span>)}


                       
                    <button  className="MenuButton" onClick={()=>setOpenMenuId(openMenuId ===chat.id ? null : chat.id)}>⋯</button>
                    {openMenuId === chat.id && (
                  <div className="chat-menu">
               
                 <button onClick={()=>{
                setEditingId(chat.id);
                setTempTitle(chat.title);
                setOpenMenuId(null);
               }}>Rename</button> 
               <hr />
             
            <button onClick={()=>dispatch(togglePinChat(chat.id))}>{chat.pinned ? 'Unpin':'Pin'}</button>

               {/* ... Delete Option inside ... Menu */}
                <button
                  onClick={() => {
                    dispatch(deleteChat(chat.id));
                    setOpenMenuId(null);
                  }}
                >
                  Delete
                </button>
              </div>
            )}
            </li>
                   
                    
                  ))}
                  
                </ul>
            </div>

        </div>
    )
 }
 export default Sidebar;
