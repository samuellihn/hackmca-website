import styles from '../styles/Button.module.sass'
export default function Button({href, displayText, light}) {
    return (
        light ? (<div className={styles["button-light"]}><a href={href}>{displayText}</a></div>) : (<div className={styles.button}><a href={href}>{displayText}</a></div>)
    )
}