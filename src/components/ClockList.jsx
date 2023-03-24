import React from 'react';
import Clock from './Clock';

export default function ClickList({arrZones, fnDelete, tempDel}) {
  return <>
    {arrZones.map((item) => <Clock key={item.id} item={item} fnDelete={fnDelete} tempDel={tempDel}/>)}
  </>
}