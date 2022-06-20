import type { NextPage } from 'next'
import Socials from './components/Socials'
import Nav from './components/Nav'
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
      <div className={styles.home__nav}>
        <Nav />
      </div>
    </main>
  )
}

export default Home

