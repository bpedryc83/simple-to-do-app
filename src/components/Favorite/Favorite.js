import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { getFavoriteCards } from '../../redux/store';

const Favorite = () => {
  
  const favoriteCards = useSelector(getFavoriteCards);
  
  let variableReturnCode;
  
  if (favoriteCards.length > 0) {
    variableReturnCode = <article className={styles.column}>
      <ul className={styles.cards}>
        {favoriteCards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
      </ul>
    </article>
  }
  else {
    variableReturnCode = <p className={styles.textAttention}>No cards marked as favorite</p>
  }

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      {variableReturnCode}
    </div>
  )
}

export default Favorite;