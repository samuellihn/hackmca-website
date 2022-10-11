import styles from "../styles/Home.module.sass";
import Head from "next/head";
import {FoodFormLink} from "../data/variables";
export default function FoodForm() {
    return (
        <div className={styles["site"]}>
            <Head>
                <link rel="canonical" href={FoodFormLink}/>
                <meta property="og:title" content="Dietary Restrictions Form | HackMCA Hackathon"/>
            </Head>
            <meta httpEquiv="refresh" content={`0 ; url = ${FoodFormLink}`}/>
            <a href={FoodFormLink}>Go to redirect</a>
        </div>
    )
}