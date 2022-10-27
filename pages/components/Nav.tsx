import Link from 'next/link'
import styles from '../../styles/components/Nav.module.css'

const Nav = () => {
    return (
        <menu className={styles.nav}>
            <li className={styles.nav_item}>
                <Link href='/'>
                    <a className={styles.nav_item__text}>HOME</a>
                </Link>
            </li>
            <li className={styles.nav_item}>
                <Link href='/touch'>
                    <a className={styles.nav_item__text}>GET IN TOUCH</a>
                </Link>
            </li>
            <li className={styles.nav_item}>
                <Link href='/faqs'>
                    <a className={styles.nav_item__text}>FAQs</a>
                </Link>
            </li>
        </menu>
    )
}

export default Nav
