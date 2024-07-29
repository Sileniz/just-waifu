import apiResponse from "../utils/apiResponse";
import checkStatus from "./checkStatus";
import apiData from "../store/ApiData.json";

export default async function DefaultGallery() {
      const apiURL = Math.floor(Math.random() * apiData.Apis.length);
    const response = await fetch(apiData.Apis[apiURL].apiURL, {mode: "cors",});
    const data = await checkStatus(response);
    const api = apiData.Apis[apiURL].ApiName;
    const { image } = apiResponse(data);
    const Object = { image: image, APIName: api };
    return Object

}
