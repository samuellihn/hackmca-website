import styles from '../styles/Button.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faCalendar} from "@fortawesome/free-regular-svg-icons";
import {faMapLocationDot} from "@fortawesome/free-solid-svg-icons";

export default function Button({href, displayText}) {
    return (
        <div className={styles.button}>
            <a href={href}>{displayText}</a>
        </div>
    )
}