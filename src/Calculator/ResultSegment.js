import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/styles';

import { reduxActions, reducer as calcReducer } from './duck.js';
import CalculatorSegment from '../Components/CalculatorSegment';

const operators = {
  sum: 'SUM',
  multiply: 'MULTIPLY'
};

const ResultSegment = props => {
  const [state, dispatch] = useReducer(calcReducer, {
    operator: operators.sum
  });

  const sum = (total, num) => total + num;
  const multiply = (total, num) => total * num;

  let operator;
  switch (state.operator) {
    case operators.sum:
      operator = sum;
      break;
    case operators.multiply:
      operator = multiply;
      break;
    default:
      operator = sum;
  }
  const result = props.values
    .map(value => (value === '' ? 0 : parseInt(value)))
    .reduce(operator);

  const onValueChange = e =>
    dispatch({
      type: reduxActions.changeOperator,
      operator: e.target.value
    });

  const styles = makeStyles({});
  return (
    <CalculatorSegment background="#FAA">
      <div>
        <input
          type="radio"
          value={operators.sum}
          checked={state.operator === operators.sum}
          onChange={onValueChange}
        />{' '}
        Sum
      </div>
      <div>
        <input
          type="radio"
          value={operators.multiply}
          checked={state.operator === operators.multiply}
          onChange={onValueChange}
        />{' '}
        Multiply
      </div>
      <div>Result: {result}</div>
    </CalculatorSegment>
  );
};
export default ResultSegment;
