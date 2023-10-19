import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCard } from '../../redux/cardsRedux';
import { deleteColumn } from '../../redux/columnsRedux';
import { deleteList, editList } from '../../redux/listsRedux';
import { getAllCards, getColumnsByList } from '../../redux/store';
import styles from './ListDrawItem.module.scss';


const ListDrawItem = props => {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.list.title);
  const [description, setDescription] = useState(props.list.description);

  const dispatch = useDispatch();
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const columnsInList = useSelector(state => getColumnsByList(state, props.list.id));
  const allCards = useSelector(getAllCards);

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
      setTimeout(() => {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
      }, 0);
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

  const delList = (e, listId) => {
    e.preventDefault();
    const columnsIdsInList = columnsInList.map(column => column.id);

    columnsIdsInList.forEach(columnId => {
      allCards
        .filter(card => card.columnId === columnId)
        .forEach(card => {
          dispatch(deleteCard({ id: card.id }));
        });
    });

    columnsInList.map(column => {
      dispatch(deleteColumn( {id: column.id} ));
      return null;
    })

    dispatch(deleteList( { id: listId }));
  }

  return (
    <div ref={listRef} className={styles.listItemMainStyle}>
      {!isEditing && <div className={styles.listItem}>
        <div className={styles.listContent}>
          <Link to={"/list/" + props.list.id} >
            <h3>{props.list.title}</h3>
            <p>{props.list.description}</p>
          </Link>
        </div>
        <div className={styles.additionalContent}>
          <div className={'fa fa-pencil ' + styles.iconPadding + ' ' + styles.cursorOnIcon + ' ' + styles.edition} onClick={e => editCurrentList(e)}/>
          <div className={'fa fa-trash ' + styles.iconPadding + ' ' + styles.cursorOnIcon + ' ' + styles.trash} onClick={e => delList(e, props.list.id)}/>
        </div>
      </div>
      }
      {isEditing && 
        <form onSubmit={e => changeList(e, props.list.id)}>      
          <div className={styles.listItemInEdition}>
            <div className={styles.listContent}>
              <h3>
                <input
                  ref={inputRef}
                  value={title}
                  maxLength={25}
                  pattern="[a-zA-Z0-9 ]{3,25}"
                  title="Please use only letters and digitals. Min-max characters: 3-25."
                  className={styles.input}
                  onChange={e => setTitle(e.target.value)}
                  required
                />
              </h3>
              <p>
                <input
                  value={description}
                  maxLength={40}
                  pattern="[a-zA-Z0-9 ]{3,40}"
                  title="Please use only letters and digitals. Min-max characters: 3-40."
                  className={styles.input}
                  onChange={e => setDescription(e.target.value)}
                  required
                /> 
              </p>
            </div>
            <div className={styles.additionalContent}>       
              <button type="submit" className={'fa fa-check ' + styles.button + ' ' + styles.iconPadding + ' ' + styles.cursorOnIcon + ' ' + styles.check} />
              <div className={'fa fa-pencil ' + styles.iconPadding + ' ' + styles.edition} />
            </div>
          </div>
        </form>
      }
    </div>
  )
}

export default ListDrawItem;