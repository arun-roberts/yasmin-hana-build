import Nav from './Nav'
import styles from '../../styles/components/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>Yasmin Hana</h1>
            <div className={styles.header__nav}>
                <Nav />
            </div>
        </header>
    )
}

export default Header
