
import  axios  from '../../utils/axios';

export const  getRelatedAuthors= async(author)=>{

    const response = await axios.get(`/videos/?&${author}`)

    return response.data
}
/* ?author=azad%20hossain 

tags?.length > 0 ? tags.map((tag) =>`tags_like=${tag}`).join("&") + `&id_ne=${id}&_limit=&{limit}`:`id_ne=${id}&_limit= &${limit}`;

*/