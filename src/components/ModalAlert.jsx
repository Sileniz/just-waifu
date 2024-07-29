import styles from "../styles/ModalAlert.module.css"
export default function ModalAlert({text}){
    return(
        <div className={styles.WrapperModal}>
            <p className={styles.ModalText}>{text}</p>
        </div>
    )
}