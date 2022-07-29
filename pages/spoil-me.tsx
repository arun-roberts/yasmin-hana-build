import styles from '../styles/pages/Spoil.module.css'
import Link from 'next/link'

const SpoilMe = () => {
    return (
        <>
            <section className={styles.subheader}>
                <h1 className={styles.subheader__title}>
                    Spoil me
                </h1>
            </section>
            <main className={styles.spoil}>
                <div className='container-one'>
                    <div className='container-two'>
                        <div className={styles.spoil_container}>
                            <Link href='https://throne.me/u/yasminhana'>
                                <a className={styles.spoil_container__shy}>
                                    Don’t be shy...
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SpoilMe