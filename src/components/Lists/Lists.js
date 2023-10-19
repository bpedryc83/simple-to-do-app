import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/store';
import FormHeader from '../FormHeader/FormHeader';
import ListForm from '../ListForm/ListForm';
import ListDrawItem from '../ListItemDraw/ListDrawItem';
import styles from './Lists.module.scss';

const Lists = () => {
  const lists = useSelector(getAllLists);

  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
      {lists.map(list => (
        <ListDrawItem key={list.id} list={list} /> 
      ))}
      <FormHeader title='ADD NEW LIST' />
      <ListForm />
    </section>
  );
}

export default Lists;