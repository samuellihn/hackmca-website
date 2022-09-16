import styles from '../styles/Home.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faCalendar} from "@fortawesome/free-regular-svg-icons";
import {faMapLocationDot} from "@fortawesome/free-solid-svg-icons";
import {Venue, Time, Date} from "../data/variables";

export default function HomeSection({id}) {
    return (
        <div className={styles["home-screen"]}>
            <div className={styles["home-screen-inner"]}>
                <div className={styles["centered-v"]}>
                    <h2>The First Annual</h2>
                    <div className={styles["centered-h"]}>
                        <img src={"hackmca-logo.svg"} alt={"HackMCA Logo"}></img>
                    </div>
                    <h1>Hackathon</h1>
                </div>
                <div className={styles["fancy-list"]}>
                    <span><FontAwesomeIcon icon={faCalendar}/>{Date}</span>
                    <span><FontAwesomeIcon icon={faClock}/>{Time}</span>
                    <span><FontAwesomeIcon icon={faMapLocationDot}/>{Venue}</span>
                </div>
            </div>
        </div>
    )
}
