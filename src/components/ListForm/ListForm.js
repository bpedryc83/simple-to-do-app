import styles from './ListForm.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import shortid from 'shortid';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = e => {
      e.preventDefault();
      const id = shortid();
      dispatch(addList({ id, title, description }));
      setTitle('');
      setDescription('');
  }

	return (
    <div className={styles.formDiv}>
      <form className={styles.listForm} onSubmit={handleSubmit}>
        <span className={styles.smallMedia}>Title: </span>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
        <span className={styles.smallMedia}>Description: </span>
        <TextInput value={description} onChange={e => setDescription(e.target.value)} />
        <Button>Add list</Button>
      </form>
    </div>
	);
};

export default ListForm;