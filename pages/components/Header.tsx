import Nav from './Nav'
import { useState } from 'react'
import styles from '../../styles/components/Header.module.css'

const Header = () => {
    const [ dropDown, setDropDown ] = useState(false)
    return (
        <header className={styles.header}>
            <h2 className={styles.header__title}>
                YASMIN HANA
            </h2>
            <div 
                className={dropDown ? `${styles.header__nav} ${styles.header__nav___open}` : `${styles.header__nav}`}
                onClick={() => setDropDown(false)} 
            >
                <Nav />
            </div>
            <div 
                onClick={() => setDropDown(!dropDown)} 
                className={dropDown ? `${styles.header_mobileOnly} ${styles.header_mobileOnly___open}` : `${styles.header_mobileOnly}`}
            >
                <div className={styles.header_mobileOnly__item}></div>
                <div className={styles.header_mobileOnly__item}></div>
                <div className={styles.header_mobileOnly__item}></div>
            </div>
        </header>
    )
}

export default Header
