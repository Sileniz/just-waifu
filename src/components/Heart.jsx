import HeartIcon from "../assets/Heart-icon.png"
import styles from "../styles/HeartAnimation.module.css"

export default function Heart(){
    return(
        <img src={HeartIcon} alt="Heart" className={styles.HeartAnimation}/>
    )
}