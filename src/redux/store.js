import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';

import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchTextReducer from './searchTextRedux';


export const getFilteredCards = ({ cards, searchText }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchText));
export const getFavoriteCards = ( {cards} ) => cards.filter(card => card.isFavorite === true);

export const getAllColumns = (state) => state.columns;
export const getAllLists = (state) => state.lists;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);


const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchText: searchTextReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;