import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Description from '../components/videoDescription/Player/description'
import Player from '../components/videoDescription/Player/player'
import { RelatedVideoList } from '../components/VideoList/relatedVideo'
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideo } from './../features/video/videoSlice';


export const Video = () => {
  const dispatch = useDispatch()
  const {videoId} = useParams()

  const {video, isLoading, isError, error} = useSelector(state => state.video)
  console.log(videoId)

  useEffect(()=>{
     dispatch(fetchVideo(videoId))
  },[dispatch,videoId])
     
  const {link, title,id, tags} = video || {}

  let videoContent = null 

  if(isLoading) videoContent = (<div class="col-span-12">loading ...</div>)
  if(!isLoading && isError) {videoContent = <div class="col-span-12">{error}</div>}
// console.log(videoId,'found')
   if( !isError && !video?.id ) {videoContent= <div class="col-span-12">no video found</div>}
  console.log(videoId,'if found') 

  if(!isLoading && ! isError && video?.id ){
   videoContent=(<div class="grid grid-cols-3 gap-2 lg:gap-8">
      <div class="col-span-full w-full space-y-8 lg:col-span-2">

            <Player link={link} title={title}/>

           <Description video ={video}/>
      </div>
          <RelatedVideoList id={id} tags={tags}/>
     </div>)
  }

     return (
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
            {videoContent}
        </div>
      </section>
     )
  }


/*     <section class="pt-6 pb-20">
    <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">

                <Player/>

               <Description/>

            </div>
            <RelatedVideoList/>
        </div>
    </div>
</section> */