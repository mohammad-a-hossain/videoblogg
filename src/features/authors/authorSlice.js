import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRelatedAuthors } from './authorApi';

const initialState ={
     author: "",
     isLoading:false,
     isErrror:false,
     error:''
}
     

export const fetchrelatedAuthor = createAsyncThunk('authors/fetchrelatedAuthor', async(author)=>{
    const relatedAuthor = await getRelatedAuthors(author)
    return relatedAuthor
})

const relatedAuthorSlice = createSlice({
    name:'relatedAuthor',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchrelatedAuthor.pending, (state)=>{
            state.isErrror= false;
            state.isLoading= true
        })
        .addCase(fetchrelatedAuthor.fulfilled,(state,action)=>{
            state.isLoading=false
            state.author=action.payload
        })
        .addCase(fetchrelatedAuthor.rejected,(state,action)=>{
            state.isLoading= false
            state.author=""
            state.isErrror=true
            state.error= action.error?.message
        })
    }
})
export default relatedAuthorSlice.reducer