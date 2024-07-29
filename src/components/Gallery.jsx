import styles from "../styles/Gallery.module.css"

export default function Gallery({data,func,list}){
    return(
        <div className={styles.galleryWrapper}>
            {data.map((item, index) =>
                <img
                onClick={func}
                className={
                    list ? list.some((fav) => fav.image === item.image && fav.id === item.id)
                        ? styles.GalleryItemNO
                        : styles.GalleryItem : styles.GalleryItem
                }
                id={item ? item.id : null} 
                data-api={item.APIName}
                alt="Anime's art"
                key={index}
                src={item.image}></img>
            )}
        </div>
    )
}