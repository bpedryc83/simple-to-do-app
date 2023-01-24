import styles from './ColumnForm.module.scss';
import { useState } from 'react';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  
  const handleSubmit = e => {
      e.preventDefault();
      props.action({ title: title, icon: icon });
      setTitle('');
      setIcon('');
  }

	return (
    <div className={styles.formDiv}>
      <form className={styles.columnForm} onSubmit={handleSubmit}>
        <span className={styles.smallMedia}>Title: </span>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
        <span className={styles.smallMedia}>Icon: </span>
        <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
        <Button>Add column</Button>
      </form>
    </div>
	);
};

export default ColumnForm;