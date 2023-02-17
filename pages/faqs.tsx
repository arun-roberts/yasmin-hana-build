// Next.js imports
import Link from 'next/link'
import Image from 'next/image'
// Component imports
import Footer from './components/Footer'
// Styling imports
import styles from '../styles/pages/Faq.module.css'
import Y002 from '../public/assets/images/Y002.jpg'

const Faq = () => {
    return <>
        <main className={styles.faq}>
            <figure className={styles.faq_hero}>
                <Image 
                    className={styles.faq_hero__image}
                    src={Y002}
                    sizes='100vw'
                    fill
                    alt='Yasmin'
                />
            </figure>
            <section className={styles.faq_body}>
                <h1 className={styles.faq_body__title}>
                    FAQs
                </h1>
                <ul className={styles.faq_body_faqs}>
                    <li 
                        className={styles.faq_body_faqs_item}
                    >
                        <h2 className={styles.faq_body_faqs_item__q}>
                            Do you see people of all genders / weight / ages / abilities / ethnicities?
                        </h2>
                        <p className={styles.faq_body_faqs_item__a}>
                            My services are not exclusive to any gender, age (as long as you’re over 18), sexuality, ethnicity, etc. As a queer woman and person of colour, I enjoy meeting all kinds of different people. I understand how to create safe spaces and will ensure that you feel respected and welcomed in my company. In return, I’ll expect politeness and respect from you. I’m also happy to talk to you about ways we might create a comfortable space to accommodate neuro-divergence.
                        </p>
                    </li>
                    <li 
                        className={styles.faq_body_faqs_item}
                    >
                        <h2 className={styles.faq_body_faqs_item__q}>
                            What do you expect from your clients?
                        </h2>
                        <p className={styles.faq_body_faqs_item__a}>
                            Enthusiastic consent is not just an important part of every one of my sessions, but something I find especially sexy. Specifically with kink, this means that we will speak about boundaries and expectations prior to a session. These chats are a great way to get us both in the mood and excited for our adventures together. It’s also important to remember that consent is ongoing, and can be given and revoked at any time. So I’ll be checking in with you throughout our session.
                        </p>
                        <p className={styles.faq_body_faqs_item__a}>
                            I get regular STI checks and expect that you would have also recently been tested before seeing me. I also hold my clients to a high standard of personal hygiene and would expect that you have showered immediately prior to our session.
                        </p>
                    </li>
                    <li 
                        className={styles.faq_body_faqs_item}
                    >
                        <h2 className={styles.faq_body_faqs_item__q}>
                            I’m feeling super nervous, is this normal?
                        </h2>
                        <p className={styles.faq_body_faqs_item__a}>
                            Whether it is your first time seeing a SW, your first sexual experinece, or your 100th, it is perfectly normal to feel nervous and this is something that happens to all of us. I feel honoured to be a part of your journey and the nerves can even make the experience more exciting. We can take things at whichever speed we are comfortable with.
                        </p>
                    </li>
                    <li 
                        className={styles.faq_body_faqs_item}
                    >
                        <h2 className={styles.faq_body_faqs_item__q}>
                            I would love to see you, but I’m a little unsure which service to choose.
                        </h2>
                        <p className={styles.faq_body_faqs_item__a}>
                            I’m super excited that you’d like to spend time with me, but you don’t have to know what you’re looking for. If you have read my <Link className='red-link' href='/#pleasure-menu'>Pleasure Menu</Link> and still don’t quite know what you’d like, <Link className='red-link' href='/touch#touch'>get in touch</Link> and we can discuss options together. We can always go with the flow and work it out during our time together.
                        </p>
                    </li>
                    <li 
                        className={styles.faq_body_faqs_item}
                    >
                        <h2 className={styles.faq_body_faqs_item__q}>
                            What is your booking process / cancellation policy?
                        </h2>
                        <p className={styles.faq_body_faqs_item__a}>
                            For new clients, I’ll arrange a ten minute phone to call to break the ice and discuss the booking prior to meeting.
                        </p>
                        <p className={styles.faq_body_faqs_item__a}>
                            A small deposit is required to secure the booking. These deposits are non-refundable but I’m happy to reschedule our appointment if given more than 24 hours notice. Cancellations within 24 hours will forfeit the deposit unless you can show a positive PCR or RAT test.
                        </p>
                    </li>
                    <li 
                        className={styles.faq_body_faqs_item}
                    >
                        <h2 className={styles.faq_body_faqs_item__q}>
                            I feel slightly awkward about handing cash over in a public space, how do you recommend I do this?
                        </h2>
                        <p className={styles.faq_body_faqs_item__a}>
                            I can understand this can be an awkward situation for some. One way to make this experience more comfortable is to put the cash in an envelope or a gift bag.
                        </p>
                    </li>
                    <li className={styles.faq_body_faqs__aside}>
                        Do you still have some questions? Head to the <Link href='/touch' className={styles.faq_body_faqs__link}>Get In Touch</Link> page to get your questions answered.
                    </li>
                </ul>
            </section>
        </main>
        <Footer />
    </>;
}

export default Faq