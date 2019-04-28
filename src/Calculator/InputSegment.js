import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { reduxActions } from './duck.js';
import CalculatorSegment from '../Components/CalculatorSegment';

const InputSegment = props => {
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
      <div>
        Value {props.index}:{' '}
        <input
          type="text"
          className={styles().inputField}
          value={props.value}
          onChange={onValueChange}
        />
      </div>
    </CalculatorSegment>
  );
};
export default InputSegment;
