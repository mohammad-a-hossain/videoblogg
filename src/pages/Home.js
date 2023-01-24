import React from 'react'

import { Tags } from '../components/Tags/index';
import { VideoGrid } from '../components/VideoGrid/index';
import { Pagination } from './../components/UI/pagination';
//import { useHook } from './../customHook/useHook';

 const Home=()=>{
  // const { videos,
  //   postPerPage,
  //  currentPage} = useHook()
  return (
    <>
    <Tags/>
    <VideoGrid />
    <Pagination />
    </>
  )
}
export default Home
