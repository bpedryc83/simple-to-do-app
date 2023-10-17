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
        <TextInput
          value={title}
          maxLength={25}
          pattern="[a-zA-Z0-9 ]{3,25}"
          title="Please use only letters and digitals. Min-max characters: 3-25."
          onChange={e => setTitle(e.target.value)} />
        <span className={styles.smallMedia}>Description: </span>
        <TextInput
          value={description}
          maxLength={40}
          pattern="[a-zA-Z0-9 ]{3,40}"
          title="Please use only letters and digitals. Min-max characters: 3-40."
          onChange={e => setDescription(e.target.value)} />
        <Button>Add list</Button>
      </form>
    </div>
	);
};

export default ListForm;