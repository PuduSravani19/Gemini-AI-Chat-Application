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

const ChatSlice =createSlice({
    name:'chat',
    initialState:{
    messages:[],
    loading:false,
    error:null
    },
    reducers:{
        addUserMessages:(state,action)=>{
            state.messages.push({
                role:'user',
                text:action.payload
            });
           
         },
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
export const {addUserMessages,startNewChat,loadChat} =ChatSlice.actions;
export default ChatSlice.reducer;