import styles from './Card.module.scss';

const Card = props => <li className={styles.card}>{props.title}</li>

export default Card;