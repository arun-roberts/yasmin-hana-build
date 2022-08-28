import Nav from './Nav'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../../styles/components/Header.module.css'

const Header = () => {
    const [ dropDown, setDropDown ] = useState(false)
    return (
        <header className={styles.header}>
            <Link href='/'>
                <a className={styles.header__title}>YASMIN HANA</a>
            </Link>
            <div 
                className={dropDown ? `${styles.header__nav} ${styles.header__nav___open}` : `${styles.header__nav}`}
                onClick={() => setDropDown(false)} 
            >
                <Nav />
            </div>
            <div onClick={() => setDropDown(!dropDown)} className={styles.header_mobileOnly}>
                <div className={styles.header_mobileOnly__item}></div>
                <div className={styles.header_mobileOnly__item}></div>
                <div className={styles.header_mobileOnly__item}></div>
            </div>
        </header>
    )
}

export default Header
