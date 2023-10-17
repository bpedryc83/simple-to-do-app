import styles from './ColumnForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import shortid from 'shortid';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import IconInput from '../IconInput/IconInput';
import { addColumn } from '../../redux/columnsRedux';
import IconTable from '../IconTable/IconTable';
import { getAllIcons } from '../../redux/store';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const [iconName, setIconName] = useState(null);
  const [showIconsList, setShowIconsList] = useState(false);
  
  const dispatch = useDispatch();
  const allIcons = useSelector(getAllIcons);

  const iconsListRef = useRef(null);

  const handleSetIcon = (e) => {
    e.preventDefault();
    setShowIconsList(true);
  }

  const handleSubmit = e => {
      e.preventDefault();
      const id = shortid();
      const listId = props.listId;
      const iconId = icon;
      dispatch(addColumn({ listId, title, iconId, id }));
      setTitle('');
      setIcon('');
  }

  useEffect(() => {
    if(icon) {
      allIcons.find(item => item.id === icon ? setIconName(item.iconName) : null);
    }
  }, [icon, allIcons])

  useEffect(() => {
    const handleClickOutside = (e) => {
      const displayedList = iconsListRef.current;
      if (displayedList) {
        if (!displayedList.contains(e.target)) {
          setShowIconsList(false);
          document.removeEventListener('click', handleClickOutside);
        }
      }
    };

    if (showIconsList) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showIconsList]);


	return (
    <div className={styles.formDiv}>
      <form className={styles.columnForm} onSubmit={handleSubmit}>
        <span className={styles.smallMedia}>Title: </span>
        <TextInput 
          value={title}
          maxLength={12}
          pattern="[a-zA-Z0-9 ]{3,12}"
          title="Please use only letters and digitals. Min-max characters: 3-12."
          onChange={e => setTitle(e.target.value)}
          required
        />
        <span className={`${styles.smallMedia} ${styles.paddingLeft}`}>Icon: </span>
        <span ref={iconsListRef} className={styles.relative}>
          <span onClick={e => handleSetIcon(e)}>
            <IconInput placeholder={'Icon \u25BC'} icon={icon} required />
          </span>
          {icon && <span className={`fa fa-${iconName} ${styles.choseIcon}`} />}
          {showIconsList && <IconTable setIcon={setIcon} setShowIconsList={setShowIconsList} />}
        </span>
        <Button>Add column</Button>
      </form>
    </div>
	);
};

export default ColumnForm;