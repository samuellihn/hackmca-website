import styles from '../styles/Home.module.sass'
export default function WorkshopsSection({id}) {
    return (
        <div className={[styles["content-section-light"], styles["content-section"]].join(" ")} id={id}>
            <div className={[styles["content-section-inner-workshops"], styles["content-section-inner"]].join(" ")}>
                <h1>Workshops</h1>
                <p>Workshop 1: Introduction to Python, Return STEM;</p>
                <p>Workshop 2: Introduction to Game Development with Pygame, Return STEM;</p>
                <p>Workshop 3: Introduction to React, Anthony Zhou, Columbia University</p>
                <p>Workshop 4: FTC Robotics software and hardware demo, Jim Carr, FTC 7350 Watt's Next</p>
            </div>
        </div>
    )
}