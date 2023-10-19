import { useSelector } from 'react-redux';
import { getAllColumns, getAllLists, getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
  
  const favoriteCards = useSelector(getFavoriteCards);
  const allColumns = useSelector(getAllColumns);
  const allLists = useSelector(getAllLists);
  
  let variableReturnCode;
  let listIdForCard;

  const getColumn = (columnId) => {
    const column = allColumns.find(column => column.id === columnId);
    listIdForCard = column.listId;
    return column.title;
  }

  const getList = (listId) => {
    const list = allLists.find(list => list.id === listId);
    return list.title;
  }

  if (favoriteCards.length > 0) {
    variableReturnCode = <article className={styles.column}>
      <ul className={styles.cards}>
        {favoriteCards.map(card => 
          <span key={card.id}>
            <div className={styles.overCard}>
              <span className={styles.firstSpan}>
                <span className={styles.bold}>Column: </span>
                {getColumn(card.columnId)}
              </span>
              <span>
                <span className={styles.bold}>List: </span>
                {listIdForCard && getList(listIdForCard)}
              </span>
            </div>
            <Card id={card.id} title={card.title} isFavorite={card.isFavorite}/>
            <div className={styles.divBelowCard}> </div>
          </span>
        )}
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