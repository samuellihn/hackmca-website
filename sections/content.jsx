import styles from '../styles/Home.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faCalendar} from "@fortawesome/free-regular-svg-icons";
import {faMapLocationDot} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

export default function HomeSection({id}) {
    return (
        <div className={styles["content-section"]}>
            <div className={[styles["content-section-yellow"], styles["content-section"]].join(" ")}>
                <div className={styles["content-section-inner"]}>
                    <h1>What is HackMCA?</h1>
                    <p> HackMCA is a hackathon run by the Middlesex County Academy Computer Science Club in Edison, NJ. Join us for a day of coding, inventing, and learning on October 1, 2022! </p>
                    <div className={styles["fancy-list"]}>
                        <span><FontAwesomeIcon icon={faCalendar}/><b>Date:</b> October 1st, 2022</span>
                        <span><FontAwesomeIcon icon={faClock}/><b>Time:</b> 8 am - 9 pm</span>
                        <span><FontAwesomeIcon icon={faMapLocationDot}/><b>Venue:</b> Middlesex County College</span>
                    </div>
                    <p><b>Signups will open in a few weeks. Fill out this form and we&apos;ll send you an email once they&apos;re open!</b></p>
                    <Button href={"signup"} displayText={"Interest Form"}/>
                </div>
            </div>
        </div>
    )
}
