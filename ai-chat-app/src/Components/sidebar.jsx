
import {useDispatch,useSelector} from 'react-redux';
import {startNewChat,loadChat} from '../Redux/chatSlice.jsx';

const Sidebar=()=>{
    const dispatch=useDispatch();
    const chats=useSelector((state)=>state.chat.chats);
    return(
        <div className="sidebar">
        <button className="btn" onClick={()=>dispatch(startNewChat())}>+ New Chat</button>
        
       <div> you chats</div>
       
       
      
      
        
        
       
        </div>
    )
}
export default Sidebar;