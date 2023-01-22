
import axios from "../../utils/axios"

const getVideo = async (id)=>{
    const response = await axios.get(`/videos/${id}`)
    return response.data
}
export default getVideo