import styles from "../styles/About.module.css"
export default function About(){
    return(
        <div className={styles.AboutContainer}>
            <span></span>
            <img className={styles.imageAbout}src="https://cdn.nekosapi.com/images/original/d06f184d-7c9f-4cea-a4c3-747b979f0de8.webp" alt="" />
            <p className={styles.textAbout}>Este site foi desenvolvido em um período de duas semanas e meia durante um estudo intensivo de React. Utilizei em ao total para três api:<strong>Nekos.BEST | NekosAPI | Waifu.Pics</strong>.</p>
        </div>
    )
}