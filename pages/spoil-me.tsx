import styles from '../styles/pages/Spoil.module.css'
import Link from 'next/link'
import Footer from './components/Footer'

const SpoilMe = () => {
    return (
        <>
            <main className={styles.spoil}>
                {/* <section className={styles.spoil_subheader}>
                    <h1 className={styles.spoil_subheader__title}>
                        SPOIL ME
                    </h1>
                </section> */}
                <div className={styles.spoil_container}>
                    <Link href='https://throne.me/u/yasminhana'>
                        <a className={styles.spoil_container__shy}>
                            Don’t be shy...
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">{/* <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}<path d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"/></svg>
                        </a>
                    </Link>
                </div>
            </main>
            <div className={styles.spoil__footer}>
                <Footer />
            </div>
        </>
    )
}

export default SpoilMe