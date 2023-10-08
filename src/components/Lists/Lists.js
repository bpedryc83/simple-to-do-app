import styles from './Lists.module.scss';
import { getAllLists } from '../../redux/store';
import { useSelector } from 'react-redux';
import ListForm from '../ListForm/ListForm';
import FormHeader from '../FormHeader/FormHeader';
import ListDrawItem from '../ListItemDraw/ListDrawItem';

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