import React from 'react';
import { Styles } from '../../Consts';
import './_header.scss';
export const Header = ({ diamonds, currDiamondsTotalPrice }) => {
  return (
    <div className={Styles.HEADER}>
      <h4>Total Number Of Diamonds: 99</h4>
      <h4>
        Total Diamonds Price: <span style={{ color: 'green' }}>$47610.36</span>
      </h4>

      <h4>Current Number Of Diamonds: {diamonds.length}</h4>
      <h4>
        Current Diamonds Price:{' '}
        <span style={{ color: 'green' }}>
          ${Math.round(currDiamondsTotalPrice * 100) / 100}
        </span>
      </h4>
    </div>
  );
};
