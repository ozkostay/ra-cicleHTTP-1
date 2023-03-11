import React from 'react';

export default function Test() {

  const timeZones = [];
  timeZones.push({
    id: '1',
    name: 'Moscow',
    shift: '+3'
  });
  timeZones.push({
    id: '2',
    name: 'NewYork',
    shift: '-5'
  });
  console.log('=========================================');
  timeZones.forEach((item) => {
    console.log('-------------');
    // Вычесляем текущую зону в миллисекундах 
    let now = new Date() //.getTime();
    let localTimeZone = now.getTimezoneOffset() / 60;
    // let localTimeZone = '-5';
    let dateUTC = new Date(now.getTime() + (localTimeZone * 60 * 60 * 1000));
    console.log('now',now);
    console.log('UTC', dateUTC);
    console.log('time', new Date(dateUTC.getTime() + (item.shift * 60 * 60 * 1000)), 'name', item.name);

  });


  return <>
    <div>Norm</div>
  </>
}