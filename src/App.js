import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import AddForm from './components/AddForm';
// import ClassApp from './components/ClassApp'
// import Clock from './components/Clock';
// import Test from './components/Test';
// import TimeZoneInput from './components/TimeZoneInput';
// import AddZone from './components/addZone';




function App() {
  const [arrTimeZone, setArrTimeZone] = useState([]);

  const addTimeZoneHandler = (name, shift) => {
    // console.log('Adding', name, shift);
    // const name = 'Moscow';
    // const shift = '+5'
    const newClock = {
      id: uuid(),
      name,
      shift
    };
    // console.log(newClock);
    setArrTimeZone([...arrTimeZone, newClock]);
  }

  return (
    <div className='App'>
      <AddForm fnAdd={addTimeZoneHandler}/>
      {arrTimeZone.map((item) => <div key={item.id}>{item.name}{item.shift}</div>)}
    </div>
  );
}


export default App;
