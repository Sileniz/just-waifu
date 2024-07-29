import { Link } from 'react-router-dom';
import HeaderLinks from "../store/HeaderLinks.json"
import styles from "../styles/NavBar.module.css"
export default function NavBar() {

    return (
        <nav>
            <ul className={styles.ulNavBar}>
            {HeaderLinks.map((item, index) => (
                <li><Link to={item.href}
                key={index}
                className={styles.linkNavBar}
                aria-label={item.text}>
                {item.text}</Link>
                </li>))}
            </ul>
        </nav>
    )
}