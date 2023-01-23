import styles from './TextInput.module.scss';

const TextInput = props => <input className={styles.input} placeholder={props.placeholder} type="text" />

export default TextInput;