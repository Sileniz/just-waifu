import nekosResponse from "./nekosResponse";
import waifuResponse from "./waifuResponse";
import nekosBestResponse from "./nekosBestResponse"
export default function apiResponse(res){
      if (res.url) {
          const { image, author, social } = waifuResponse(res)
          return { image, author, social}
      }if(res.items) {
         const {image, author} =  nekosResponse(res)
         return {image, author}
      }if(res.results) {
        const { image, author, social } = nekosBestResponse(res)
        return {image, author, social }
    }
}
