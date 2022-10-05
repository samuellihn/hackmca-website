import styles from '../styles/Home.module.sass'
export default function ScheduleSection({id}) {
    return (
        <div className={styles["content-section"]} id={id}>
            <div className={[styles["content-section-yellow"], styles["content-section"]].join(" ")}>
                <div className={styles["content-section-inner"]}>
                    <h1>Schedule</h1>
                    <p>7:30 - 8:00: Check-In</p>
                    <p>8:00 - 8:15: Brainstorming + Breakfast</p>
                    <p>8:15 - 8:30: Opening Ceremony</p>
                    <p>8:30 - 9:00: Opening Speaker</p>
                    <p><b>9:00: Hacking Begins!</b></p>
                    <p>9:00 - 10:30: Introductory Workshop - Introduction to Python</p>
                    <p>10:30 - 12:00: Workshop 1 - Introduction to React</p>
                    <p>12:00 - 1:30: Workshop 2 - FTC Robotics</p>
                    <p>1:30 - 2:30: Lunch</p>
                    <p>2:30 - 4:00: Workshop 3 - Introduction to Pygame</p>
                    <p><b>5:30: Hacking Ends!</b></p>
                    <p>5:30 - 7:00: Presentations + Dinner</p>
                    <p>7:00 - 7:30: Awards and Winning Team Presentations</p>
                </div>
            </div>
        </div>
    )
}