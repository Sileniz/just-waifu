import styles from "../styles/ScrollTop.module.css"
import { FaArrowUp } from "react-icons/fa";
export default function ScrollTop({disabled}){
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
    return(
        <div className={disabled ? styles.myBtn : styles.myBtnNah} onClick={scrollToTop}>
            <FaArrowUp className={styles.ArrowUp}/>
        </div>
    )
}