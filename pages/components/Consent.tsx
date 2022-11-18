// Next.js imports
import Image from 'next/image'
// Styling module
import styles from '../../styles/components/Consent.module.css'
// Images
import Y009 from '../../public/assets/images/Y009.jpg'

const Consent = ({ fadeout, getClicked }: { fadeout: boolean, getClicked: () => void}) => {
    return (
        <div className={fadeout ? `${styles.consent} ${styles.consent___fadeout}` : styles.consent}>
            <figure className={styles.consent_image}>
                <Image
                    className={styles.consent_image__itself}
                    src={Y009}
                    sizes='150vw'
                    fill
                    alt='Yasmin'
                />
            </figure>
            <section className={styles.consent_popup}>
                <div className={styles.consent_popup_content}>
                    <h2 className={styles.consent_popup_content__title}>This is a page for adults.</h2>
                    <p className={styles.consent_popup_content__exp}>You must be over the age of 18 to enter.</p>
                    <button className={styles.consent_popup_content__button} onClick={getClicked}>I understand</button>
                </div>
            </section>
        </div>
    )
}

export default Consent