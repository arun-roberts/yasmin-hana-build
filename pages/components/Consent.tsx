import Y009 from '../../public/assets/desktop-sm/Y009.jpg'
import styles from '../../styles/components/Consent.module.css'
import Image from 'next/image'

const Consent = ({ fadeout, getClicked }: { fadeout: boolean, getClicked: () => void}) => {
    return (
        <div className={fadeout ? 'consent consent___fadeout' : 'consent'}>
            <figure className={styles.pleasure_item_image}>
                    <Image
                        className={styles.pleasure_item_image__itself}
                        src={Y009}
                        sizes='50vw'
                        fill
                        alt='Yasmin'
                    />
                </figure>
            <section className='consent_popup'>
                <div className='consent_popup_content'>
                    <h2 className='consent_popup_content__title'>This is a page for adults.</h2>
                    <p className='consent_popup_content__exp'>You must be over the age of 18 to enter.</p>
                    <button className='consent_popup_content__button' onClick={getClicked}>I understand</button>
                </div>
            </section>
        </div>
    )
}

export default Consent