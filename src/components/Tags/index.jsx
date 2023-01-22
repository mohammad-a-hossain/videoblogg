import React,{useEffect} from 'react'
import { Tag } from '../Navbar/Tag'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../features/tags/tagsSlice';


export const Tags = () => {
  const dispatch = useDispatch()
  const {tags} = useSelector(state => state.tags)
 //console.log(tags)

  useEffect(()=>{
       dispatch(fetchTags()) 
  },[dispatch])      
 
  return tags && tags.length > 0 ? (
    <section>
    <div
        class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
    >
       {
        tags.map(tag => <Tag  title={tag.title} key={tag.id} />) 
       } 
   
    </div>
</section>
  ):null
}
