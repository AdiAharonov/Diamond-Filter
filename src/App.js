import React, { useState, useEffect } from 'react';
import { DiamondsList } from './Components/DiamondsList/DiamondsList';
import { diamondService } from './Services/diamondsService';
import { Filter } from './Components/DiamondFilter/DiamondFilter';
import { Header } from './Components/Header/Header';
import './App.scss';

const filterPlatte = () => {
  return {
    Shape: '',
    Color: '',
    Clarity: '',
    Cut: '',
    Polish: '',
    Symmetry: '',
    Flour: '',
  };
};

export const App = () => {
  const [diamonds, setDiamonds] = useState([]);
  const [filterBy, setFilterBy] = useState(filterPlatte());
  const [caratRange, setCaratRange] = useState([0.2, 0.35]);
  const [currDiamondsTotalPrice, setCurrDiamondsTotalPrice] = useState(
    47610.36
  );

  useEffect(() => {
    loadDiamonds();
  }, []);

  useEffect(() => {
    const totalPrice = diamondService.getTotalPrice(diamonds);
    setCurrDiamondsTotalPrice(totalPrice);
  }, [diamonds]);

  useEffect(() => {
    loadDiamonds();
  }, [filterBy, caratRange]);

  const loadDiamonds = () => {
    const currDiamonds = diamondService.query(filterBy, caratRange);
    setDiamonds([...currDiamonds]);
  };

  const onSetFilter = (filter) => {
    let currFilter = filterPlatte();
    setFilterBy(filterPlatte());

    filter.map((filterItem) => {
      if (currFilter[filterItem.property]) {
        if (filterBy[filterItem.property] !== '')
          currFilter[filterItem.property] += ' ' + filterItem.value;
        return setFilterBy({
          ...currFilter,
          [filterItem.property]: currFilter[filterItem.property],
        });
      } else {
        currFilter[filterItem.property] = '';
        currFilter[filterItem.property] += filterItem.value;
        return setFilterBy({
          ...currFilter,
          [filterItem.property]: currFilter[filterItem.property],
        });
      }
    });
  };

  return (
    <div className="App">
      <section>
        <Header
          diamonds={diamonds}
          currDiamondsTotalPrice={currDiamondsTotalPrice}
        />
        <Filter onSetFilter={onSetFilter} setCaratRange={setCaratRange} />
      </section>
      {!diamonds && <h1>Loading...</h1>}
      {diamonds && <DiamondsList diamonds={diamonds} />}
    </div>
  );
};
