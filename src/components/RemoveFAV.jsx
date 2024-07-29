import { FaTrashAlt } from "react-icons/fa";
import styles from "../styles/RemoveFAV.module.css"
import PropTypes from 'prop-types';

export default function RemoveFAV({mode,toggle,handleRemove,count}){
    return(
        <div className={styles.wrapperTrash}>
            <FaTrashAlt className={styles.trashIcon} onClick={toggle}/>
            {mode ? <>
                <p className={styles.textTrash}>Excluir {count} imagens</p> 
                <button className={styles.confirm} onClick={handleRemove}>Confirmar</button></>: null}
        </div>
    )
}

RemoveFAV.propTypes = {
    mode: PropTypes.bool,
    count: PropTypes.number,
    handleRemove: PropTypes.func,
    toggle: PropTypes.func
}