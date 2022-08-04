import styles from '../styles/Home.module.sass'
import Button from "../components/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faCalendar} from "@fortawesome/free-regular-svg-icons";
import {faMapLocationDot} from "@fortawesome/free-solid-svg-icons";
import SponsorsSection from "../sections/sponsors";
import FaqSection from "../sections/faq";
import AboutSection from "../sections/aboutsection";
import Head from "next/head";

export default function Home() {
    return (
        <div className={styles["site"]}>
            <Head>
                <title>HackMCA Hackathon</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="og:title" content="HackMCA Hackathon"/>
                <meta property="og:image" content="https://hackmca.info/hackmca-logo-ogpreview.png"/>
                <meta property="og:image:width" content="1920px"/>
                <meta property="og:image:height" content="1080px"/>
            </Head>
            <div className={styles["home-screen"]}>
                <div className={styles["home-screen-inner"]}>
                    <div className={styles["centered-v"]}>
                        <h2>The First Annual</h2>
                        <div className={styles["centered-h"]}>
                            <img src={"HACKMCA Logo.svg"} alt={"HackMCA Logo"}></img>
                        </div>
                        <h1>Hackathon</h1>
                    </div>
                    <div className={styles["fancy-list"]}>
                        <span><FontAwesomeIcon icon={faCalendar}/>October 1st, 2022</span>
                        <span><FontAwesomeIcon icon={faClock}/>8 am - 9 pm</span>
                        <span><FontAwesomeIcon icon={faMapLocationDot}/>Middlesex County College</span>
                    </div>

                </div>
            </div>
            <div className={styles["content-section"]}>
                <div className={[styles["content-section-yellow"], styles["content-section"]].join(" ")}>
                    <div className={styles["content-section-inner"]}>
                        <h1>What is HACKMCA?</h1>
                        <p> MCAHacks is a hackathon run by the Middlesex County Academy Computer Science Club in Edison,
                            NJ.
                            Join us for a day of coding, inventing, and learning on October 1, 2022! </p>
                        <div className={styles["fancy-list"]}>
                            <span><FontAwesomeIcon icon={faCalendar}/><b>Date:</b> October 1st, 2022</span>
                            <span><FontAwesomeIcon icon={faClock}/><b>Time:</b> 8 am - 9 pm</span>
                            <span><FontAwesomeIcon
                                icon={faMapLocationDot}/><b>Venue:</b> Middlesex County College</span>
                        </div>
                        <Button href={"about:blank"} displayText={"Sign up now!"}/>
                    </div>
                </div>
            </div>
            <SponsorsSection/>
            <FaqSection/>
            <AboutSection/>
        </div>
    )
}
