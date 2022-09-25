import styles from "../styles/Home.module.sass";
import Head from "next/head";
import {Date, SignupLink, Time, Venue} from "../data/variables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faClock} from "@fortawesome/free-regular-svg-icons";
import {faMapLocationDot} from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
    return (
        <div className={styles["site"]}>
            <Head>
                <title>HackMCA Hackathon</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="og:title" content="Sign Up | HackMCA Hackathon"/>
                <meta property="og:image" content="https://hackmca.info/hackmca-logo-ogpreview.png"/>
                <meta property="og:image:width" content="1920px"/>
                <meta property="og:image:height" content="1080px"/>
            </Head>
            <div className={styles["home-screen"]}>
                <div className={styles["home-screen-inner"]}>
                    <div className={styles["centered-v"]}>
                        <div className={styles["centered-h"]}>
                            <img src={"hackmca-logo.svg"} alt={"HackMCA Logo"}></img>
                        </div>
                        <h1>Sign Up</h1>
                        <h2>Are you an Edison Academy student?</h2>
                        <div className={styles["sign-up-choice-outer"]}>
                            <div className={styles["sign-up-choice"]}>
                                <div>
                                    <h1>Yes</h1>
                                </div>
                                <div>
                                    <h1>No</h1>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    // return (
    //     <div className={styles["site"]}>
    //         <Head>
    //             <link rel="canonical" href={SignupLink}/>
    //             <meta property="og:title" content="Signup | HackMCA Hackathon"/>
    //         </Head>
    //         <meta httpEquiv="refresh" content={`0 ; url = ${SignupLink}`}/>
    //         <a href={SignupLink}>Go to redirect</a>
    //     </div>
    // )
}

