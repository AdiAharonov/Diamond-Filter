import React, { useState, useEffect } from 'react';
import { DiamondsList } from './Components/DiamondsList/DiamondsList';
import { diamondService } from './Services/diamondsService';
import { Filter } from './Components/DiamondFilter/DiamondFilter';

export const App = () => {
  const [diamonds, setDiamonds] = useState([]);
  const [filterBy, setFilterBy] = useState({Shape: '', Carat: {minCarat: 0, maxCarat: Infinity}, Color: '', Clarity: '', Cut: '', Polish: '', Symmetry: '', Flour: ''});
  const [currDiamondsTotalPrice, setCurrDiamondsTotalPrice] = useState(47610.36)

  useEffect(() => {
    loadDiamonds()
  }, [])

  useEffect(() => {
    const totalPrice = diamondService.getTotalPrice(diamonds)
    setCurrDiamondsTotalPrice(totalPrice)
  }, [diamonds])

  useEffect(() => {
    loadDiamonds()
  }, [filterBy])

  const loadDiamonds = () => {
    const currDiamonds = diamondService.query(filterBy);
    setDiamonds([...currDiamonds]);
  }
  
  const onSetFilter = (filter, field, name) => {
    if (filter === 'ALL') {
      setFilterBy({...filterBy, [field]: '' })
    } else if (name) {
      setFilterBy({...filterBy, [field]: {
        ...filterBy.Carat,
        [name]: filter 
      }})
      
    }
    else setFilterBy({...filterBy, [field]: filter });
  };

  return (
    <div className="App">
      <div>
      <h4>Total Number Of Diamonds: 99</h4>
      <h4>Total Diamonds Price: <span style={{color: "green"}}>$47610.36</span></h4>
      </div>
      <div>
      <h4>Current Number Of Diamonds: {diamonds.length}</h4>
      <h4>Current Diamonds Price: <span style={{color: "green"}}>${currDiamondsTotalPrice}</span></h4>
      </div>
      <Filter onSetFilter={onSetFilter} />
      {!diamonds && <h1>Loading...</h1>}
      {diamonds && <DiamondsList diamonds={diamonds} />}
    </div>
  );
}


