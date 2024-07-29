import { v4 as uuidv4 } from 'uuid';

function FavoriteResponse(image, apiName){
    const uniqueKey = uuidv4();
    let response = false
    const favorites = JSON.parse(localStorage.getItem(apiName)) || []
    const newFavorite = {
        id: uniqueKey,
        image: image,
        APIName: apiName,
    }
    const isFavorite = favorites.some(Element => Element.image === image)
    if(isFavorite){
        response = false
        return { response }
    }
    favorites.push(newFavorite)
    localStorage.setItem(apiName, JSON.stringify(favorites))
    response = true
    return { response }
}
export default FavoriteResponse