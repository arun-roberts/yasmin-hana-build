import styles from '../styles/pages/Spoil.module.css'
import Link from 'next/link'

const SpoilMe = () => {
    return (
        <>
            <main className={styles.spoil}>
                <div className={styles.spoil_container}>
                    <Link href='https://throne.me/u/yasminhana'>
                        <a className={styles.spoil_container__shy}>
                            Don’t be shy...
                        </a>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default SpoilMe