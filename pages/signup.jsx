import styles from "../styles/Home.module.sass";
import Head from "next/head";


export default function Signup() {
    return (
        <div className={styles["site"]}>
            <Head>
                <link rel="canonical" href="https://hackmca.info/signup"/>
                <meta property="og:title" content="Signup | HackMCA Hackathon"/>
            </Head>
            <meta httpEquiv="refresh" content=" 0 ; url = https://forms.gle/dj6ywUiDLpASmhYJ7"/>
            <a href="https://forms.gle/dj6ywUiDLpASmhYJ7">Go to redirect</a>
        </div>
    )
}
