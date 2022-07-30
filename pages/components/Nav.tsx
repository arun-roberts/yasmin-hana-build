import Link from 'next/link'
import styles from '../../styles/components/Nav.module.css'

const Nav = () => {
    return (
        <menu className={styles.nav}>
            <li className={styles.nav_item}>
                <Link href='/about'>
                    <a className={styles.nav_item__text}>About me</a>
                </Link>
            </li>
            <li className={styles.nav_item}>
                <Link href='/pleasure'>
                    <a className={styles.nav_item__text}>Pleasure menu</a>
                </Link>
            </li>
            <li className={styles.nav_item}>
                <Link href='/touch'>
                    <a className={styles.nav_item__text}>Get in touch</a>
                </Link>
            </li>
            <li className={styles.nav_item}>
                <Link href='/faqs'>
                    <a className={styles.nav_item__text}>FAQs</a>
                </Link>
            </li>
            <li className={styles.nav_item}>
                <Link  href='/spoil-me'>
                    <a className={styles.nav_item__text}>Spoil me</a>
                </Link>
            </li>
        </menu>
    )
}

export default Nav
