import React,{useState} from 'react'
import { useHook } from '../../../customHook/useHook'

export const Pagination = () => {
    const {videos,postPerPage,currentPage} =useHook({})
   const [getPage,setGetPage] = useState([currentPage])
    let totalPost = videos.length
    let pages=[]
    for(let i=1; i <= Math.ceil(totalPost/postPerPage); i++){
        pages.push(i)
    }

  return (
    <section class="pt-12">
    <div
        class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end"
    >
        { pages.map((page,index) =>{
            return  <div key={index} onClick={()=>setGetPage(page)} class="bg-blue-600 text-white px-4 py-1 rounded-full"
             >
                      {page}
                  </div>
        })
           
       }
    </div>
</section>
  )
}

/* 
  <div
        class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end"
    >
        <div class="bg-blue-600 text-white px-4 py-1 rounded-full">
            1
        </div>
        <div class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
            2
        </div>
        <div class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
            3
        </div>
        <div class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
            4
        </div>
    </div>

*/