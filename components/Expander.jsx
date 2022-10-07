import styles from '../styles/Expander.module.sass'
import {Component} from "react";
export default class Expander extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: true }
    }
    render() {
        return (
            <div className={styles.expander}>
                <div className={styles.header} onClick={() => this.setState({collapsed: !this.state.collapsed})}>
                <h1>{this.props.titleText}</h1>
                </div> { this.state.collapsed ? <div/> : <div className={styles.text}>{this.props.children}</div> }
            </div>
        )
    }
}