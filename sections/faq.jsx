import styles from '../styles/Home.module.sass'
import Expander from "../components/Expander";

export default function FaqSection({id}) {
    return (
        <div className={[styles["content-section-yellow"], styles["content-section"]].join(" ")} id={id}>
            <div className={styles["content-section-inner"]}>
                <h1>Frequently Asked Questions</h1>
                <div className={styles["expander-group"]}>
                    <Expander titleText={"What is a hackathon?"}>
                        A hackathon is an event where programmers and tech enthusiasts get together to collaborate,
                        compete, and learn something new! In our case, it’s a 12-hour long event where you can
                        submit an entry for our competition and get the chance to win great prizes, as well as
                        attend keynotes and participate in workshops. Hackathons are the perfect opportunity for
                        anyone with an interest in computer science or tech to connect with others and grow
                        themselves.
                    </Expander>
                    <Expander titleText={"Who can attend??"}>
                        Anyone in high school (grades 9-12) within the state of New Jersey is welcome to attend!
                    </Expander>
                    <Expander titleText={"How much does it cost?"}>
                        To cover the cost for food and other amenities, we have an event fee of <b>$10.</b> You will
                        be able to pay through our registration form.
                    </Expander>
                    <Expander titleText={"What do I need to do?"}>
                        Simply sign up and show up! Make sure to bring a computer and charger on the day-of. We will
                        send more details once we get closer to the event.
                    </Expander>
                    <Expander titleText={"Will food be provided?"}>
                        Yes! Lunch and dinner will be provided, breakfast will be available for purchase. Snacks and
                        additional food will also be available for purchase.
                    </Expander>
                    <Expander titleText={"How do I get to the venue?"}>
                        HackMCA will take place at the Middlesex County College in Edison, NJ. Make sure to arrange
                        a means of transportation (a parent/guardian dropping you off) for drop-off and pick-up. It
                        is very important that your transportation arrives on time! More information will be
                        provided via email.
                    </Expander>
                    <Expander titleText={"What's the purpose of this event?"}>
                        As a computer science club at a STEM-based high school, we are always looking to foster
                        interest in computer science in our community, and we believe hackathons are truly a fun and
                        memorable way to do this!
                    </Expander>
                    <Expander titleText={"What if I don't know how to code?"}>
                        No problem! Our hackathon is open to all skill-sets. If you’re interested in tech or
                        computer science but don’t know where to start, this is the perfect event for you! Even if
                        you don’t think you’re that interested, why not give it a shot? <b>We will also be hosting
                        introductory workshops to give you a primer on programming!</b>
                    </Expander>
                    <hr/>
                </div>
            </div>
        </div>

    )
}
