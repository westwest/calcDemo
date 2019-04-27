import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/styles';

import CalculatorSegment from '../Components/CalculatorSegment';

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
    inputField: {
      width: '50%'
    }
  });
  return (
    <CalculatorSegment background="#6AE">
      Value {props.index}:{' '}
      <input
        type="text"
        className={styles().inputField}
        value={props.value}
        onChange={onValueChange}
      />
    </CalculatorSegment>
  );
};

export default Calculator;
