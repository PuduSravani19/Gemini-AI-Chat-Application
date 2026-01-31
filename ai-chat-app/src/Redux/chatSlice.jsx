import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { sendMessageToGemini } from '../Services/geminiApi.jsx';

export const fetchGeminiReply =createAsyncThunk('chat/fetchGeminiReply',
    async (message,thunkAPI)=>{
        try{
            const reply = await sendMessageToGemini(message)
            return reply
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }

)
const savedChats= JSON.parse(localStorage.getItem('chats')) || [];

const ChatSlice =createSlice({
    name:'chat',
    initialState:{
    messages:[],
    loading:false,
    error:null,
    chats:savedChats,
    activeChatId:null,
    searchQuery:''
    

    },
    reducers:{
        addUserMessages:(state,action)=>{
            state.messages.push({
                role:'user',
                text:action.payload
            });
           
    },
     startNewChat:(state)=>{
                state.messages=[];
                state.error=null;
                state.loading=false;
                state.activeChatId =null;

    },
    addChatHistory:(state)=>{
       if(state.messages.length === 0) return;
       const firstUserMessage =state.messages.find((msg)=>msg.role === 'user');
       if(!firstUserMessage)return;
       const title=firstUserMessage.text.length >30 ?firstUserMessage.text.slice(0,30)+'...':firstUserMessage.text;
       state.chats.unshift({
        id:Date.now(),
        title:title,
        messages:[...state.messages],
        pinned:false,
        archived:false
       });
       localStorage.setItem('chats',JSON.stringify(state.chats));
        
    },
    loadChat:(state,action)=>{
        const chat=state.chats.find((c)=>c.id === action.payload);
        if(!chat) return;
        state.messages=chat.messages;
        state.activeChatId=chat.id;
        state.error=null;
        state.loading=false;
    },
    deleteChat:(state,action)=>{
        const chatId=action.payload;
        state.chats=state.chats.filter((chat)=>chat.id !== chatId);
        state.messages=[];
    },
    renameChat:(state,action)=>{
        const {id,title}=action.payload;
        const chat =state.chats.find((c)=>c.id === id);
        if(chat){
            chat.title=title;
        }
    },
    togglePinChat:(state,action)=>{
        const chat=state.chats.find(c=>c.id === action.payload);
        if(chat){
            chat.pinned =!chat.pinned;
        }
        state.chats.sort((a,b)=>b.pinned -a.pinned);
    },toggleArchiveChat:(state,action)=>{
        const chat =state.chats.find(c=>c.id === action.payload);
        if(chat){
            chat.archived =!chat.archived;
        }
        // if archived chat is currently open,clear window.
        if(chat?.archived){
            state.messages =[];
        }
    },
    setSearchQuery :(state,action)=>{
        state.searchQuery =action.payload;
    }


           
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchGeminiReply.pending,(state)=>{
            state.loading =true;
            state.error=null;
        })
        .addCase(fetchGeminiReply.fulfilled,(state,action)=>{
            state.loading =false;
            state.messages.push({
                role:'ai',
                text:action.payload
            });
          
            
            
        })
        .addCase(fetchGeminiReply.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload || 'Something Went Wrong';
            state.messages.push({
                role:'ai',
                text:' Sorry, I could not respond. Please try again.'
            })
        })
    }
})
export const {addUserMessages,startNewChat,addChatHistory,loadChat,deleteChat,renameChat,togglePinChat,toggleArchiveChat,setSearchQuery} =ChatSlice.actions;
export default ChatSlice.reducer;