import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeSearchText } from '../../redux/store';

const SearchForm = () => {

  const [searchText, setSearchText] = useState('');
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSearchText(''));
  }, [dispatch]);
  

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeSearchText(searchText));
    setSearchText('');
  };


  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchText} onChange={e => setSearchText(e.target.value)} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  )
}

export default SearchForm;