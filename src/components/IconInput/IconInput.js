import styles from './IconInput.module.scss';

const IconInput = props => <input 
  className={styles.input}
  value={props.icon ? ' \u00A0 \u00A0 \u00A0 \u00A0 \u25BC' : ''}
  placeholder={props.placeholder}
  type="text"
  onChange={() => {}}
  {...(props.required && { required: true })}
  />

export default IconInput;