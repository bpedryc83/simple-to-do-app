import styles from './TextInput.module.scss';

const TextInput = props => <input 
  className={styles.input}
  value={props.value}
  pattern={props.pattern}
  title={props.title}
  maxLength={props.maxLength}
  onChange={props.onChange}
  placeholder={props.placeholder}
  type="text"
  {...(props.required && { required: true })}
  {...(props.readOnly && { readOnly: true })}
  />

export default TextInput;