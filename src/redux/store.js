import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';

import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchTextReducer from './searchTextRedux';
import iconsReducer from './iconsRedux';


export const getFilteredCards = ({ cards, searchText }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchText));
export const getFavoriteCards = ( {cards} ) => cards.filter(card => card.isFavorite === true);

export const getAllCards = (state) => state.cards;
export const getAllColumns = (state) => state.columns;
export const getAllLists = (state) => state.lists;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getColumnByCard = ({ columns }, columnId) => columns.filter(column => column.id === columnId);
export const getAllIcons = ( state ) => state.icons; 
export const getIconById = (store, iconId) => store.icons.find(icon => icon.id === iconId);

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchText: searchTextReducer,
  icons: iconsReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;