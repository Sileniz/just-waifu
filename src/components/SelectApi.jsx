import apiData from "../store/ApiData.json"
import PropTypes from 'prop-types';
import styles from "../styles/SelectApi.module.css"
export default function SelectAPI({value}){
    const api = apiData.Apis
    return(
        <div className={styles.wrapperContent}>
            {api.map((item, index) => 
            <div key={index} className={styles.wrapperInput}>
                <input onClick={value} type="checkbox" name={item.ApiName} id="" />
                <p className={styles.textInput}>{item.ApiName}</p>
            </div>
            )}
        </div>
    )
}

SelectAPI.propTypes = {
    value: PropTypes.func,
}