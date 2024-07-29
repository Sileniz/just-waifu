import apiResponse from "../utils/apiResponse";
import checkStatus from "./checkStatus";
import apiData from "../store/ApiData.json";

export default async function fetchMainImage(setImage,setAuthor,setAPIName,setSocial,setApiLink){
    try {
      if(setImage) setImage(null)
      const apiURL = Math.floor(Math.random() * apiData.Apis.length);
      const response = await fetch(apiData.Apis[apiURL].apiURL, {mode: 'cors'});
      const data = await checkStatus(response);
      const api = apiData.Apis[apiURL].ApiName;
      const url = apiData.Apis[apiURL].apiURL;
      const { image, author, social } = apiResponse(data);
      if(setImage) setImage(image)
      if(setAuthor) setAuthor(author)
      if(setAPIName) setAPIName(api)
      if(setSocial) setSocial(social)
      if(setApiLink) setApiLink(url)
    }
    catch (err) {
      return console.log(err)
    }
}