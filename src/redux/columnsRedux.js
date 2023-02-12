const ADD_COLUMN = 'app/column/ADD_COLUMN';

export const addColumn = payload => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload }];
    default:
      return statePart;
  }
}

export default columnsReducer;