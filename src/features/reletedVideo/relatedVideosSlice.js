
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRelatedVideos } from './relatedVideosApi';

const initialState ={
    relatedVideos:[],
    isLoading:false,
    isErrror:false,
    error:''
    
}

export const fetchrelatedVideos = createAsyncThunk('relatedVideos/fetchrelatedVideos', async({id,tags})=>{
    const relatedVideos = await getRelatedVideos({id,tags})
    return relatedVideos
})

const relatedVideosSlice = createSlice({
    name:'relatedVideos',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchrelatedVideos.pending, (state)=>{
            state.isErrror= false;
            state.isLoading= true
        })
        .addCase(fetchrelatedVideos.fulfilled,(state,action)=>{
            state.isLoading=false
            state.relatedVideos=action.payload
        })
        .addCase(fetchrelatedVideos.rejected,(state,action)=>{
            state.isLoading= false
            state.relatedVideos=[]
            state.isErrror=true
            state.error= action.error?.message
        })
    }
})
export default relatedVideosSlice.reducer