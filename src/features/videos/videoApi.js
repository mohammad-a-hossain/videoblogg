 import axios  from '../../utils/axios';

 //SECOND PART WITH QUERY: query for getting tags and search text wise
export const getVideos= async (tags,search)=>{
    let queryString =""
    if(tags.length > 0){
        queryString += tags.map((tag)=> `tags_like=${tag}`).join("&")
    }
    if(search !== ''){
        queryString += `&q=${search}`
    }
    const response = await axios.get(`/videos/?${queryString}`)

    return response.data


}

//FIRST PART WITHOUT QUERY
// import axios  from '../../utils/axios';
// export const getVideos= async ()=>{
//    const response = await axios.get("/videos")
//    return response.data
// }