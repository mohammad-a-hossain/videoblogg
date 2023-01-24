import {useState} from 'react'
import { useSelector } from 'react-redux';



export const useHook=()=>{

    const {videos} = useSelector(state => state.videos)
 
    const [currentPage,setCurrentPage] = useState(1)
    const [postPerPage,setPostPerPage] =useState(3) 

    const lastPostIndex = currentPage * postPerPage 
    const firstPostIndex =lastPostIndex - postPerPage 
    const currentPost = videos.slice(firstPostIndex, lastPostIndex)
     console.log(currentPost)

     return{
       videos,
       currentPage,
       postPerPage,
       setCurrentPage,
       firstPostIndex,
       lastPostIndex
     }
}
