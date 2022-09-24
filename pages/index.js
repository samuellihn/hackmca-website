import styles from '../styles/Home.module.sass'
import Head from "next/head";
import HomeSection from "../sections/home";
import ContentSection from "../sections/content";
import SponsorsSection from "../sections/sponsors";
import SpeakersSection from "../sections/speakers";
import WorkshopsSection from "../sections/workshops";
import FaqSection from "../sections/faq";
import AboutSection from "../sections/about";

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
            <HomeSection/>
            <ContentSection/>
            <SponsorsSection/>
            <SpeakersSection/>
            <WorkshopsSection/>
            <FaqSection/>
            <AboutSection/>
        </div>
    )
}
