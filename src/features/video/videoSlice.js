
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getVideo from './videoApi';

const initialState ={
    video:{},
    isLoading:false,
    isErrror:false,
    error:''
    
}

export const fetchVideo = createAsyncThunk('video/fetchVideo', async(id)=>{
    const video = await getVideo(id)
    return video
})

const videoSlice = createSlice({
    name:'video',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchVideo.pending, (state)=>{
            state.isErrror= false;
            state.isLoading= true
        })
        .addCase(fetchVideo.fulfilled,(state,action)=>{
            state.isLoading=false
            state.video=action.payload
        })
        .addCase(fetchVideo.rejected,(state,action)=>{
            state.isLoading= false
            state.video ={}
            state.isErrror=true
            state.error= action.error?.message
        })
    }
})
export default videoSlice.reducer