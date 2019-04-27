import React from 'react';
import { makeStyles } from '@material-ui/styles';

const Calculator = props => {
  const styles = makeStyles({
    calculator: {
      display: 'flex'
    }
  });
  return (
    <div class={styles().calculator}>
      <InputBox />
      <InputBox />
      <InputBox />
    </div>
  );
};

const InputBox = props => {
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
    <div class={styles().inputBox}>
      Value: <input type="text" class={styles().inputField} />
    </div>
  );
};

export default Calculator;
