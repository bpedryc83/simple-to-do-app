import { useState, useRef, useEffect } from 'react';
import styles from './Card.module.scss';
import clsx from "clsx";
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { editCard } from '../../redux/cardsRedux';
import { deleteCard } from '../../redux/cardsRedux';

const Card = props => {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);

  const dispatch = useDispatch();
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const editingCardElement = cardRef.current;
      if (editingCardElement) {
        if (!editingCardElement.contains(e.target)) {
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

  const changeFavorite = (e) => {
    e.preventDefault();
    const id = props.id;
    dispatch(toggleCardFavorite( { id }));
  }

  const editCurrentCard = (e) => {
    e.preventDefault();
    setIsEditing(true);
  }

  const changeTitle = (e, id) => {
    e.preventDefault();
    dispatch(editCard({ id, title }));
    setIsEditing(false);
  }

  const removeCard = (e) => {
    e.preventDefault();
    const id = props.id;
    dispatch(deleteCard( { id }));
  }

  return (
    <div ref={cardRef}>
      {!isEditing && 
        <li className={styles.card}>
            {props.title}
            <div>
              <span className={ clsx('fa fa-star', props.isFavorite === false && 'fa fa-star-o', styles.cursorOnIcon)} onClick={e => changeFavorite(e)}/>
              <span className={'fa fa-pencil ' + styles.iconPadding + ' ' + styles.cursorOnIcon} onClick={e => editCurrentCard(e)}/>
              <span className={'fa fa-trash ' + styles.iconPadding + ' ' + styles.cursorOnIcon} onClick={e => removeCard(e)}/>
            </div>
        </li>
      }
      {isEditing && 
        <li className={styles.cardInEdition}  >
          <input value={title} className={styles.input} onChange={e => setTitle(e.target.value)} />
          <div>
            <span className={'fa fa-check ' + styles.iconPadding + ' ' + styles.cursorOnIcon } onClick={e => changeTitle(e, props.id)} />
            <span className={'fa fa-pencil ' + styles.iconPadding }/>
          </div>
        </li>
      }
    </div>
  )
}

export default Card;