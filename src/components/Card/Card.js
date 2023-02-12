import styles from './Card.module.scss';
import clsx from "clsx";
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';


const Card = props => {

  const dispatch = useDispatch();

  const changeFavorite = (e) => {
    e.preventDefault();
    const id = props.id;
    dispatch(toggleCardFavorite( { id }));
  }

  return (
    <li className={styles.card}>
      {props.title}
      <span className={ clsx('fa fa-star', props.isFavorite === false && 'fa fa-star-o')} onClick={e => changeFavorite(e)}/>
    </li>
  )
}

export default Card;