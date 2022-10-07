import styles from "../styles/Home.module.sass";
import Head from "next/head";
import {SubmitWaiverLink} from "../data/variables";
export default function SubmitWaiver() {
    return (
        <div className={styles["site"]}>
            <Head>
                <link rel="canonical" href={SubmitWaiverLink}/>
                <meta property="og:title" content="Submit Safety Waiver | HackMCA Hackathon"/>
            </Head>
            <meta httpEquiv="refresh" content={`0 ; url = ${SubmitWaiverLink}`}/>
            <a href={SubmitWaiverLink}>Go to redirect</a>
        </div>
    )
}