const TOGGLE_CARD_FAVORITE = 'app/cards/TOGGLE_CARD_FAVORITE';
const ADD_CARD = 'app/cards/ADD_CARD';
const EDIT_CARD = 'app/cards/EDIT_CARD';
const DELETE_CARD = 'app/cards/DELETE_CARD';

export const addCard = payload => ({ type: ADD_CARD, payload });
export const editCard = payload => ({ type: EDIT_CARD, payload });
export const deleteCard = payload => ({ type: DELETE_CARD, payload });
export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload});

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload }];
    case EDIT_CARD:
      return statePart.map(card => (card.id === action.payload.id) ? { ...card, title: action.payload.title } : card);
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload.id) ? { ...card, isFavorite: !card.isFavorite } : card);
    case DELETE_CARD: {
      const indexToRemove = statePart.findIndex(card => card.id === action.payload.id);
      if (indexToRemove > -1) {
        statePart.splice(indexToRemove, 1);
      }
      return [...statePart];
    }
    default:
      return statePart;
  }
}

export default cardsReducer;  