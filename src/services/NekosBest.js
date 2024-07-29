import apiResponse from "../utils/apiResponse";
import checkStatus from "./checkStatus";
import apiData from "../store/ApiData.json";

export default async function NekosBest(tag, origin) {
    if (tag !== null && origin === "nekos.best") {
        let arr = []
        for(let i = 0; i < 18; i++){
            const response = await fetch(`https://nekos.best/api/v2/${tag}`, {mode: "cors"});
        const data = await checkStatus(response);
        const api = apiData.Apis[2].ApiName;
        const { image } = apiResponse(data);
        const Object = {
            image: image,
            APIName: api,};
        arr.push(Object)}
        return arr;
    } else if(tag == null) {
        const response = await fetch(apiData.Apis[2].apiURL, { mode: "cors" });
        const data = await checkStatus(response);
        const api = apiData.Apis[2].ApiName;
        const { image } = apiResponse(data);
        const Object = {
            image: image,
            APIName: api,
        };
        return Object;
    }
}
