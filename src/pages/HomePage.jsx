import { useEffect, useState } from "react"
import styles from "../styles/HomePage.module.css"
import MainImage from "../components/MainImage"
import fetchMainImage from "../services/fetchMainImage"
import Loader from "../components/Loader"
import useLoading from "../hooks/setLoading"
import setFavorite from "../hooks/setFavorite"
import { openImage } from "../utils/ImageUtils"
export default function HomePage(){
    const [image, setImage] = useState(null)
    const [author, setAuthor] = useState(null)
    const [apiName, setAPIName] = useState(null)
    const [socialArtist, setSocial] = useState(null)
    const [apiLink, setApiLink] = useState(null)

    const handleOpenImage = (event) => {
        openImage(event)
    }
    const loading = useLoading(image)
    const handleRefresh = async () => {
        await fetchMainImage(setImage, setAuthor, setAPIName, setSocial,setApiLink)
        
    };
    const {fav, handleFavorite} = setFavorite(image, apiName)

    useEffect(() => {
        document.title = "Home"
        fetchMainImage(setImage, setAuthor, setAPIName, setSocial,setApiLink);     
    }, []);
    return(
        <main className={styles.MainHome}>
            <section className={styles.MainSection}>
                {loading ? <Loader /> : <>
                <MainImage 
                responseFavorite={fav}
                image={image} author={author} 
                source={apiName} social={socialArtist} 
                apiURL={apiLink} favorite={handleFavorite}
                openImage={handleOpenImage}/>
                <button className={styles.mainButton} 
                onClick={handleRefresh}>Refresh</button></>}
            </section>
        </main>
    )
}