import React from 'react'

import { Tags } from '../components/Tags/index';
import { VideoGrid } from '../components/VideoGrid/index';
import { Pagination } from './../components/UI/pagination';

 const Home=()=>{
  return (
    <>
    <Tags/>
    <VideoGrid/>
    <Pagination/>
    </>
  )
}
export default Home
