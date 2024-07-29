import Tags from "../store/Tags.json"
import PropTypes from 'prop-types';
import styles from "../styles/SelectTag.module.css"
export default function SelectTags({NekosAPI,nekosBEST,waifuPICS,changeTag}){
    return(
        <div className={(!NekosAPI && !nekosBEST && !waifuPICS) ? styles.removeTags : styles.WrapperTags}>
            {waifuPICS && Tags["waifu.pics"].map((item) =>
            <button key="waifu.pics" onClick={changeTag}className={styles.buttonTag} name={item} value="waifu.pics">{item}</button>)}
            {NekosAPI && Tags["nekosapi"].map((item) =>
            <button key="nekosapi" onClick={changeTag}className={styles.buttonTag} name={item.id} value="nekosapi">{item.name}</button>)}
            {nekosBEST && Tags["nekos.best"].map((item) =>
            <button key="nekos.best"onClick={changeTag}className={styles.buttonTag} name={item} value="nekos.best">{item}</button>)}
        </div>
    )
}

SelectTags.propTypes = {
    NekosAPI: PropTypes.bool,
    nekosBEST: PropTypes.bool,
    waifuPICS: PropTypes.bool,
    changeTag: PropTypes.func
}