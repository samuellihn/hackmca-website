import styles from '../styles/Expander.module.sass'
import {Component} from "react";

export default class Expander extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }
    }

    render() {
        return (
            <div className={styles.expander}>
                <hr/>
                <div className={styles.header} onClick={() => this.setState({collapsed: !this.state.collapsed})}>
                    <h1>{this.props.titleText}</h1>
                </div>
                {
                    this.state.collapsed ?
                        <div/>
                        :
                        <div>
                            {this.props.children}
                        </div>
                }


            </div>
        )
    }
}
