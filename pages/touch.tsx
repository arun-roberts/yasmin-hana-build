import Link from "next/link"

const Touch = () => {
    return (
        <main>
            <h1>Get in touch</h1>
            <h2>
                Whether you already know what you’re looking for or if you have some questions, you can contact me and we’ll take it from there.
            </h2>
            <p>
                Please email or text me (SMS and Whatsapp). I do not answer unscheduled phone calls.
            </p>
            <Link href='mailto:Yasmin.Hana@protonmail.com'>
                <a>Yasmin.Hana@protonmail.com</a>
            </Link>
            <Link href='tel:+61457894685'>
                <a>+61 457 894 685 (text only)</a>
            </Link>
            <section>
                <h3>Please include the following details:</h3>
                <ul>
                    <li>Your name.</li>
                    <li>Duration and service.</li>
                    <li>Your location.</li>
                    <li>Preferred date(s) and time(s).</li>
                    <li>
                        Any details, ideas or specific things that you’d like to include in our time together. You don’t have to know what you’re looking for, we can work that out together and create an experience tailored to your personal desires.
                    </li>
                    <li>Any questions.</li>
                </ul>
            </section>
            <section>
               <h3>Alternatively, please feel free to use the following template:</h3>
            <p>
                Hi Yasmin, <br/>My name is <span>*your name*</span>, I’m located at <span>*your location*</span>. I would like to organise a <span>*duration and kind of service*</span> session with you on <span>*preferred date*</span> at <span>*preferred time*</span>. <br/><span>*Any details/ specific requests/ interests / kinks / questions*</span>
            </p>    
            </section>
        </main>
    )
}

export default Touch