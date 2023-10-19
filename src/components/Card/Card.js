import clsx from "clsx";
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard, editCard, toggleCardFavorite } from '../../redux/cardsRedux';
import styles from './Card.module.scss';

const Card = props => {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);

  const dispatch = useDispatch();
  const cardRef = useRef(null);
  const inputRef = useRef(null);

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
      setTimeout(() => {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
      }, 0);
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
              ref={inputRef}
              value={title}
              maxLength={20}
              pattern="[a-zA-Z0-9 ]{3,20}"
              title="Please use only letters and digitals. Min-max characters: 3-20."
              className={styles.input}
              onChange={e => setTitle(e.target.value)}
              required
            />
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