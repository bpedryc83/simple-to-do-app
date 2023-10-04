import styles from './Card.module.scss';
import clsx from "clsx";
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { deleteCard } from '../../redux/cardsRedux';


const Card = props => {

  const dispatch = useDispatch();

  const changeFavorite = (e) => {
    e.preventDefault();
    const id = props.id;
    dispatch(toggleCardFavorite( { id }));
  }

  const removeCard = (e) => {
    e.preventDefault();
    const id = props.id;
    dispatch(deleteCard( { id }));
  }

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <span className={ clsx('fa fa-star', props.isFavorite === false && 'fa fa-star-o', styles.cursorOnIcon)} onClick={e => changeFavorite(e)}/>
        <span className={'fa fa-trash ' + styles.iconPadding + ' ' + styles.cursorOnIcon} onClick={e => removeCard(e)}/>
      </div>
    </li>
  )
}

export default Card;