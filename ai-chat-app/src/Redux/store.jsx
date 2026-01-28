import {configureStore} from '@reduxjs/toolkit';
import ChatReducer from '../Redux/chatSlice.jsx';
 export const store = configureStore({
    reducer:{
        chat:ChatReducer,
    }
 });
  store.subscribe(()=>{
    const messages =store.getState().chat.messages;
    localStorage.setItem('chat_messages',JSON.stringify(messages));
  })