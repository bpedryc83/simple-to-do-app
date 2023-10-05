import styles from './FormHeader.module.scss';

const FormHeader = props => <div className={styles.headerDeployment}>
  <div className={styles.header}>
    {props.title}
  </div>
</div>

export default FormHeader;