import {Component} from "react";
import styles from "../styles/TeamProfile.module.sass";

export default class TeamProfile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles["team-profile"]}>
                <img src={this.props.imgSrc}/>
                <h1>{this.props.name}</h1>
                <h2>{this.props.title}</h2>
                <div className={styles["profile-content"]}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
