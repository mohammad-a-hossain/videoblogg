import React, { useEffect } from 'react'
import { VideoListItem } from './videoListItem'
import { useDispatch, useSelector } from 'react-redux';
//import { getRelatedVideos } from './../../features/reletedVideo/relatedVideosApi';
import { fetchrelatedVideos } from './../../features/reletedVideo/relatedVideosSlice';

export const RelatedVideoList = ({currentVideoId,tags}) => {
         const dispatch = useDispatch()
         const { relatedVideos,isLoading,isError,error}= useSelector(state => state.relatedVideos)
        console.log(relatedVideos)
         useEffect(()=>{
            dispatch(fetchrelatedVideos({tags,id:currentVideoId}))
         },[dispatch,tags,currentVideoId])

         let content;
    
         if(isLoading) content = <div class="col-span-12">loading ...</div>
         if(!isLoading && !isError) content = <div class="col-span-12">{error}</div>
          
         if(!isError && !isLoading && relatedVideos?.length === 0 ){
          content = <div class="col-span-12">no video found</div>
        } 
        if( !isError && !isLoading && relatedVideos?.length > 0 ){
          content = relatedVideos.map((rvideo) => (
            <VideoListItem rvideo={rvideo} key={rvideo.id}/>
          ))
        }

  return (
    <div
    class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
>
    {/* <!-- single related video --> */}
          {content }
    </div>
  )
}
