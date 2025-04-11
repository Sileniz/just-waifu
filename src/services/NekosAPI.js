import apiResponse from "../utils/apiResponse";
import checkStatus from "./checkStatus";
import apiData from "../store/ApiData.json";

export default async function NekosAPI(tag,origin) {
    if(tag != null && origin == "nekosapi"){
        let arr = []
        for(let i = 0; i < 18; i++){
            const response = await fetch(`https://api.nekosapi.com/v4/images/tags/${tag}/images?rating=safe`, {mode: "cors"});
        const data = await checkStatus(response);
        const api = apiData.Apis[1].ApiName;
        const { image } = apiResponse(data);
        const Object = {
            image: image,
            APIName: api,}
        arr.push(Object)
        }
    return arr
    }else if(tag == null){
        const response = await fetch(apiData.Apis[1].apiURL, {mode: 'cors'});
        const data = await checkStatus(response);
        const api = apiData.Apis[1].ApiName;
        const { image } = apiResponse(data);
        const Object = {
            image: image,
            APIName: api,}
    return Object
    }
}
