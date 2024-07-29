import styles from "../styles/ScrollTop.module.css"
import { FaArrowUp } from "react-icons/fa";
export default function ScrollTop({disabled}){
    return(
        <div className={disabled ? styles.myBtn : styles.myBtnNah}>
            <FaArrowUp className={styles.ArrowUp}/>
        </div>
    )
}