import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/styles';

const reduxAction = {
  changeOperator: 'CHANGE_OPERATOR',
  changeValue: 'CHANGE_VALUE'
};

const Calculator = props => {
  const [state, dispatch] = useReducer(reducer, { values: [0, 0, 0] });

  const styles = makeStyles({
    calculator: {
      display: 'flex'
    }
  });
  return (
    <div className={styles().calculator}>
      {state.values.map((value, index) => (
        <InputBox key={index} index={index} value={value} dispatch={dispatch} />
      ))}
    </div>
  );
};

const reducer = (state, action) => {
  console.log(action.type === reduxAction.changeValue);
  switch (action.type) {
    case reduxAction.changeValue:
      let newValues = state.values;
      if (!isNaN(action.value) || action.value === '')
        newValues[action.index] = action.value;
      return { values: newValues };
    default:
      throw new Error();
  }
};

const InputBox = props => {
  const onValueChange = e => {
    props.dispatch({
      type: reduxAction.changeValue,
      index: props.index,
      value: e.target.value
    });
  };

  const styles = makeStyles({
    inputBox: {
      margin: '10px',
      padding: '10px',
      height: '150px',
      width: '150px',
      backgroundColor: '#6AE',
      borderStyle: 'solid',
      borderWidth: '1px',
      display: 'flex',
      alignItems: 'center'
    },
    inputField: {
      width: '50%'
    }
  });
  return (
    <div className={styles().inputBox}>
      Value {props.index}:{' '}
      <input
        type="text"
        className={styles().inputField}
        value={props.value}
        onChange={onValueChange}
      />
    </div>
  );
};

export default Calculator;
