const ADD_COLUMN = 'app/column/ADD_COLUMN';
const EDIT_COLUMN = 'app/column/EDIT_COLUMN';
const DELETE_COLUMN = 'app/column/DELETE_COLUMN';

export const addColumn = payload => ({ type: ADD_COLUMN, payload });
export const editColumn = payload => ({ type: EDIT_COLUMN, payload });
export const deleteColumn = payload => ({ type: DELETE_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload }];
    case EDIT_COLUMN:
      return statePart.map(item => (item.id === action.payload.id ? { ...item, ...action.payload } : item));
    case DELETE_COLUMN: {
      const indexToRemove = statePart.findIndex(column => column.id === action.payload.id);
      if (indexToRemove > -1) {
        statePart.splice(indexToRemove, 1);
      }
      return [...statePart];
    }
    default:
      return statePart;
  }
}

export default columnsReducer;