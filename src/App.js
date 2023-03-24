import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import AddForm from './components/AddForm';
import ClockList from './components/ClockList';

function App() {
  const [arrTimeZone, setArrTimeZone] = useState([]);

  const addTimeZoneHandler = (name, shift) => {
    const newClock = {
      id: uuid(),
      name,
      shift
    };
    setArrTimeZone([...arrTimeZone, newClock]);
  }

  const deleteClock = (id) => {
    setArrTimeZone(arrTimeZone => arrTimeZone.filter((item) => item.id !== id));
  }
  
  return (
    <div className='App'>
      <AddForm fnAdd={addTimeZoneHandler}/>
      <ClockList arrZones={arrTimeZone} fnDelete={deleteClock}/>
    </div>
  );
}

export default App;
