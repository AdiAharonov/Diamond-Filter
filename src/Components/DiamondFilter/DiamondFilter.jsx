import React, { useState, useEffect } from 'react';
import './_filter.scss';
import { Styles } from '../../Consts';
import { Multiselect } from 'multiselect-react-dropdown';
import Slider from '@material-ui/core/Slider';

export const Filter = ({ onSetFilter, setCaratRange }) => {
  const [value, setValue] = useState([0.23, 0.32]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let timer1 = setTimeout(() => setCaratRange(value), 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, [value]);

  const onSelect = (filterArray) => {
    onSetFilter(filterArray);
  };
  const onRemove = (filterArray) => {
    onSetFilter(filterArray);
  };
  return (
    <div className={Styles.FILTER}>
      <Multiselect
        placeholder="Filter"
        options={[
          { key: 'Shape - ROUND', property: 'Shape', value: 'ROUND' },
          { key: 'Shape - OVAL', property: 'Shape', value: 'OVAL' },
          { key: 'Shape - PEAR', property: 'Shape', value: 'PEAR' },
          { key: 'Color - E', property: 'Color', value: 'E' },
          { key: 'Color - F', property: 'Color', value: 'F' },
          { key: 'Color - G', property: 'Color', value: 'G' },
          { key: 'Color - H', property: 'Color', value: 'H' },
          { key: 'Color - D', property: 'Color', value: 'D' },
          { key: 'Color - I', property: 'Color', value: 'I' },
          { key: 'Color - S-T', property: 'Color', value: 'S-T' },
          { key: 'Color - Q-R', property: 'Color', value: 'Q-R' },
          { key: 'Clarity - VVS1', property: 'Clarity', value: 'VVS1' },
          { key: 'Clarity - VVS2', property: 'Clarity', value: 'VVS2' },
          { key: 'Clarity - SI1', property: 'Clarity', value: 'SI1' },
          { key: 'Clarity - VS1', property: 'Clarity', value: 'VS1' },
          { key: 'Clarity - I2', property: 'Clarity', value: 'I2' },
          { key: 'Clarity - VS2', property: 'Clarity', value: 'VS2' },
          { key: 'Clarity - SI2', property: 'Clarity', value: 'SI2' },
          { key: 'Clarity - IF', property: 'Clarity', value: 'IF' },
          { key: 'Cut - EX', property: 'Cut', value: 'EX' },
          { key: 'Cut - VG', property: 'Cut', value: 'VG' },
          { key: 'Cut - GD', property: 'Cut', value: 'GD' },
          { key: 'Polish - EX', property: 'Polish', value: 'EX' },
          { key: 'Polish - VG', property: 'Polish', value: 'VG' },
          { key: 'Polish - GD', property: 'Polish', value: 'GD' },
          { key: 'Symmetry - EX', property: 'Symmetry', value: 'EX' },
          { key: 'Symmetry - VG', property: 'Symmetry', value: 'VG' },
          { key: 'Symmetry - GD', property: 'Symmetry', value: 'GD' },
          { key: 'Flour - M', property: 'Flour', value: 'M' },
          { key: 'Flour - N', property: 'Flour', value: 'N' },
          { key: 'Flour - ST', property: 'Flour', value: 'ST' },
          { key: 'Flour - F', property: 'Flour', value: 'F' },
        ]}
        groupBy="property"
        displayValue="key"
        showCheckbox={true}
        onSelect={(e) => onSelect(e)}
        onRemove={(e) => onRemove(e)}
        style={{
          inputField: {
            padding: '12px',
          },
          chips: {
            background: '#3f51b5',
          },
        }}
      />

      <div>
        <h3>Carat Range:</h3>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          marks
          step={0.01}
          min={0.2}
          max={0.35}
          style={{
            width: 500,
            paddingTop: 20,
          }}
        />
      </div>
    </div>
  );
};
