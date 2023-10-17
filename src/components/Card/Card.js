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
        <form onSubmit={(e) => changeTitle(e, props.id)}>
          <li className={styles.cardInEdition}  >
            <input 
              value={title}
              maxLength={25}
              pattern="[a-zA-Z0-9 ]{3,25}"
              title="Please use only letters and digitals. Min-max characters: 3-25."
              className={styles.input}
              onChange={e => setTitle(e.target.value)} />
            <div>
              <button type="submit" className={'fa fa-check ' + styles.button + ' ' + styles.iconPadding + ' ' + styles.cursorOnIcon } />
              <span className={'fa fa-pencil ' + styles.iconPadding }/>
            </div>
          </li>
        </form>
      }
    </div>
  )
}

export default Card;