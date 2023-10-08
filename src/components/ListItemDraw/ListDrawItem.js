import styles from './ListDrawItem.module.scss';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { editList } from '../../redux/listsRedux';
import { deleteList } from '../../redux/listsRedux';

const ListDrawItem = props => {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.list.title);
  const [description, setDescription] = useState(props.list.description);

  const dispatch = useDispatch();
  const listRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const editingList = listRef.current;
      if (editingList) {
        if (!editingList.contains(e.target)) {
          setIsEditing(false);
          document.removeEventListener('click', handleClickOutside);
        }
      }
    };

    if (isEditing) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isEditing]);

  const editCurrentList = (e, id) => {
    e.preventDefault();
    setIsEditing(true);
  }

  const changeList = (e, id) => {
    e.preventDefault();
    dispatch(editList( { id, title, description }));
    setIsEditing(false);
  }

  const delList = (e, id) => {
    e.preventDefault();
    dispatch(deleteList( { id }));
  }

  return (
    <div ref={listRef} className={styles.listItemMainStyle}>
      {!isEditing && <div className={styles.listItem}>
        <div className={styles.listContent}>
          <Link to={"/list/" + props.list.id} >
          <h3>{title}</h3>
          <p>{description}</p>
          </Link>
        </div>
        <div className={styles.additionalContent}>
          <div className={'fa fa-pencil ' + styles.iconPadding + ' ' + styles.cursorOnIcon + ' ' + styles.edition} onClick={e => editCurrentList(e)}/>
          <div className={'fa fa-trash ' + styles.iconPadding + ' ' + styles.cursorOnIcon + ' ' + styles.trash} onClick={e => delList(e, props.list.id)}/>
        </div>
      </div>
      }
      {isEditing && <div className={styles.listItemInEdition}>
        <div className={styles.listContent}>
          <h3>
            <input value={title} className={styles.input} onChange={e => setTitle(e.target.value)} />
          </h3>
          <p>
            <input value={description} className={styles.input} onChange={e => setDescription(e.target.value)} /> 
          </p>
        </div>
        <div className={styles.additionalContent}>       
          <div className={'fa fa-check ' + styles.iconPadding + ' ' + styles.cursorOnIcon + ' ' + styles.check} onClick={e => changeList(e, props.list.id)} />
          <div className={'fa fa-pencil ' + styles.iconPadding + ' ' + styles.edition} onClick={e => editCurrentList(e)}/>
        </div>
      </div>
      }
    </div>
  )
}

export default ListDrawItem;