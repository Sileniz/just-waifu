import { useEffect, useState } from "react";
import FavoriteResponse from "../utils/FavoriteResponse";

export default function useFavorite(image, apiName) {
    const [fav, setFav] = useState(null);
    const handleFavorite = () => {
        const { response } = FavoriteResponse(image, apiName);
        if (response) {
            setFav(response);
        } else {
            setFav(response);
            setTimeout(() => {
                setFav(null);
            }, 5000)
        }
    };
    useEffect(() => {
        setFav(null)
    }, [image])
    return { fav, handleFavorite };
}
