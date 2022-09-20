import styles from "../styles/Home.module.sass";
import Head from "next/head";
import {SignupLink} from "../data/variables";

export default function Signup() {
    return (
        <div className={styles["site"]}>
            <Head>
                <link rel="canonical" href={SignupLink}/>
                <meta property="og:title" content="Signup | HackMCA Hackathon"/>
            </Head>
            <meta httpEquiv="refresh" content={`0 ; url = ${SignupLink}`}/>
            <a href={SignupLink}>Go to redirect</a>
        </div>
    )
}
