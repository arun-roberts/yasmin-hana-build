import Nav from './Nav'
import Link from 'next/link'
import styles from '../../styles/components/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href='/'>
                <a className={styles.header__title}>Yasmin Hana</a>
            </Link>
            <div className={styles.header__nav}>
                <Nav />
            </div>
        </header>
    )
}

export default Header
