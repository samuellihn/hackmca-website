import styles from '../styles/Button.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faCalendar} from "@fortawesome/free-regular-svg-icons";
import {faMapLocationDot} from "@fortawesome/free-solid-svg-icons";

export default function Button({href, displayText, light}) {
    return (
        light ? (
            <div className={styles["button-light"]}>
                <a href={href}>{displayText}</a>
            </div>
        ) : (
            <div className={styles.button}>
                <a href={href}>{displayText}</a>
            </div>

        )
    )
}