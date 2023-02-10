import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
//import { searchAuthor } from '../../features/filters/filtersSlice';


export const VideoItem = ({video ={}}) => {
    const {avatar,duration,thumbnail,title,author,views,date,id} = video
    const dispatch = useDispatch()


    const getAuthor =(e)=>{
        dispatch(author)
      //  alert(author)
         //console.log(author)
    }
  return (
    <div
    class="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]"
>
    <div class="w-full flex flex-col">
        <div class="relative">
            <Link to={`/videos/${id}`}>
                <img
                    src={thumbnail}
                    class="w-full h-auto"
                    alt="Some video title"
                />
            </Link>

            <p
                class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
            >
            {duration}
            </p>
        </div>

        <div class="flex flex-row mt-2 gap-2">
            <Link to={`/videos/${id}`} class="shrink-0">
                <img
                    src={avatar}
                    class="rounded-full h-6 w-6"
                    alt="Learn with Sumit"
                />
            </Link>

            <div clas="flex flex-col">
                <a href="video.html">
                    <p
                        class="text-slate-900 text-sm font-semibold"
                    >
                        {title}
                    </p>
                </a>
                <a
                    class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    href="333" onClick={()=>getAuthor(author)}>
                   {author}
                </a>
                <p class="text-gray-400 text-xs mt-1">
                    {views} views . {date}
                </p>
            </div>
        </div>
    </div>
</div>
  )
}
