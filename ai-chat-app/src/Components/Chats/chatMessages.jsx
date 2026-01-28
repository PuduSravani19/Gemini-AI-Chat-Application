import {useSelector} from 'react-redux';
import './chatMessage.css';
const ChatMessage =()=>{
    const {messages,error}=useSelector((state)=>state.chat);
    return(
        <div  className="container" style={{border:'1px solid #ccc,padding:10px, height:40px,overflowY:auto'}}>
            {messages.length === 0 && (
                <p className="empty-cart">start conversation</p>
            )}
            {messages.map((msg,index)=>(
                <div  key={index} className={msg.role === 'user'?'right':'left'}>
                    <p className={`chat-bubble &{msg.role === 'user'? "you":'"AI"}`}>{msg.text}</p>
                   
                   
                </div>
            ))}
            {error && <p style={{color:'red'}}>{error}</p>}

        </div>
    )
}
export default ChatMessage;