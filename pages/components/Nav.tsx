import Link from 'next/link'
import styles from '../../styles/components/Nav.module.css'

const Nav = () => {
    return (
        <menu className={styles.nav}>
            <li className={styles.nav_item}>
                <Link href='/' className={styles.nav_item__text}>
                    HOME
                </Link>
            </li>
            <li className={styles.nav_item}>
                <Link href='/touch' className={styles.nav_item__text}>
                    GET IN TOUCH
                </Link>
            </li>
            <li className={styles.nav_item}>
                <Link href='/faqs' className={styles.nav_item__text}>
                    FAQs
                </Link>
            </li>
        </menu>
    );
}

export default Nav
