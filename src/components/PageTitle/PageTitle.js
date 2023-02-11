import styles from './PageTitle.module.scss';

const PageTitle = props => <h2 className={styles.title}>{props.children}</h2>;

export default PageTitle;