import React,{useState} from 'react';
import './sidebar.css';
import {useDispatch,useSelector} from 'react-redux';
import {startNewChat,addChatHistory,loadChat,deleteChat,renameChat,togglePinChat,toggleArchiveChat,startSearch}  from '../../Redux/chatSlice.jsx';


 const Sidebar=()=>{
    const dispatch=useDispatch();
    
    const {chats,searchQuery} = useSelector((state) => state.chat);
    const activeChatId=useSelector((state)=>state.chat.activeChatId);
    const [openMenuId, setOpenMenuId]=useState(null);
    const [editingId,setEditingId]=useState(null);
    const [tempTitle,setTempTitle]=useState('');
    //const [isSearchOpen,setIsSearchOpen]=useState(false);
    const handleNewChat=()=>{
        dispatch(addChatHistory());
        dispatch(startNewChat());
    
    }
    const exportChat = (chat)=>{
        const content =chat.messages.map((m)=> `${m.role.toUpperCase()}:${m.text}`).join('\n\n');
        const blob = new Blob ([content],{type: 'text/plain'});
        const url =URL. createObjectURL(blob);
        const a=document .createElement('a');
        a.href =url;
        a.download =`${chat.title}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const visibleChats = chats
  .filter(chat => !chat.archived)
  .filter(chat =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

    
   
  
    
    return(
        <div className="sidebar">
            <button className="new-chat-btn" onClick={handleNewChat}>+ New Chat</button>
            <button className="new-search-chat" onClick={()=>dispatch(startSearch())}>Search chats</button>
            {chats.map(chat =>(
                <div key={chat.id} onClick={()=>dispatch(loadChat(chat.id))} className="chat-item">{chat.title}</div>
            ))}
           
           

            <div className="chat-history">
              <p className="history-title">Chat History</p>
                <ul>
                  {visibleChats.map((chat)=>(
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
               }}>Rename</button> <br />
               <button onClick={()=> {exportChat(chat); setOpenMenuId(null);}}>Export</button>
               <hr />
             
            <button onClick={()=>dispatch(togglePinChat(chat.id))}>{chat.pinned ? 'Unpin':'Pin'}</button> <br />
            <button
          onClick={() => {
            dispatch(toggleArchiveChat(chat.id));
            setOpenMenuId(null);
          }}
        >
          {chat.archived ? 'unArchive' :'Archive'}
        </button>
          <br />
          

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
