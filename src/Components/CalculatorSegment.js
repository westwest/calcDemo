import React from 'react';
import { makeStyles } from '@material-ui/styles';

const CalculatorSegment = props => {
  const styles = makeStyles({
    inputBox: {
      margin: '10px',
      padding: '10px',
      height: '150px',
      width: '150px',
      backgroundColor: props.background,
      borderStyle: 'solid',
      borderWidth: '1px',
      display: 'flex',
      alignItems: 'center'
    },
    inputField: {
      width: '50%'
    }
  });
  return <div className={styles().inputBox}>{props.children}</div>;
};

export default CalculatorSegment;
