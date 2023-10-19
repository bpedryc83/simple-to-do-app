import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';

import { changeSearchText } from '../../redux/searchTextRedux';

const SearchForm = () => {

  const [searchText, setSearchText] = useState('');
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSearchText(''));
  }, [dispatch]);
  

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeSearchText(searchText));
  };


  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchText} maxLength={15} onChange={e => setSearchText(e.target.value)} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  )
}

export default SearchForm;