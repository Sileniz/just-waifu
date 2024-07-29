import styles from "../styles/MainImage.module.css"
import Heart from "../components/Heart"
import ModalAlert from "./ModalAlert";
import { SlSizeFullscreen } from "react-icons/sl";
export default function MainImage({image,source,author,apiURL,social,favorite,openImage,responseFavorite}){
    return(
        <div className={styles.mainImage}>
            <a className={styles.h1MainImage} href={apiURL}>{source}</a>
            {responseFavorite == true ? <Heart /> : null}
            {responseFavorite == false ? <ModalAlert text={"Você já favoritou essa imagem"} /> : null}
            <div className={styles.divUtilMain} onClick={responseFavorite = null}>
            <SlSizeFullscreen className={styles.BoxArrowUpRight} 
            onClick={openImage} 
            data-image={image}/>
            <img className={styles.mainImageItem}
            src={image} alt="Anime's Art" onDoubleClick={favorite}/>
            </div>
            <a className={styles.h1MainImage} href={social}>{author}</a>
        </div>
    )
}