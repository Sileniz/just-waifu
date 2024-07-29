import { useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import {RetrieveFavorites} from "../hooks/RetrieveFavorites";
import { toggleMode } from "../hooks/toggleMode";
import { handleTargetFavorite } from "../utils/handleTargetFavorite";
import { openModal, removeModal } from "../utils/ImageUtils";
import RemoveFAV from "../components/RemoveFAV";
import RemoveFavorite from "../utils/RemoveFavorite";
import ModalImage from "../components/ModalImage";
import styles from "../styles/FavoritePage.module.css";

export default function FavoritePage() {
    const [image, setImage] = useState(null);
    const [id, setID] = useState(null);
    const [apiName, setApiName] = useState(null);
    const [mode, setMode] = useState(false);
    const [list, setList] = useState([])
    const [count, setCount] = useState(null)
    const [gallery, setGallery] = useState([])
    const [force, updateForce] = useState(0)
    const handleNewTab = (event) => { window.open(event.target.dataset.image) }
    const handleOpen = (event) => { !mode ? openModal({event,setImage,setID,setApiName}) : handleTargetFavorite(event,setCount,setList,list)}
    const handleRemoveModal = () => { removeModal({setImage,setID,setApiName}) }
    const handleRemoveFavorite = () => {RemoveFavorite(list,setList,updateForce,setCount)};
    const handleToggle = () => {toggleMode(setMode,mode,setList,setCount)};
    useEffect(() => {
        document.title = "Favorites"
        RetrieveFavorites(setGallery);
    },[force])
    return (
        <main className={styles.MainHome}>
            <section className={styles.MainSection}>
                {gallery.length === 0 ? <h1 color="white">Não há nada aqui</h1> : <>
                <RemoveFAV toggle={handleToggle} mode={mode} handleRemove={handleRemoveFavorite} count={count}/>
                <ModalImage
                    image={image}
                    id={id}
                    data-api={apiName}
                    removeModal={handleRemoveModal}
                    Click={handleNewTab}
                />
                <Gallery data={gallery} func={handleOpen} list={list}/>
                </>}
            </section>
        </main>
    );
}
