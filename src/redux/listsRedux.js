const ADD_LIST = 'app/lists/ADD_LIST';
const EDIT_LIST = 'app/lists/EDIT_LIST';
const DELETE_LIST = 'app/lists/DELETE_LIST';

export const addList = payload => ({ type: ADD_LIST, payload});
export const editList = payload => ({ type: EDIT_LIST, payload });
export const deleteList = payload => ({ type: DELETE_LIST, payload });

const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload }];
    case EDIT_LIST:
      return statePart.map(item => (item.id === action.payload.id ? { ...item, ...action.payload } : item));
    case DELETE_LIST: {
      const indexToRemove = statePart.findIndex(list => list.id === action.payload.id);
      if (indexToRemove > -1) {
        statePart.splice(indexToRemove, 1);
      }
      return [...statePart];
    }
    default:
      return statePart;
  }
}

export default listsReducer;