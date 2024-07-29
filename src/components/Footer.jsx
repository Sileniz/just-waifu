import PersonalInfo from "../store/PersonalInfo.json"
import { HiCodeBracket } from "react-icons/hi2";
import styles from "../styles/Footer.module.css"
export default function Footer(){
    return(
        <footer className={styles.FooterItem}>
            <p className={styles.FooterSite}>JustWaifu @ 2024. Site desenvolvido com &#10084;</p>
            <div className={styles.footerCredits}>
                <HiCodeBracket />
                <p>Desenvolvido por: <a href={PersonalInfo.github}>
                {PersonalInfo.pseudo}</a></p>
            </div>
        </footer> 
    )
}