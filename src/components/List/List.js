import styles from './List.module.scss';
import Column from '../Column/Column';
import SearchForm from '../SearchForm/SearchForm';
import FormHeader from '../FormHeader/FormHeader';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import ColumnForm from '../ColumnForm/ColumnForm';
import { getColumnsByList, getListById } from '../../redux/store'; 

const List = () => {

  const { listId } = useParams();

  const listData = useSelector(state => getListById(state, listId));
  const columns = useSelector(state => getColumnsByList(state, listId));

  if(!listData) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map(column => 
          <Column
            key={column.id}
            {...column}
          />
        )}
      </section>
      <FormHeader title = 'ADD NEW COLUMN' />
      <ColumnForm listId={listId}/>
    </div>
  );
};

export default List;