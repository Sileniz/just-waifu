import { useEffect, useState } from "react"
import fetchGallery from "../services/fetchGallery"
import ModalImage from "../components/ModalImage"
import Gallery from "../components/Gallery"
import styles from "../styles/GaleryPage.module.css";
import Loader from "../components/Loader"
import useLoading from "../hooks/setLoading"
import useFavorite from "../hooks/setFavorite"
import { openModal, removeModal } from "../utils/ImageUtils";
import SelectAPI from "../components/SelectApi";
import SelectTags from "../components/SelectTags";
import TagSelect from "../utils/TagSelect";

export default function GalleryPage(){
    const [gallery, setGallery] = useState([])
    const [image, setImage] = useState(null)
    const [apiName, setApiName] = useState(null)
    const [nekosAPI, setNekosAPI] = useState(false)
    const [nekosBEST, setNekosBEST] = useState(false)
    const [waifuPICS, setWaifuPICS] = useState(false)
    const [tag, setTag] = useState(null)
    const [origin, setOrigin] = useState(null)
    const [update, forceUpdate] = useState(1)


    const loading = useLoading(gallery)
    const handleOpen = (event) => {openModal({event,setImage,setApiName})}
    const handleRemoveModal = () => {removeModal({setImage,setApiName})}
    const {fav, handleFavorite} = useFavorite(image, apiName)
    const handleTagSelect = (event) => {
        TagSelect({event,setWaifuPICS,setNekosAPI,setNekosBEST})
        setTag(null)
        setOrigin(null)
        setGallery([])
    }
    const handleChangeTag = (event) => {
        setTag(event.target.name)
        setOrigin(event.target.value)
        if(tag == event.target.name){
            forceUpdate(prev => prev + 1)
        }
        setGallery([])
    }

    useEffect(() => {
        document.title = "Gallery"
        fetchGallery(setGallery,nekosBEST,nekosAPI,waifuPICS,tag,origin)      
    },[nekosAPI,nekosBEST,waifuPICS,tag,origin,update])
    return(
        
        <main className={styles.MainHome}>
            <div className={loading ? styles.FilterHidden : styles.FilterShow}>
            <SelectAPI value={handleTagSelect} />
            </div>
            {loading ? <Loader /> : <section className={styles.MainSection}>
                <ModalImage
                    favorite={handleFavorite}
                    image={image}
                    apiData={apiName}
                    removeModal={handleRemoveModal}
                    Click={handleFavorite}
                    responseFavorite={fav}
                />
                <SelectTags NekosAPI={nekosAPI} nekosBEST={nekosBEST} waifuPICS={waifuPICS} changeTag={handleChangeTag}/>
                <Gallery data={gallery} func={handleOpen}/>
            </section>} 
        </main>
    )
}