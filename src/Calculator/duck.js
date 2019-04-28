export const reduxActions = {
  changeOperator: 'CHANGE_OPERATOR',
  changeValue: 'CHANGE_VALUE'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case reduxActions.changeValue:
      let newValues = state.values;
      if (!isNaN(action.value) || action.value === '')
        newValues[action.index] = action.value;
      return { values: newValues };
    case reduxActions.changeOperator:
      return { operator: action.operator };
    default:
      throw new Error();
  }
};
