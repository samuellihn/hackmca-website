import styles from '../styles/Home.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faCalendar} from "@fortawesome/free-regular-svg-icons";
import {faMapLocationDot} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import {Date, Venue, Time} from "../data/variables";

export default function HomeSection({id}) {
    return (
        <div className={styles["content-section"]} id={id}>
            <div className={[styles["content-section-yellow"], styles["content-section"]].join(" ")}>
                <div className={styles["content-section-inner"]}>
                    <h1>What is HackMCA?</h1>
                    <p> HackMCA is a hackathon run by the Middlesex County Academy Computer Science Club in Edison, NJ. Join us for a day of coding, inventing, and learning on {Date}! </p>
                    <div className={styles["fancy-list"]}>
                        <span><FontAwesomeIcon icon={faCalendar}/><b>Date:</b> {Date}</span>
                        <span><FontAwesomeIcon icon={faClock}/><b>Time:</b> {Time}</span>
                        <span><FontAwesomeIcon icon={faMapLocationDot}/><b>Venue:</b> {Venue}</span>
                    </div>
                    <p><b>Signups are open now! You can sign up below through EventBrite.</b></p>
                    <p>Registration costs $10 and will give you admission to the event.</p>
                    <p>Breakfast, lunch, and dinner can be purchased for $20 total. ($15 for cash payments for EAMS students)</p>
                    <Button href={"signup"} displayText={"Sign Up Now!"} />
                </div>
            </div>
        </div>
    )
}
