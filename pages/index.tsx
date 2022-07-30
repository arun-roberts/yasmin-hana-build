import type { NextPage } from 'next'
import Link from 'next/link'
import Socials from './components/Socials'
import styles from '../styles/pages/Home.module.css'

const Home: NextPage = () => {
  return (
    <main className={styles.home}>
      <header className={styles.home_header}>
        <h1 className={styles.home_header__title}>Yasmin Hana <span>— a page for adults</span></h1>
        <div className={styles.home_header__socials}>
          <Socials />
        </div>
      </header>
      <menu className={styles.home_nav}>
            <li className={styles.home_nav_item}>
                <Link href='/about'>
                    <a className={styles.home_nav_item__text}>About me</a>
                </Link>
            </li>
            <li className={styles.home_nav_item}>
                <Link href='/pleasure'>
                    <a className={styles.home_nav_item__text}>Pleasure menu</a>
                </Link>
            </li>
            <li className={styles.home_nav_item}>
                <Link href='/touch'>
                    <a className={styles.home_nav_item__text}>Get in touch</a>
                </Link>
            </li>
            <li className={styles.home_nav_item}>
                <Link href='/faq'>
                    <a className={styles.home_nav_item__text}>FAQ</a>
                </Link>
            </li>
            <li className={styles.home_nav_item}>
                <Link  href='/spoil-me'>
                    <a className={styles.home_nav_item__text}>Spoil me</a>
                </Link>
            </li>
        </menu>
    </main>
  )
}

export default Home

