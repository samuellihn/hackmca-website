import styles from '../styles/Home.module.sass'
export default function SpeakersSection({id}) {
    return (
        <div className={[styles["content-section-yellow"], styles["content-section"]].join(" ")} id={id}>
            <div className={styles["content-section-inner"]}>
                <h1>Speakers</h1>
                <p>Dean Jean Patrick Antoine, Rutgers University School of Engineering</p>
            </div>
        </div>
    )
}