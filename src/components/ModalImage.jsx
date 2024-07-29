import styles from "../styles/ModalImage.module.css"
import Heart from "../components/Heart"
import ModalAlert from "./ModalAlert"
export default function ModalImage({image,removeModal,id,apiData,Click,responseFavorite}){
    return(
    <>
        {image ? 
        <div className={styles.modalContainer}>
        <div className={styles.wrapperImage}>
        {responseFavorite == true ? <Heart /> : null}
        {responseFavorite == false ? <ModalAlert text={"Você já favoritou essa imgem"}/> : null}
        <img className={styles.modalImage} 
        src={image} 
        alt="Anime's art full image"
        id={id}
        onDoubleClick={Click}
        data-image={image}
        data-api={apiData}/>
        </div>
        <div className={styles.opacityModal} onClick={removeModal}></div>
        </div> 
        : null}
    </>
    )
}