import React, { useState } from 'react'
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { textSearch } from '../../features/filters/filtersSlice';

 const Navbar = () => {
    const dispatch = useDispatch()
    const {search} = useSelector(state => state.filters)
    console.log(search)

     const match = useMatch('/')
     const navigate = useNavigate()

      

    const [input,setInput] = useState(search)
     
    const handleSearch = (e)=>{
          e.preventDefault()
          dispatch(textSearch(input))
          // if user is not in home page then redirect to home page
        if(!match){
            navigate('/')
        }
    }
  return (
    <nav class="bg-slate-100 shadow-md">
    <div
        class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
    >
        <Link to="/home">
            <img
                class="h-10"
                src="./assets/lws.svg"
                alt="rtk mini project"
            />
        </Link>
        <div
            class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
        >
           
            <form onSubmit={handleSearch}>
                <input
                    class="outline-none border-none mr-2"
                    type="search"
                    name="search"
                    value={input}
                    placeholder="Search"
                    onChange={(e)=> setInput(e.target.value)}
                />
            </form>
            <img
                class="inline h-4 cursor-pointer"
                src="./assets/search.svg"
                alt="Search"
            />
        </div>
    </div>
</nav>
  )
}
export default Navbar
