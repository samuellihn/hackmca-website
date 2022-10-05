import styles from '../styles/Home.module.sass'
import {Email, Insta, Flyer} from '../data/variables'
export default function ContactsSection({id}) {
    return (
        <div className={[styles["content-section-dark"], styles["content-section"]].join(" ")} id={id}>
            <h1>Contacts</h1>
            <span>
            <p>{Email}&nbsp;&nbsp;&nbsp;{Insta}</p>
            </span>
            <p>{Flyer}</p>
        </div>
    )
}