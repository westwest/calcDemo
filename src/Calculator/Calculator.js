import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/styles';

import { reducer as calcReducer } from './duck.js';
import InputSegment from './InputSegment.js';
import ResultSegment from './ResultSegment.js';

const Calculator = props => {
  const [state, dispatch] = useReducer(calcReducer, { values: [0, 0, 0] });

  const styles = makeStyles({
    calculator: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  });
  return (
    <div className={styles().calculator}>
      {state.values.map((value, index) => (
        <InputSegment
          key={index}
          index={index}
          value={value}
          dispatch={dispatch}
        />
      ))}
      <ResultSegment values={state.values} />
    </div>
  );
};

export default Calculator;
