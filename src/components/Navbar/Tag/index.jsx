import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../../../features/filters/filtersSlice';

export const Tag = ({title}) => {
  const dispatch = useDispatch()
  const {tags:selectedTag} = useSelector(state => state.filters)
  //console.log(tags)
      
   let isSelected = selectedTag.includes(title) ? true: false 
   const setStyles = isSelected ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer':'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'

    const handleSelect=()=>{
         if(isSelected){
          dispatch(tagRemoved(title))
        }else{
          dispatch(tagSelected(title))
        }
        }


  return (
    <div onClick={handleSelect} className={setStyles}>
    {title}
    </div>
  )
}
