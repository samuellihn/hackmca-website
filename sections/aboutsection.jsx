
import styles from '../styles/Home.module.sass'

export default function AboutSection({id}) {
    return (
        <div className={[styles["content-section-light"], styles["content-section"]].join(" ")} id={id}>
            <div className={styles["content-section-inner"]}>
                <h1>About Us</h1>
                <p><b>We are the Middlesex County Academy Computer Science Club.</b> We're a diverse group of
                    students from the Middlesex County Academy in Edison, New Jersey who are passionate about
                    computer science and technology. The club has competed in the American Computer Science League,
                    and recently we've branched into hosting events such as the Middlesex County Academy Informatics
                    Competition. Now we're hosting our first ever hackathon, and we're just as excited about it as
                    you are!</p>
                <img src={"MCACS Logo.svg"} className={styles["section-logo"]}></img>
                {/*<h2>Our Team</h2>*/}
                {/*<div className={styles["team-gallery"]}>*/}
                {/*    <TeamProfile name={"Samuel Lihn"} title={"Co-president"} imgSrc={"team/img.png"}><p>I'm a*/}
                {/*        person.</p></TeamProfile>*/}
                {/*</div>*/}

            </div>
        </div>
    )
}
