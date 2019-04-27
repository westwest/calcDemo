import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/styles';

import { reduxActions, reducer as calcReducer } from './duck.js';
import CalculatorSegment from '../Components/CalculatorSegment';

const Calculator = props => {
  const [state, dispatch] = useReducer(calcReducer, { values: [0, 0, 0] });

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

const InputBox = props => {
  const onValueChange = e => {
    props.dispatch({
      type: reduxActions.changeValue,
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
