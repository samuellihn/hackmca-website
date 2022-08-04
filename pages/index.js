import styles from '../styles/Home.module.sass'
import Button from "../components/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faCalendar} from "@fortawesome/free-regular-svg-icons";
import {faMapLocationDot} from "@fortawesome/free-solid-svg-icons";
import Expander from "../components/Expander";

export default function Home() {
    return (
        <div className={styles["site"]}>
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
                        <span><FontAwesomeIcon icon={faClock}/>8 am - 8 pm</span>
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
                            <span><FontAwesomeIcon icon={faClock}/><b>Time:</b> 8 am - 8 pm</span>
                            <span><FontAwesomeIcon
                                icon={faMapLocationDot}/><b>Venue:</b> Middlesex County College</span>
                        </div>
                        <Button href={"about:blank"} displayText={"Sign up now!"}/>
                    </div>
                </div>
            </div>
            <div className={[styles["content-section-light"], styles["content-section"]].join(" ")}>
                <div className={styles["content-section-inner"]}>
                    <h1>Sponsors</h1>
                    <p>We are looking for sponsors for this event! If you or your organization would like to sponsor
                        this event and reach hundreds of motivated, tech-minded high school students, please reach out
                        to <a href={"mailto:ravishankars@mcmsnj.net"}>ravishankars@mcmsnj.net</a></p>
                </div>
            </div>
            <div className={[styles["content-section-yellow"], styles["content-section"]].join(" ")}>
                <div className={styles["content-section-inner"]}>
                    <h1>Frequently Asked Questions</h1>
                    <div className={styles["expander-group"]}>
                        <Expander titleText={"What is a hackathon?"}>A hackathon</Expander>
                        <Expander titleText={"Who can join?"}>A hackathon</Expander>
                        <Expander titleText={"What do I need to bring?"}>A hackathon</Expander>
                        <Expander titleText={"What if I don't know how to code?"}>A hackathon</Expander>
                        <Expander titleText={"What if I have another question?"}>A hackathon</Expander>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className={[styles["content-section-light"], styles["content-section"]].join(" ")}>
                <div className={styles["content-section-inner"]}>
                    <h1>About Us</h1>
                    <p><b>We are the Middlesex County Academy Computer Science Club.</b> We're a diverse group of
                        students from the Middlesex County Academy in Edison, New Jersey who are passionate about
                        computer science and technology. The club has competed in the American Computer Science League,
                        and recently we've branched into hosting events such as the Middlesex County Academy Informatics
                        Competition. Now we're hosting our first ever hackathon, and we're just as excited about it as
                        you are!</p>
                    <h2>Our Team</h2>

                </div>
            </div>
        </div>
    )
}
