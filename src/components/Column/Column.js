import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredCards } from '../../redux/store';
import { getIconById } from '../../redux/store';
import { deleteColumn } from '../../redux/columnsRedux';
import { editColumn } from '../../redux/columnsRedux';
import IconTable from '../IconTable/IconTable';

const Column = props => {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [iconId, setIconId] = useState(props.iconId);
  const [oldIconId] = useState(props.iconId);
  const [showIconsList, setShowIconsList] = useState(false);

  const columnRef = useRef(null);
  const chooseIconRef = useRef(null);
  const checkIconRef = useRef(null);
  const dispatch = useDispatch();
  const cards = useSelector(state => getFilteredCards(state, props.id));
  const icon = useSelector(state => getIconById(state, iconId));

  const editCurrentColumn = (e, id) => {
    e.preventDefault();
    setIsEditing(true);
  }

  const changeColumnHeader = (e, id) => {
    e.preventDefault();
    dispatch(editColumn( { listId: props.listId, id, title, iconId }));
    setIsEditing(false);
    setShowIconsList(false);
  }

  const handleChangeIcon = (e) => {
    e.preventDefault();
    setShowIconsList(true);
  }

  const delColumn = (e, id) => {
    e.preventDefault();
    dispatch(deleteColumn( { id }));
  }

  useEffect(() => {
    setShowIconsList(false);
  }, [iconId])

  useEffect(() => {
    const handleClickOutside = (e) => {
      const editingColumn = columnRef.current;
      const chooseIconForColumn = chooseIconRef.current;
      const checkIconSpan = checkIconRef.current;
      if (editingColumn) {
        if (!editingColumn.contains(e.target)) {
          setIsEditing(false);
          if (checkIconSpan && !checkIconSpan.contains(e.target)) { 
            setIconId(oldIconId);
          }
          document.removeEventListener('click', handleClickOutside);
        }
      }
      if (showIconsList) {
        if (!chooseIconForColumn.contains(e.target)) {
          setShowIconsList(false);
        }
      }
    };

    if (isEditing) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isEditing, showIconsList, oldIconId]);

  return (
    <article className={styles.column}>
      <div ref={columnRef} className={styles.top}>
        {!isEditing &&
          <div className={styles.header}>
            <div className={styles.blankArea} />
            <div className={styles.contentArea}>
              <span className={styles.icon + ' fa fa-' + icon.iconName} />
              <span className={styles.afterIcon}></span>
              {props.title}
            </div>
            <div className={styles.toolsArea}>
              <div className={'fa fa-pencil ' + styles.iconPadding + ' ' + styles.cursorOnIcon + ' ' + styles.edition} onClick={e => editCurrentColumn(e)}/>
              <div className={'fa fa-trash ' + styles.iconPadding + ' ' + styles.cursorOnIcon + ' ' + styles.trash} onClick={e => delColumn(e, props.id)}/>
            </div>
          </div>
        }
        {isEditing &&
          <form onSubmit={(e) => changeColumnHeader(e, props.id)}>
            <div className={styles.headerInEdition}>
              <div className={styles.blankArea} />
              <div className={styles.contentArea}>
                <span ref={chooseIconRef} className={styles.icon + ' fa fa-' + icon.iconName + ' ' + styles.relative} onClick={e => handleChangeIcon(e)}>
                  <span className={styles.afterIconInEdition + ' ' + styles.relative}>
                    <div className={styles.triangle}>{'\u25BC'}</div>
                    {showIconsList && <IconTable setIcon={setIconId} setShowIconsList={setShowIconsList} />}
                  </span>
                </span>
                <input
                  type="text"
                  value={title}
                  maxLength={12}
                  pattern="[a-zA-Z0-9 ]{3,12}"
                  title="Please use only letters and digitals. Min-max characters: 3-12."
                  className={styles.input + ' ' + styles.inEdition}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div className={styles.toolsArea}>
                <button type="submit" ref={checkIconRef} className={'fa fa-check ' + styles.button + ' ' + styles.iconPadding + ' ' + styles.cursorOnIcon + ' ' + styles.check } />
                <span className={'fa fa-pencil ' + styles.iconPadding + ' ' + styles.edition }/>
              </div>
            </div>
          </form>
        }
      </div>
      <ul className={`${styles.cards} ${styles.bottom}`}>
        {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  )
}

export default Column;