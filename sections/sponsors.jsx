import styles from '../styles/Home.module.sass'

export default function SponsorsSection({id}) {
    return (
        <div className={[styles["content-section-light"], styles["content-section"]].join(" ")} id={id}>
            <div className={styles["content-section-inner"]}>
                <h1>Sponsors</h1>
                <img src={"taskade.jpg"} className={styles["sponsors"]} alt="taskade"></img>
                <img src={"aops.jpg"} className={styles["sponsors"]} alt="aops"></img>
            </div>
        </div>
    )
}
