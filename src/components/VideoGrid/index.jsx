import React,{useEffect} from 'react'
import { VideoItem } from '../videoItem'
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideos } from '../../features/videos/videoSlice';
import { useHook } from './../../customHook/useHook';


export const VideoGrid = () => {
 const {firstPostIndex, lastPostIndex } = useHook()

  const dispatch = useDispatch()
    const {videos,isLoading,isError,error} = useSelector(state => state.videos)
 

  const {tags,search} = useSelector(state => state.filters)

  useEffect(() => {
    dispatch(fetchVideos({tags,search}))
  }, [dispatch,tags, search])

   const currentPost = videos.slice(firstPostIndex, lastPostIndex)
  //  console.log(currentPost)
  let content;
    
   if(isLoading) content = <div class="col-span-12">loading ...</div>
   if(!isLoading && !isError) content = <div class="col-span-12">{error}</div>
    
   if(!isError && !isLoading && videos?.length === 0 ){
    content = <div class="col-span-12">no video found</div>
  } 
  if( !isError && !isLoading && videos?.length > 0 ){
    
    content = currentPost.map((video) => (
       <VideoItem key={video.id} video={video}/>
       
    ))
  }
  
  return (
    <section class="pt-12">
            <section class="pt-12">
                <div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                 {content}
                </div>
            </section>
        </section>
  )
}
