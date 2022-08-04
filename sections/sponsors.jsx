import styles from '../styles/Home.module.sass'

export default function SponsorsSection({id}) {
    return (
        <div className={[styles["content-section-light"], styles["content-section"]].join(" ")} id={id}>
            <div className={styles["content-section-inner"]}>
                <h1>Sponsors</h1>
                <p>We are looking for sponsors for this event! If you or your organization would like to sponsor
                    this event and reach hundreds of motivated, tech-minded high school students, please reach out
                    to <a href={"mailto:mcacsclub@gmail.com"}>mcacsclub@gmail.com</a></p>
            </div>
        </div>
    )
}
