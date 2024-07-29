import apiResponse from "../utils/apiResponse";
import checkStatus from "./checkStatus";
import apiData from "../store/ApiData.json";

export default async function WaifuPics(tag,origin) {
    if(tag !== null && origin === "waifu.pics"){
        let arr =[]
    for(let i = 0; i < 18; i++){
        const response = await fetch(`https://api.waifu.pics/sfw/${tag}`, {mode: "cors"});
    const data = await checkStatus(response);
    const api = apiData.Apis[0].ApiName;
    const { image } = apiResponse(data);
    const Object = { image: image, APIName: api,}
    arr.push(Object)
    }
    return arr
    }else if(tag == null){
    const response = await fetch(apiData.Apis[0].apiURL, {mode: 'cors'});
    const data = await checkStatus(response);
    const api = apiData.Apis[0].ApiName;
    const { image } = apiResponse(data);
    const Object = { image: image, APIName: api,}
    return Object
    }
}