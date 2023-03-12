import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import AddForm from './components/AddForm';
import ClockList from './components/ClockList';
// import ClassApp from './components/ClassApp'
// import Clock from './components/Clock';
// import Test from './components/Test';
// import TimeZoneInput from './components/TimeZoneInput';
// import AddZone from './components/addZone';

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
    
    console.log('deleteClock !!!!!', id);
    // //const tempArr = arrTimeZone.filter((item) => item.id !== id);
    // const arr2 = [...arrTimeZone]
    // const tempArr = [];
    tempDel();
    // console.log('arrTimeZone', arr2);
    // arrTimeZone.forEach((item) => {
    //   console.log('FFFFF', item.id);
    //   // if (item.id !== id) {
    //   //   tempArr.push(item);
    //   // }
    // });

    // console.log('tempArr', tempArr);
    // setArrTimeZone(tempArr);
  }
  
  const tempDel = () => {
    console.log('temDel arr: ', arrTimeZone);
    //toDelId =
  }

  const aaa = () => {
    console.log('arr: ', arrTimeZone);
  }

  return (
    <div className='App'>
      <button onClick={aaa}> ARR</button>
      <button onClick={deleteClock}> Del</button>
      <AddForm fnAdd={addTimeZoneHandler}/>
      {/* {arrTimeZone.map((item) => <div key={item.id}>{item.name}{item.shift}</div>)} */}
      {/* {arrTimeZone.map((item) => <Clock key={item.id} item={item} fnDelete={deleteClock} />)} */}
      <ClockList arrZones={arrTimeZone} fnDelete={deleteClock} tempDel={tempDel}/>
      {/* <Clock shift='3' fnDelete={deleteClock}/> */}
    </div>
  );
}

export default App;
// fnDelete={deleteClock}
