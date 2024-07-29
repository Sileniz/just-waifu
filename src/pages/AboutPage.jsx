import About from "../components/About"
import styles from "../styles/AboutPage.module.css"
export default function AboutPage(){
    document.title = "About"
    return(
        <main className={styles.MainHome}>
            <section className={styles.MainSection}>
                <About />
            </section>
        </main>
    )
}