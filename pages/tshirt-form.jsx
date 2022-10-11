import styles from "../styles/Home.module.sass";
import Head from "next/head";
import {TShirtFormLink} from "../data/variables";
export default function TshirtForm() {
    return (
        <div className={styles["site"]}>
            <Head>
                <link rel="canonical" href={TShirtFormLink}/>
                <meta property="og:title" content="T-Shirt Form | HackMCA Hackathon"/>
            </Head>
            <meta httpEquiv="refresh" content={`0 ; url = ${TShirtFormLink}`}/>
            <a href={TShirtFormLink}>Go to redirect</a>
        </div>
    )
}