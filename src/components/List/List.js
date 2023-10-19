import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getFilteredColumns, getListById } from '../../redux/store';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import FormHeader from '../FormHeader/FormHeader';
import SearchForm from '../SearchForm/SearchForm';
import styles from './List.module.scss';

const List = () => {

  const { listId } = useParams();

  const listData = useSelector(state => getListById(state, listId));
  const filteredColumns = useSelector(state => getFilteredColumns(state, listId));


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
        {filteredColumns.map(column => 
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